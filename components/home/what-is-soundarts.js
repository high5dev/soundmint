import { useContext } from "react";
import Image from "next/image";
import { SidebarTrackerContext, ScrollContext } from "../../layout/page";
import { InView } from "react-intersection-observer";
import Router from "next/router";

const WhatIsSoundArts = () => {
  const { whatIsSoundArtsRef } = useContext(ScrollContext);
  const whatIsItems = [
    {
      text: "Generative Audio/Visual NFTs",
      image: "/img/home/what-is-icon-1.svg",
    },
    {
      text: "Each Piece is a unique musical art piece",
      image: "/img/home/what-is-soundmint-icon-2.svg",
    },
    {
      text: "Infinite Possibilities",
      image: "/img/home/what-is-icon-3.svg",
    },
  ];

  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );

  return (
    <InView
      onChange={(inView) =>
        onComponentVisible(inView, componentNames.whatIsSoundArts)
      }
    >
      <section
        className="bg-black text-white py-10"
        ref={whatIsSoundArtsRef}
        id="what-is-soundarts"
      >
        <div className="text-center wrapper">
          <h3 className="text-[40px] md:text-[50px] mx-auto  mb-16 lg:mb-0 lg:w-full">
            What Is SoundMint?
          </h3>

          <p className="hidden lg:block text-center text-sm font-mono mb-20 mt-6">
            SoundMint is the way to own a unique, generative musical & visual
            piece from your favorite artist.
          </p>
          <div className="lg:flex justify-between text-center space-y-20 lg:space-y-0">
            {whatIsItems.map((item, i) => (
              <div key={i}>
                <div className="mx-auto mb-4">
                  <Image
                    src={item.image}
                    className="mx-auto"
                    alt={item.text}
                    width="90"
                    height="90"
                  />
                </div>
                <p className="w-[210px] mx-auto font-mono lg:w-[220px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 md:w-[230px]">
            <button
              type="button"
              onClick={() => Router.push("/about")}
              className="bg-brightGreen text-black p-3 w-full font-sans font-bold tracking-wide hover:bg-brightBlue"
            >
              About Us
            </button>
          </div>
        </div>
      </section>
    </InView>
  );
};

export default WhatIsSoundArts;
