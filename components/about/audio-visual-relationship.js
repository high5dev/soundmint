import Image from "next/image";
import { useContext } from "react";
import { SidebarTrackerContext, ScrollContext } from "../../layout/page";
import { InView } from "react-intersection-observer";

const AudioVisual = ({ title, text, pillText }) => {
  const { visualsRef } = useContext(ScrollContext);
  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );

  const properties = [
    {
      text: "Visual properties and their assets.",
      stat: "3-10",
    },
    {
      text: "Audio properties and their assets.",
      stat: "3-10",
    },
  ];

  return (
    <InView
      onChange={(inView) => onComponentVisible(inView, componentNames.visuals)}
    >
      <section className="bg-black text-white py-10 lg:py-20" ref={visualsRef}>
        <div className="wrapper">
          <div className="flex md:mb-10">
            <div className="flex-shrink-0 border-0 md:border-b-[3px] md:border-white">
              <h3
                className={`text-[40px] md:text-[50px] mb-4 font-bold ${
                  pillText ? `flex` : ``
                }`}
              >
                <span className="block pr-20">{title}</span>
                {pillText && (
                  <p className="ml-4 text-sm bg-white text-black h-[35px] md:h-[40px] relative top-3 md:top-4 px-4">
                    <span className="relative top-2 md:top-2.5">
                      {pillText}
                    </span>
                  </p>
                )}
              </h3>
            </div>
            <div className="hidden md:flex flex-2 border-b border-white w-full relative">
              <p className="font-mono flex-2 text-sm pl-16 absolute right-0 bottom-8 hidden md:block">
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
          </div>
          <div>
            {/* mobile / tablet properties */}
            <div className="sm:grid sm:grid-cols-2 lg:hidden text-center">
              {properties.map((property, i) => (
                <div key={i} className="mb-12">
                  <h5 className="text-[40px] mb-2 font-bold">
                    {property.stat}
                  </h5>
                  <p className="w-44 mx-auto font-mono text-md md:w-[230px]">
                    {property.text}
                  </p>
                </div>
              ))}
            </div>
            {/* mobile imgs */}
            <div className="md:hidden">
              <div className="my-20">
                <div className="mb-8 text-center">
                  <Image
                    width="350"
                    height="450"
                    src="/img/home/soundmint-drop-img.jpg"
                    alt="SoundMint Drop"
                  />
                </div>
                <p className="font-mono w-56 mx-auto text-center">
                  Computer generated infinite possibilities.
                </p>
              </div>
              <div>
                <div className="mb-8 text-center">
                  <Image
                    width="350"
                    height="240"
                    src="/img/home/soundmint-drop-img-2.jpg"
                    alt="SoundMint Drop"
                  />
                </div>
              </div>
            </div>
            {/* tablet imgs */}
            <div className="hidden md:block lg:hidden">
              <div className="my-24">
                <div className="mb-8 text-center">
                  <Image
                    width="560"
                    height="700"
                    src="/img/home/soundmint-drop-img-lg.jpg"
                    alt="SoundMint Drop"
                  />
                </div>
                <p className="font-mono text-[20px] max-w-[300px] mx-auto mb-10 text-center">
                  Computer generated infinite possibilities.
                </p>
              </div>
              <div>
                <div className="mb-8">
                  <Image
                    width="870"
                    height="590"
                    src="/img/home/soundmint-drop-img-2-lg.jpg"
                    alt="SoundMint Drop"
                  />
                </div>
              </div>
            </div>
            {/* desktop */}
            <div className="hidden lg:grid grid-cols-8 gap-16 text-left">
              <div className="col-span-3">
                <div className="lg:mt-8">
                  <Image
                    width="560"
                    height="780"
                    src="/img/home/soundmint-drop-img-lg.jpg"
                    alt="SoundMint Drop"
                  />
                </div>
                <p className="font-mono max-w-[200px] mx-auto mb-10 text-center mt-4 text-sm">
                  Computer generated infinite possibilities.
                </p>
              </div>
              <div className="col-span-5">
                <div className="grid grid-cols-2">
                  {properties.map((property, i) => (
                    <div key={i} className="mb-12">
                      <h5 className="text-[40px] mb-2 font-bold text-md">
                        {property.stat}
                      </h5>
                      <p className="w-40 font-mono text-sm">{property.text}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <Image
                    width="870"
                    height="600"
                    src="/img/home/soundmint-drop-img-2-lg.jpg"
                    alt="SoundMint Drop"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InView>
  );
};

export default AudioVisual;
