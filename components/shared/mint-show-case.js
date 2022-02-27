import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import {
  SidebarTrackerContext,
  ScrollContext,
  ContractContext,
} from "../../layout/page";
import { InView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { injected, LATEST_PRICES, showError } from "../../common/constants";
import { useQuery } from "@apollo/client";

const MintShowCase = ({ showLearnBtn }) => {
  const router = useRouter();
  const { data } = useQuery(LATEST_PRICES);

  const { mintShowCaseRef } = useContext(ScrollContext);
  const { minter, baseToken, web3, notify } = useContext(ContractContext);
  const { library, account, activate } = useWeb3React();
  const [totalMinted, setTotalMinted] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isMintActive, setIsMintActive] = useState(false);
  const [isSaleActive, setIsSaleActive] = useState(false);
  const [isSignedMintActive, setIsSignedMintActive] = useState(false);
  const [maxWalletPurchase, setMaxWalletPurchase] = useState(0);
  const [mintCount, setMintCount] = useState(1);

  const nf = new Intl.NumberFormat("en-US");

  useEffect(() => {
    const init = async () => {

      if (minter && baseToken && web3) {

        // const price = await minter.methods.price().call();
        const currentPrice = web3.utils.fromWei("150000000000000000");
        const maxWalletPurchase = 10;//await minter.methods.maxWalletPurchase().call();
        const isSaleActive = false;//await minter.methods.saleIsActive().call();
        const totalMinted = 5000//await baseToken.methods.totalMinted().call();
        const maxSupply = 5000//await baseToken.methods.maxSupply().call();

        // const isSignedMintActive = await minter.methods
        //   .signedMintIsActive()
        //   .call();

        setCurrentPrice(currentPrice);
        setMaxWalletPurchase(maxWalletPurchase);
        setIsSignedMintActive(isSignedMintActive);
        setIsSaleActive(isSaleActive);

        setIsMintActive(
          (isSaleActive || isSignedMintActive) &&
            Number(totalMinted) < Number(maxSupply)
        );

        setTotalMinted(totalMinted);
        setMaxSupply(maxSupply);
        setupEvents();

      }

    };

    init();
  }, [
    minter,
    baseToken,
    web3,
    currentPrice,
    totalMinted,
    isMintActive,
    isSignedMintActive,
    data,
  ]);

  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );

  const whiteItems = [
    {
      icon: "/img/roadmap/mint-showcase/perk-icon.svg",
      text: "Holders will be entered into mintlist lottery for future SoundMint Drops.",
    },
    {
      icon: "/img/roadmap/mint-showcase/perk-icon-2.svg",
      text: "KLOUD Discord Server Invite Access and a unique profile role specific to this drop.",
    },
    {
      icon: "/img/roadmap/mint-showcase/perk-icon-3.svg",
      text: "Full license rights for non-commercial use.",
    },
  ];

  const setupEvents = async () => {
    //setup events
    // minter.events.LogPriceUpdated((err, events) => {
    //   if (!err) {
    //     const newPrice = events.returnValues.newPrice;
    //     const currentPrice = web3.utils.fromWei(newPrice);
    //     setCurrentPrice(currentPrice);
    //   }
    // });

    // minter.events.LogMint({ fromBlock: "latest" }, async (err, events) => {
    //   if (!err) {
    //     const totalMinted = events.returnValues.totalMinted;
    //     setTotalMinted(totalMinted);
    //   }
    // });
  };

  const onMintClick = async (e) => {
    e.preventDefault();

    if (isSignedMintActive) {
      let payload;

      await axios
        .get(`${process.env.S3_ENDPOINT}${account}.json`)
        .then((result) => {
          payload = result.data;
        })
        .catch(() => {});

      if (payload) {
        const isNonceConsumed = await minter.methods
          .nonces(payload.nonce)
          .call();

        if (!isNonceConsumed) {
          sendSignedMint(payload);
          return;
        } else {
          showError("Mint has already been redeemed.");
        }
      } else {
        showError("Account is not on the mint list.");
      }
    } else if (isSaleActive && !isSignedMintActive) {
      sendMint();
    }
  };

  const updateMintCount = (val) => {
    if (mintCount + val <= 0) return;
    if (mintCount + val > maxWalletPurchase) return;

    setMintCount(mintCount + val);
  };

  const sendSignedMint = async (payload) => {
    try {
      var tx = {
        from: account,
        to: minter._address,
        data: minter.methods
          .signedMint(
            mintCount,
            payload.maxPermitted,
            payload.signature,
            payload.nonce
          )
          .encodeABI(),
        value: web3.utils.toWei(currentPrice) * mintCount,
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

  const sendMint = async () => {
    try {
      var tx = {
        from: account,
        to: minter._address,
        data: minter.methods.mint(mintCount).encodeABI(),
        value: web3.utils.toWei(currentPrice) * mintCount,
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

  const getPreviousPrice = (price) => {
    const value = web3?.utils.fromWei(price);

    if (value) {
      return Number(value).toFixed(2);
    } else {
      return 0;
    }
  };

  return (
    <section
      className="bg-white pt-20 lg:pt-30"
      ref={mintShowCaseRef}
      id="mint-showcase"
    >
      <div className="wrapper">
        {isMintActive && !isSignedMintActive && (
          <div className="flex w-full mb-10 lg:mb-20">
            <div className="border-b-[3px] border-black flex-1">
              <p className="uppercase text-2xl md:text-lg pb-3 text-black">
                PUBLIC{" "}
                <span className="hidden md:inline">
                  {"//"} Jan 14 @ 12PM EST
                </span>
              </p>
            </div>
            <div className="border-b border-gray-400 flex-1">
              <p className="uppercase text-2xl md:text-lg pb-3 pl-6 text-gray-400">
                MintList{" "}
                <span className="hidden md:inline">
                  {"//"} Jan 11 @ 12PM EST - Jan 14 @ 10AM EST
                </span>
              </p>
            </div>
          </div>
        )}
        {isMintActive && isSignedMintActive && (
          <div className="flex w-full mb-10 lg:mb-20">
            <div className="border-b-[3px] border-black flex-1">
              <p className="uppercase text-2xl md:text-lg pb-3 text-black">
                MintList{" "}
                <span className="hidden md:inline">
                  {"//"} Jan 11 @ 12PM EST - Jan 14 @ 10AM EST
                </span>
              </p>
            </div>
            <div className="border-b border-gray-400 flex-1">
              <p className="uppercase text-2xl md:text-lg pb-3 pl-6 text-gray-400">
                PUBLIC{" "}
                <span className="hidden md:inline">
                  {"//"} Jan 14 @ 12PM EST
                </span>
              </p>
            </div>
          </div>
        )}
        {!isMintActive && Number(totalMinted) < Number(maxSupply) && (
          <div className="flex w-full mb-10 lg:mb-20">
            <div className="border-b-[3px] border-black flex-1">
              <p className="uppercase text-2xl md:text-lg pb-3 text-black">
                MintList{" "}
                <span className="hidden md:inline">
                  {"//"} Jan 11 @ 12PM EST - Jan 14 @ 10AM EST
                </span>
              </p>
            </div>
            <div className="border-b border-gray-400 flex-1">
              <p className="uppercase text-2xl md:text-lg pb-3 pl-6 text-gray-400">
                PUBLIC{" "}
                <span className="hidden md:inline">
                  {"//"} Jan 14 @ 12PM EST
                </span>
              </p>
            </div>
          </div>
        )}
        <div>
          <div className="md:grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-bold text-[30px] lg:text-[40px] my-3 lg:mt-0">
                WE_ARE_KLOUD
              </h3>

              <h5 className="block my-4 text-[13px] md:text-[13px] lg:text-base">
                <span className="font-bold">Music Artist: </span>{" "}
                <span className="font-mono mx-1">KLOUD</span> /{" "}
                <span className="font-bold ml-1">Visual Artist:</span>{" "}
                <span className="font-mono mx-1">Alex Hooker</span>
              </h5>

              <InView
                onChange={(inView) =>
                  onComponentVisible(inView, componentNames.mintShowCase)
                }
              >
                <h3 className="text-[28px] font-mono my-3">5000 Editions</h3>
              </InView>
              <p className="mb-6" style={{ lineHeight: "1.7rem" }}>
                KLOUD is the artistical embodiment of limitless creativity in
                anonymity. With this NFT drop, the collector enters the KLOUD,
                owning a unique visual & musical art piece derived from the
                generative algorithm that is KLOUD x HOOKER x COMPUTER.
              </p>

              <div>
                {isMintActive ? (
                  <div className="mb-20">
                    <div className="w-full h-[1px] bg-black mb-6" />
                    {!isSignedMintActive && (
                      <p className="text-[22px] font-bold mb-6">
                        Price starts at 0.2 eth and decreases by 0.01 eth every 15 minutes until it reaches 0.15 eth.
                      </p>
                    )}
                    <div className="grid grid-cols-3 lg:flex mb-6">
                      <div>
                        <h5 className="font-bold text-sm">Total Minted</h5>
                        <p
                          className={`${
                            totalMinted >= 1000
                              ? `text-2xl sm:text-3xl md:text-2xl lg:text-3xl`
                              : `text-2xl sm:text-3xl md:text-2xl lg:text-3xl`
                          }`}
                        >
                          {nf.format(totalMinted)}/{nf.format(maxSupply)}
                        </p>
                      </div>
                      <div className="h-[50px] w-[1px] bg-black mx-6 lg:mx-12 rotate-12 relative left-[40px] lg:left-[0] top-1" />
                      <div>
                        <h5 className="font-bold text-sm">Current Price</h5>
                        <p
                          className={`${
                            totalMinted >= 1000
                              ? `text-2xl sm:text-3xl md:text-2xl lg:text-3xl`
                              : `text-2xl sm:text-3xl md:text-2xl lg:text-3xl`
                          }`}
                        >
                          <span className="font-mono">{currentPrice}</span> Ξ
                        </p>
                      </div>
                      <div></div>
                      {data && (
                        <div className="ml-8 previous-bids">
                          <h5 className="font-bold text-sm text-gray-400">
                            Previous
                          </h5>
                          <div className="font-mono text-gray-400">
                            {data?.logPriceUpdatedEntities.map(
                              (logPrice, index) => {
                                const date = new Date(
                                  logPrice.timestamp * 1000
                                );

                                const hours = date.getHours("en-US", {
                                  minimumIntegerDigits: 2,
                                  useGrouping: false,
                                });

                                const minutes = date.getMinutes("en-US", {
                                  minimumIntegerDigits: 2,
                                  useGrouping: false,
                                });

                                return (
                                  <p key={index} className="text-xs">
                                    @ {hours}:{minutes} -{" "}
                                    {getPreviousPrice(logPrice.newPrice)} eth
                                  </p>
                                );
                              }
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-4 mb-12 md:mb-0">
                      <div className="flex lg:mb-0">
                        <input
                          type="button"
                          onClick={() => updateMintCount(-1)}
                          value="-"
                          className="px-4 flex-1 border border-black border-r-0 text-2xl bg-white hover:bg-black hover:text-white hover:cursor-pointer"
                        />
                        <input
                          type="text"
                          value={mintCount}
                          readOnly
                          className="w-full text-center focus:outline-none focus:ring-0"
                        />
                        <input
                          type="button"
                          onClick={() => updateMintCount(1)}
                          value="+"
                          className="px-4 flex-1 border border-black border-l-0 text-2xl bg-white hover:bg-black hover:text-white hover:cursor-pointer"
                        />
                      </div>
                      <p className="md:hidden mt-3 mb-8 font-mono text-sm">
                        *{maxWalletPurchase} mints maximum per wallet
                      </p>
                      <input
                        type="button"
                        onClick={async (e) => {
                          if (!account) {
                            try {
                              await activate(injected);
                            } catch (err) {}
                          } else {
                            onMintClick(e);
                          }
                        }}
                        value={`${account ? `Mint` : `Connect Wallet`}`}
                        className="bg-black text-white hover:bg-brightGreen hover:text-black hover:cursor-pointer w-full px-4 py-2 font-bold"
                      />
                    </div>
                    <p className="hidden md:block text-sm mt-2">
                      MINTLIST = MAX {maxWalletPurchase} MINTS
                    </p>
                  </div>
                ) : (
                  <>
                    {whiteItems.map((item, i) => (
                      <div className="flex items-center mb-12 lg:mb-6" key={i}>
                        <div className="flex-shrink-0 mr-6">
                          <Image
                            src={item.icon}
                            alt="Roadmap"
                            width="28"
                            height="28"
                          />
                        </div>
                        <p className="font-mono text-sm">{item.text}</p>
                      </div>
                    ))}
                    <h3 className="text-2xl font-bold lg:text-[30px] xl:relative">
                      {parseInt(totalMinted) === parseInt(maxSupply)
                        ? `Auction Ended / Sold Out`
                        : `Upcoming Drop ...`}
                    </h3>
                     <div className="my-12">
                      <a
                        href="https://go.soundmint.xyz/opensea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brightGreen text-black py-2 px-12 font-bold border-brightGreen hover:bg-brightBlue text-center block sm:inline-block"
                      >
                        View on OpenSea
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="pb-10 lg:pb-20">
              <div className="">
                <div className="image">
                  <Image
                    src="/img/mint-showcase/kloud.gif"
                    alt="WE ARE KLOUD"
                    width="700"
                    height="700"
                  />
                </div>
              </div>
              {(!isMintActive && !showLearnBtn) ||
                (showLearnBtn === true && !isMintActive && (
                  <button
                    type="button"
                    onClick={() => router.push("/about")}
                    className="bg-black text-white px-4 py-3 w-full font-sans font-bold tracking-wide xl:relative xl:-top-4 hover:bg-brightGreen hover:text-black"
                  >
                    Learn more about the project
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
      {isMintActive && (
        <section className="pt-10 bg-lightGrey text-black">
          <div className="wrapper">
            <h3 className="text-2xl mb-8 font-mono tracking-wide">
              Present Perks
            </h3>
            <div className={`grid sm:grid-cols-2 gap-8 lg:gap-10`}>
              {whiteItems.map((item, i) => (
                <div className="flex items-center" key={i}>
                  <div className="flex-shrink-0 mr-6">
                    <Image
                      src={item.icon}
                      alt="Roadmap"
                      width="35"
                      height="35"
                    />
                  </div>
                  <p className="font-mono lg:text-xs">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default MintShowCase;
