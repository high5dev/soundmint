import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import { useEffect, useContext, useState } from "react";
import { ScrollContext, ContractContext } from "../../layout/page";

const HeroBanner = () => {
  const { mintShowCaseRef, executeScroll } = useContext(ScrollContext);

  const [isMintActive, setIsMintActive] = useState(false);
  const [totalMinted, setTotalMinted] = useState(false);
  const [maxSupply, setMaxSupply] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);

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
        const price = await minter.methods.price().call();
        const currentPrice = web3.utils.fromWei(price);

        setCurrentPrice(currentPrice);
        setIsMintActive(isSaleActive || isSignedMintIsActive);
        setTotalMinted(totalMinted);
        setMaxSupply(maxSupply);
      }
    };
    init();
  }, [minter, baseToken, web3]);

  return (
    <section className="bg-black text-white pt-10 pb-20">
      <div className="wrapper">
        <h1 className="text-[45px] lg:text-[60px] uppercase font-bold">
          All Drops
        </h1>
        <div className="text-white pt-10 group">
          <Link href="/we-are-kloud">
            <a>
              <h3 className="text-[24px] mb-4 text-left">Current Drop</h3>
              <div className="border-4 border-brightGreen group-hover:border-brightBlue">
                <div className="pt-4 align-bottom">
                  <div className="mx-auto sm:hidden image px-4 text-center">
                    <Image
                      src="/img/drops/we-are-kloud-mobile.png"
                      alt="We Are Klouds"
                      width="358"
                      height="200"
                      priority
                    />
                  </div>
                  <div className="px-10 mx-auto hidden sm:block image">
                    <Image
                      src="/img/drops/we-are-kloud.jpg"
                      alt="We Are Klouds"
                      width="1500"
                      height="400"
                      priority
                    />
                  </div>
                </div>
                <div className="p-6 md:p-10 bg-white text-black">
                  <h4 className="uppercase text-3xl font-bold mb-6 text-left">
                    We Are Kloud
                  </h4>
                  <p className="font-mono text-left">
                    With this NFT drop, the collector enters the KLOUD, owning a
                    unique visual & musical art piece derived from the
                    generative algorithm that is KLOUD x HOOKER x COMPUTER.
                  </p>
                  <div className="h-[1px] border-b border-black my-6" />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-8 md:mb-0">
                    <div>
                      <h5 className="text-md font-bold">Total Minted</h5>
                      <p className="text-md">{totalMinted}</p>
                    </div>
                    <div className="hidden sm:block">
                      <h5 className="text-md font-bold">Project Size</h5>
                      <p className="text-md">{maxSupply}</p>
                    </div>
                    <div>
                      <h5 className="text-md font-bold">Price</h5>
                      <p className="text-md">{currentPrice} Ξ</p>
                    </div>
                    <div className="hidden lg:block">
                      <div className="bg-lightGrey text-black p-2 text-center font-bold group-hover:bg-lightGrey">
                        <p>Sold Out</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 lg:hidden">
                    <div className="bg-lightGrey text-black p-2 text-center font-bold group-hover:bg-lightGrey">
                      <p>Sold Out</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      {/* <div className="h-[1px] border-b border-white mt-32" /> */}
    </section>
  );
};

export default HeroBanner;
