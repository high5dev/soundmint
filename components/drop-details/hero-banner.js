import { useEffect, useContext, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  SidebarTrackerContext,
  ScrollContext,
  ContractContext,
} from "../../layout/page";
import { InView } from "react-intersection-observer";
import Countdown from "react-countdown";

const Button = dynamic(() => import("../shared/button"));

const HeroBanner = () => {
  const { heroRef, mintShowCaseRef, aboutTheArtistsRef, executeScroll } =
    useContext(ScrollContext);
  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div>
          <p className="uppercase drop-details-hero-outline-text not-active">
            SOLD OUT
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex justify-between w-full">
          <p className="drop-details-hero-outline-text flex-shrink-0">
            {days}d
          </p>
          <p className="drop-details-hero-outline-text flex-shrink-0">
            {hours}h
          </p>
          <p className="drop-details-hero-outline-text flex-shrink-0">
            {minutes}m
          </p>
          <p className="drop-details-hero-outline-text flex-shrink-0">
            {seconds}s
          </p>
        </div>
      );
    }
  };

  const [isMintActive, setIsMintActive] = useState(false);
  const [totalMinted, setTotalMinted] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);

  const { minter, baseToken, web3 } = useContext(ContractContext);

  useEffect(() => {
    const init = async () => {
      if (minter && baseToken && web3) {
        const totalMinted = await baseToken.methods.totalMinted().call();
        const maxSupply = await baseToken.methods.maxSupply().call();
        const isSaleActive = await minter.methods.saleIsActive().call();
        const isSignedMintIsActive = await minter.methods
          .signedMintIsActive()
          .call();

        setIsMintActive(isSaleActive || isSignedMintIsActive);
        setTotalMinted(totalMinted);
        setMaxSupply(maxSupply);
      }
    };
    init();
  }, [minter, baseToken, web3]);

  return (
    <InView
      onChange={(inView) =>
        onComponentVisible(inView, componentNames.heroBanner)
      }
    >
      <section
        className="bg-black text-white pt-10 relative lg:min-h-[650px]"
        ref={heroRef}
      >
        <div className="wrapper relative">
          <div className="md:flex md:justify-between">
            <div className="relative md:top-8 flex-1">
              <h1 className="text-[33px] md:text-[35px] lg:text-[50px] xl:text-[55px] font-bold uppercase border-b-[2px] border-white leading-tight inline-block lg:pt-12">
                KLOUD & HOOKER
              </h1>
              <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-12">
                <button
                  onClick={() => executeScroll(mintShowCaseRef)}
                  className="bg-brightGreen text-black py-2 px-10 font-bold text-md border border-brightGreen hover:bg-brightBlue text-center"
                >
                  Mint Now
                </button>
                <button
                  onClick={() => executeScroll(aboutTheArtistsRef)}
                  className="bg-brightGreen text-black py-2 px-10 font-bold text-md border border-brightGreen hover:bg-brightBlue text-center"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="text-center md:hidden">
                <Image
                  src="/img/drop-details/drop-details-hero-img-lg.jpg"
                  alt="Drop Details"
                  className="w-full relative left-[50%]"
                  width="250"
                  height="400"
                  priority
                />
              </div>
              <div className="text-center hidden md:block">
                <Image
                  src="/img/drop-details/drop-details-hero-img-lg.jpg"
                  alt="Drop Details"
                  className="w-full relative left-[50%]"
                  width="350"
                  height="600"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="left-0 right-0 absolute bottom-6">
          <div className="wrapper">
            <Countdown
              date={new Date(Date.UTC(2022, 0, 11, 17))?.toLocaleString(
                "en-US"
              )}
              renderer={renderer}
            />
          </div>
        </div>
      </section>
    </InView>
  );
};

export default HeroBanner;
