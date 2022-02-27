import { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  SidebarTrackerContext,
  ScrollContext,
  ContractContext,
} from "../../layout/page";
import { InView } from "react-intersection-observer";
const Button = dynamic(() => import("../shared/button"));

const HeroBanner = ({}) => {
  const { heroRef, mintShowCaseRef, executeScroll } = useContext(ScrollContext);
  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );
  const { minter, baseToken, web3 } = useContext(ContractContext);

  const [isMintActive, setIsMintActive] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (minter && baseToken && web3) {
        const isSaleActive = await minter.methods.saleIsActive().call();
        const isSignedMintIsActive = await minter.methods
          .signedMintIsActive()
          .call();

        setIsMintActive(isSaleActive || isSignedMintIsActive);
      }
    };
    init();
  }, [minter, baseToken, web3]);

  return (
    <section className="bg-black text-white" ref={heroRef}>
      <div className="hidden md:block wrapper relative">
        <div className="pt-10 relative">
          <div className="relative">
            <Link href="/we-are-kloud">
              <a title="KLOUD x Alex Hooker">
                <div className="absolute top-0 left-0 py-2 px-4 bg-black text-white flex items-center z-10 font-normal">
                  <div className="flex text-[12px]">
                    SoundMint // by KLOUD x Alex Hooker
                    <div className="ml-4 relative top-[2px]">
                      <Image
                        src="/img/white-arrow.svg"
                        width="23"
                        height="12"
                        alt="Arrow"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <div className="w-[65%]">
              <Image
                src="/img/home/home-hero-img-lg.jpg"
                width="735"
                height="675"
                alt="We Are Kloud"
                priority
              />
            </div>
          </div>
          <div className="hero-text-box">
            <div className="hero-text-box-inner">
              <InView
                onChange={(inView) =>
                  onComponentVisible(inView, componentNames.heroBanner)
                }
              >
                <h1 className="font-bold">Sounds Rare.</h1>
              </InView>
              <p className="font-mono tracking-normal">
                Building the platform to create generative music NFTs. Initial
                collaborations curated by SoundMint team.
              </p>
              <div className="hidden lg:grid grid-cols-3 gap-7 mt-12">
                {isMintActive ? (
                  <button
                    onClick={() => executeScroll(mintShowCaseRef)}
                    title="Mint Now"
                    target="_blank"
                    rel="noreferrer"
                    className={`bg-white text-black p-2 border border-white font-bold hover:bg-black hover:border-white hover:border hover:text-white text-center`}
                  >
                    Mint Now
                  </button>
                ) : (
                  <a
                    href="https://discord.gg/keJxyu2uZQ"
                    title="Join Discord"
                    target="_blank"
                    rel="noreferrer"
                    className={`bg-white text-black p-2 border border-white font-bold hover:bg-black hover:border-white hover:border hover:text-white text-center`}
                  >
                    Join Discord
                  </a>
                )}
                <Button text="Learn More" link="/about" type="secondary" />
                <Button text="Sign Up" link="/#sign-up" type="dark" />
              </div>
              <div className="hidden md:block lg:hidden mt-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {isMintActive ? (
                    <button
                      onClick={() => executeScroll(mintShowCaseRef)}
                      title="Mint Now"
                      target="_blank"
                      rel="noreferrer"
                      className={`bg-white text-black p-2 border border-white font-bold hover:bg-black hover:border-white hover:border hover:text-white text-center`}
                    >
                      Mint Now
                    </button>
                  ) : (
                    <a
                      href="https://discord.gg/keJxyu2uZQ"
                      title="Join Discord"
                      target="_blank"
                      rel="noreferrer"
                      className={`bg-white text-black p-2 border border-white font-bold hover:bg-black hover:border-white hover:border hover:text-white text-center`}
                    >
                      Join Discord
                    </a>
                  )}
                  <Button text="Learn More" link="/about" type="secondary" />
                </div>
                <Button
                  text="Sign Up"
                  link="/#sign-up"
                  type="dark"
                  width="full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper md:hidden pb-10">
        <h1 className="text-[45px] md:text-[50px] font-sans pt-2 font-bold">
          Sounds Rare.
        </h1>
        <p className="mt-4 mb-8 font-mono">
          Building the platform to create generative music NFTs. Initial
          collaborations curated by SoundMint team.
        </p>
        {/* pre-launch buttons */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <a
            href="https://discord.gg/keJxyu2uZQ"
            target="_blank"
            rel="noreferrer"
            className={`bg-white text-black p-2 border border-white font-bold text-md hover:bg-black hover:border-white hover:border hover:text-white text-center`}
          >
            Join Discord
          </a>
          <Button text="Learn More" link="/about" type="secondary" />
        </div>
        <Button text="Sign Up" link="/#sign-up" type="dark" width="full" />
      </div>
      <div>
        <div className="relative md:hidden">
          <Link href="/we-are-kloud">
            <a title="KLOUD x Alex Hooker">
              <div className="absolute top-0 left-0 py-2 px-4 bg-black text-white flex items-center z-10 font-normal">
                <div className="flex text-[12px]">
                  SoundMint // by KLOUD x Alex Hooker
                  <div className="ml-4 relative top-[2px]">
                    <Image
                      src="/img/white-arrow.svg"
                      width="23"
                      height="12"
                      alt="Arrow"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="hidden lg:block image">
                <Image
                  width="900"
                  height="980"
                  src="/img/home/home-hero-img.png"
                  alt="SoundMint by KLOUD x Alex Hooker"
                  className="w-full"
                  priority
                />
              </div>
              <div className="image">
                <Image
                  width="800"
                  height="600"
                  src="/img/home/home-hero-img.png"
                  alt="SoundMint by KLOUD x Alex Hooker"
                  className="w-full"
                  priority
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
