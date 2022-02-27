import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  SidebarTrackerContext,
  ScrollContext,
  ContractContext,
} from "../../layout/page";
import { InView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";
import Countdown from "react-countdown";
import { injected, LATEST_BIDS, showError } from "../../common/constants";
import { useQuery } from "@apollo/client";

const Roadmap = dynamic(() => import("./roadmap"));

const HomeAbout = ({ showLearnBtn }) => {
  const Router = useRouter();
  const { data } = useQuery(LATEST_BIDS);

  const { aboutDropRef } = useContext(ScrollContext);
  const { nounsAuctionHouse, web3, notify } = useContext(ContractContext);
  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );
  const [currentBid, setCurrentBid] = useState("");
  const [endTime, setEndTime] = useState(null);
  const [timeBuffer, setTimeBuffer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [tokenId, setTokenId] = useState(0);
  const [bid, setBid] = useState(0);
  const [minBidIncrementPercentage, setMinBidIncrementPercentage] = useState(0);
  const { library, account, activate } = useWeb3React();

  useEffect(() => {
    const init = async () => {

      if (nounsAuctionHouse && web3) {

        const auction = await nounsAuctionHouse.methods.auction().call();
        const timeBuffer = await nounsAuctionHouse.methods.timeBuffer().call();
        const reservePrice = await nounsAuctionHouse.methods.reservePrice().call();
        const minBidIncrementPercentage = await nounsAuctionHouse.methods.minBidIncrementPercentage().call();

        setTimeBuffer(Math.floor(timeBuffer / 60));
        setMinBidIncrementPercentage(minBidIncrementPercentage);

        if (auction) {
          if (!auction || auction.startTime === "0" || auction.endTime === "0")
            return;

          const now = new Date();
          const startTime = new Date(auction.startTime * 1000);
          const endTime = new Date(auction.endTime * 1000);

          const currentBid =
            Number(auction.amount) === 0 ? reservePrice : auction.amount;

          setCurrentBid(currentBid);
          setEndTime(auction.endTime);
          setTokenId(auction.nounId);

          if (now >= startTime && now <= endTime) {
            setIsActive(true);
          }

          if (now >= endTime) {
            setIsExpired(true);
          }

          // setupEvents();
        }
      }
    };

    init();
  }, [
    nounsAuctionHouse,
    web3,
    isActive,
    isExpired,
    currentBid,
    timeBuffer,
    endTime,
    data,
  ]);

  const auctionItems = [
    {
      title: "Full license rights for non-commercial use.",
      image: "/img/about-drop/auction-icon-1.svg",
    },
    {
      title: "KLOUD Discord access and 1/1 profile role.",
      image: "/img/about-drop/auction-icon-2.svg",
    },
    {
      title: "Access to KLOUD shows for life (non-festival)",
      image: "/img/about-drop/auction-icon-3.svg",
    },
    {
      title: "Ability to have 1 on 1 text-conversation with KLOUD via Discord.",
      image: "/img/about-drop/auction-icon-4.svg",
    },
    {
      title: "Mintlist for future SoundMint KLOUD drop.",
      image: "/img/about-drop/auction-icon-5.svg",
    },
    {
      title: "Physical plaque of the 1/1 for the genesis auction winner.",
      image: "/img/about-drop/auction-icon-6.svg",
    },
  ];

  const roadmapItems = [
    {
      icon: "/img/roadmap/about-drop/genesis-icon-1.svg",
      text: "Exclusive KLOUD_genesis Merch bundle 1/1.",
    },
    {
      icon: "/img/roadmap/about-drop/genesis-icon-2.svg",
      text: "Physical plaque of the 1/1 for the genesis auction winner.",
    },
    {
      icon: "/img/roadmap/about-drop/genesis-icon-3.svg",
      text: "Exclusive access to future KLOUD metaverse events.",
    },
    {
      icon: "/img/roadmap/about-drop/genesis-icon-4.svg",
      text: "Physical SoundMint plaque that is specific to all 1/1 owners.",
    },
  ];

  const setupEvents = async () => {

    //setup events

    nounsAuctionHouse.events.AuctionBid((err, events) => {
      if (!err) {
        const newBid = events.returnValues.value;
        setCurrentBid(newBid);
      }
    });

    nounsAuctionHouse.events.AuctionExtended((err, events) => {
      if (!err) {
        setEndTime(events.returnValues.endTime);
      }
    });

  };

  const onBid = async () => {
    if (bid <= 0) {
      showError("Bid must be greater than 0!");
      return;
    }

    try {
      var tx = {
        from: account,
        to: nounsAuctionHouse._address,
        data: nounsAuctionHouse.methods.createBid(tokenId).encodeABI(),
        value: web3.utils.toWei(bid),
      };

      await library.eth
        .sendTransaction(tx)
        .on("transactionHash", function (hash) {
          notify.hash(hash);
        });
    } catch (ex) {
      showError(ex.message);
    }
  };

  const getCurrentBid = () => {
    const bid = web3?.utils.fromWei(currentBid);

    if (bid) {
      return Number(bid).toFixed(2);
    } else {
      return 0;
    }
  };

  const getMinBid = () => {
    const bid = web3?.utils.fromWei(currentBid);

    if (bid) {
      const minBid =
        Number(bid) + Number(bid * (minBidIncrementPercentage / 100));
      return (Math.ceil(minBid * 100) / 100).toFixed(2);
    } else {
      return 0;
    }
  };

  const getBidEntityPrice = (price) => {
    const value = web3?.utils.fromWei(price);

    if (value) {
      return Number(value).toFixed(2);
    } else {
      return 0;
    }
  };

  const AuctionComplete = () => <span>Auction Expired.</span>;

  const RenderCountDown = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <AuctionComplete />;
    } else {
      return (
        <>
          <p className="text-[26px] md:text-3xl lg:text-4xl">
            {hours}
            <span className="inline-block text-[16px] md:text-xl md:ml-1">
              h
            </span>
          </p>
          <p className="text-[26px] md:text-3xl lg:text-4xl">
            {minutes}
            <span className="inline-block text-[16px] md:text-xl md:ml-1">
              m
            </span>
          </p>
          <p className="text-[26px] md:text-3xl lg:text-4xl">
            {seconds}
            <span className="inline-block text-[16px] md:text-xl md:ml-1">
              s
            </span>
          </p>
        </>
      );
    }
  };

  return (
    <section className="bg-black text-white py-10 lg:py-20" ref={aboutDropRef}>
      <div className="wrapper">
        <div className="flex flex-col md:flex-none md:grid md:grid-cols-5 gap-x-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="md:hidden">
                <h3 className="text-[30px] md:text-[40px] font-bold">
                  KLOUD_GENESIS
                </h3>
                <h5 className="block my-4 text-[13px] md:text-[13px] lg:text-base">
                  <span className="font-bold">Music Artist: </span>{" "}
                  <span className="font-mono mx-1">KLOUD</span> /{" "}
                  <span className="font-bold ml-1">Visual Artist:</span>{" "}
                  <span className="font-mono mx-1">Alex Hooker</span>
                </h5>
                <h3 className="text-[26px] font-mono my-4">1 Edition</h3>
                <p className="mt-4 mb-8">
                  This NFT is a unique 1/1 that is personally curated by KLOUD x
                  HOOKER. It represents the artists{"'"} complete rendition of
                  the collection. Owning this piece creates a deeper connection
                  between the collector, collection, and artist.
                </p>
              </div>
              {isActive ? (
                <video width="700" height="700" controls>
                  <source src="https://soundmint-public.s3.amazonaws.com/KLOUD_REVEALED/videos/KLOUD_NFT_Genesis_017_Compressed.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  width="700"
                  height="700"
                  src="/img/about-drop/drop-img-blur.jpg"
                  alt="I AM KLOUD"
                  className="w-full"
                />
              )}
              {!isActive && (
                <p className="text-xs font-mono mt-3 mb-8">
                  * Official 1/1 artwork coming soon...
                </p>
              )}
            </div>
            {!isActive && showLearnBtn === true && (
              <button
                type="button"
                onClick={() => Router.push("/about")}
                className="bg-brightGreen text-black p-3 w-full font-sans font-bold tracking-wide hover:bg-brightBlue mb-12 md:mb-0"
              >
                Learn more about the project
              </button>
            )}
          </div>
          <div className="md:col-span-3">
            <div className="hidden md:block">
              <InView
                onChange={(inView) =>
                  onComponentVisible(inView, componentNames.about)
                }
              >
                <h3 className="text-[30px] md:text-[40px] font-bold">
                  KLOUD_GENESIS
                </h3>
              </InView>
              {isActive && !isExpired && (
                <p className="my-6">
                  This NFT is a unique 1/1 that is personally curated by KLOUD x
                  HOOKER. It represents the artists{"'"} complete rendition of
                  the collection. Owning this piece creates a deeper connection
                  between the collector, collection, and artist.
                </p>
              )}
            </div>
            {isActive && !isExpired ? (
              <div>
                <div className="flex mb-6 relative">
                  <div className="flex-1 md:flex-none">
                    <h5 className="font-medium text-md mb-1">Current Bid</h5>
                    {currentBid && web3 && (
                      <p className="text-[26px] md:text-3xl lg:text-4xl">
                        <span className="md:font-mono">
                          {getCurrentBid(currentBid)}
                        </span>{" "}
                        Ξ
                      </p>
                    )}
                    <span className="text-xs inline-block mt-1">
                      *Min Bid = {getMinBid(currentBid)} ETH
                    </span>
                  </div>
                  <div className="h-[95px] md:h-[80px] lg:h-[95px] w-[1px] bg-white mx-12 absolute left-[24%] md:relative md:left-0 lg:mx-12 rotate-12" />
                  <div className="flex-1 md:flex-none">
                    <h5 className="font-medium text-md md:mb-1">Ends In</h5>
                    <div className="flex space-x-3 md:space-x-6 md:font-mono">
                      <Countdown
                        date={new Date(endTime * 1000)?.toLocaleString("en-US")}
                        renderer={RenderCountDown}
                      />
                    </div>
                    {timeBuffer && (
                      <span className="text-xs inline-block mt-1">
                        *Auction expands {timeBuffer} mins every bid
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="md:grid md:grid-cols-5 gap-6">
                    <div className="col-span-3 flex border border-white w-full mb-6">
                      <input
                        type="number"
                        value={bid}
                        onChange={(e) => setBid(e.target.value)}
                        className="bg-transparent border-0 focus:ring-0 focus:outline-none padding-0 p-3 w-full"
                        min="0"
                      />
                      <div className="">
                        <p className="relative top-3 pr-4">ETH</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={async (e) => {
                        if (!account) {
                          try {
                            await activate(injected);
                          } catch (err) {}
                        } else {
                          onBid();
                        }
                      }}
                      className="bg-brightGreen text-black p-3 w-full font-sans font-bold tracking-wide hover:bg-brightBlue mb-6 col-span-2"
                    >
                      Place Bid
                    </button>
                  </div>
                  <div
                    className={`space-y-4 ${
                      data?.auctionBidEntities.length > 4
                        ? `h-[240px] overflow-y-scroll`
                        : ``
                    }`}
                  >
                    {data?.auctionBidEntities.map((bidEntity, index) => {
                      const colors = [
                        "brightYellow",
                        "brightOrange",
                        "brightBlue",
                        "brightGreen",
                      ];

                      const colorIndex = index % colors.length;

                      return (
                        <a
                          href={`${process.env.ETHERSCAN_URL}${bidEntity.sender}`}
                          target="_blank"
                          rel="noreferrer"
                          className="block"
                          key={index}
                        >
                          <div
                            className={`flex items-center justify-between bg-bidGray px-4 py-3 ${
                              data?.auctionBidEntities.length > 4 ? `mr-4` : ``
                            }`}
                          >
                            <div className="flex items-center">
                              <div
                                className={`bg-${colors[colorIndex]} w-6 h-6 rounded-full mr-4`}
                              />
                              <p className="font-mono">
                                {bidEntity.sender.substr(0, 10)}...
                                {bidEntity.sender.substr(-4, 4)}
                              </p>
                            </div>
                            <div className="flex">
                              <p className="mr-4">
                                {getBidEntityPrice(bidEntity.value)}{" "}
                                <span className="relative top-[1px] -right-1">
                                  Ξ
                                </span>
                              </p>
                              <Image
                                src="/img/white-arrow.svg"
                                alt="Arrow"
                                width="25"
                                height="4"
                              />
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="hidden md:block">
                  <h5 className="hidden sm:block my-4">
                    <span className="font-bold">Music Artist: </span>{" "}
                    <span className="font-mono mx-2">KLOUD</span> /{" "}
                    <span className="font-bold ml-2">Visual Artist:</span>{" "}
                    <span className="font-mono mx-2">Alex Hooker</span>
                  </h5>
                  <h3 className="text-[26px] font-mono my-4">1 Edition</h3>
                  <p className="mt-4 mb-8">
                    This NFT is a unique 1/1 that is personally curated by KLOUD
                    x HOOKER. It represents the artists{"'"} complete rendition
                    of the collection. Owning this piece creates a deeper
                    connection between the collector, collection, and artist.
                  </p>
                </div>
                <div className="md:grid lg:grid-cols-2 gap-8">
                  {auctionItems.map((item, i) => (
                    <div className="flex mb-8 md:mb-0" key={i}>
                      <div className="mr-6 flex-shrink-0 relative top-1">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width="35"
                          height="35"
                        />
                      </div>
                      <h5 className="font-mono text-xs">{item.title}</h5>
                    </div>
                  ))}
                </div>
                <div className="relative mt-5">
                  <p className="text-[30px]">
                    {isExpired ? `Auction Ended...` : isActive ? `Checking... please refresh the page` : "Upcoming Auction..."}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {isActive && !isExpired && (
          <div className="mt-24">
            <h3 className="text-2xl mb-8 font-mono tracking-wide">
              Present Genesis Perks
            </h3>
            <div className="grid md:grid-cols-2 lg:gap-6">
              {auctionItems.map((item, i) => (
                <div className="flex mb-8 items-center" key={i}>
                  <div className="mr-6 flex-shrink-0 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width="35"
                      height="35"
                    />
                  </div>
                  <h5 className="font-mono text-sm">{item.title}</h5>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-10">
        <Roadmap
          items={roadmapItems}
          background="bg-black"
          textColor="text-white"
          gridCols="xl:grid-cols-2"
          title="Future Genesis Perks"
        />
      </div>
    </section>
  );
};
export default HomeAbout;
