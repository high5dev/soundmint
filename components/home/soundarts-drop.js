import { useContext } from "react";
import Image from "next/image";
import { SidebarTrackerContext, ScrollContext } from "../../layout/page";
import { InView } from "react-intersection-observer";

const SoundArtsDrop = () => {
  const { soundArtsDropRef } = useContext(ScrollContext);
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

  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );

  return (
    <section
      className="bg-black text-white text-center py-20"
      ref={soundArtsDropRef}
    >
      <div className="wrapper">
        <h3 className="text-[30px] md:text-[35px] mx-auto mb-20 font-medium max-w-[400px]">
          What does a SoundMint drop look like?
        </h3>
        <InView
          onChange={(inView) =>
            onComponentVisible(inView, componentNames.soundArtsDrop)
          }
        >
          <div>
            {/* mobile / tablet properties */}
            <div className="md:grid md:grid-cols-2 lg:hidden">
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
                <div className="mb-8">
                  <Image
                    width="350"
                    height="450"
                    src="/img/home/soundmint-drop-img.jpg"
                    alt="SoundMint Drop"
                  />
                </div>
                <p className="font-mono w-56 mx-auto">
                  Computer generated infinite possibilities.
                </p>
              </div>
              <div>
                <div className="mb-8">
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
                <div className="mb-8">
                  <Image
                    width="560"
                    height="700"
                    src="/img/home/soundmint-drop-img-lg.jpg"
                    alt="SoundMint Drop"
                  />
                </div>
                <p className="font-mono text-[20px] max-w-[300px] mx-auto mb-10">
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
        </InView>
      </div>
    </section>
  );
};

export default SoundArtsDrop;
