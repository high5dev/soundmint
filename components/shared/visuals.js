import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import {
  SidebarTrackerContext,
  ScrollContext,
  ContractContext,
} from "../../layout/page";
import { InView } from "react-intersection-observer";

const Visuals = ({ title, text, pillText }) => {
  const { visualsRef, mintShowCaseRef, executeScroll } =
    useContext(ScrollContext);

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
    <InView
      onChange={(inView) => onComponentVisible(inView, componentNames.visuals)}
    >
      <section className="bg-black text-white pt-10 lg:pt-20" ref={visualsRef}>
        <div className="wrapper">
          <div className="flex md:mb-10">
            <div className="flex-shrink-0 border-0 md:border-b-[3px] md:border-white">
              <h3
                className={`text-[40px] md:text-[50px] mb-4 font-bold ${
                  pillText ? `flex` : ``
                }`}
              >
                <span>{title}</span>
                {pillText && (
                  <p className="ml-4 text-sm bg-white text-black h-[35px] md:h-[40px] relative top-3 md:top-4 px-4">
                    <span className="relative top-2 md:top-2.5">
                      {pillText}
                    </span>
                  </p>
                )}
              </h3>
            </div>
            <div className="flex-2 border-b border-white w-full hidden md:block">
              <p className="font-mono flex-2 text-sm pl-16 relative top-[20px] hidden md:block">
                {text}
              </p>
            </div>
          </div>
          <p className="block md:hidden font-mono mb-10">{text}</p>
          <div className="flex md:hidden">
            <div className="border-b-[3px] border-white flex-1" />
            <div className="border-b border-white flex-1" />
          </div>
          <div className="py-14 lg:pb-20 text-center max-w-[600px] mx-auto">
            <p className="text-[30px] lg:text-[40px]">
              +1 randomized artwork with generative attributes
            </p>
            {isMintActive && (
              <div className="mt-8 lg:mt-12">
                <button
                  className="text-center bg-brightGreen text-black py-2 px-12 font-bold  border border-brightGreen hover:bg-brightBlue"
                  onClick={() => executeScroll(mintShowCaseRef)}
                >
                  Mint Now
                </button>
              </div>
            )}
          </div>
          <div className="block md:hidden text-center image pb-10">
            <Image
              src="/img/drop-details/visuals.svg"
              alt="Visuals"
              width="500"
              height="300"
              priority
            />
          </div>
          <div className="hidden md:block relative image pb-10 lg:pb-20">
            <Image
              src="/img/drop-details/visuals.jpg"
              alt="Visuals"
              width="1200"
              height="650"
              priority
            />
          </div>
        </div>
      </section>
    </InView>
  );
};

export default Visuals;
