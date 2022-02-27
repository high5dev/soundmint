import { useContext } from "react";
import Image from "next/image";
import { SidebarTrackerContext, ScrollContext } from "../../layout/page";
import { InView } from "react-intersection-observer";

const BehindTheScenes = ({}) => {
  const { behindTheScenesRef } = useContext(ScrollContext);
  const btsItems = [
    {
      icon: "/img/home/bts-icon-2.svg",
      text: "Every drop is linked with the SoundMint Brand and Tied to our Contracts.",
    },
    {
      icon: "/img/home/bts-icon-1.svg",
      text: "Individual Stems and Art components are made by an artist and mashed together by a computer.",
    },
    {
      icon: "/img/home/bts-icon-3.svg",
      text: "Since files are too large, they are not fully on-chain, but providence is on-chain.",
    },
  ];

  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );

  return (
    <section className="pt-20 lg:pt-32 pb-4" ref={behindTheScenesRef}>
      <div className="wrapper lg:grid lg:grid-cols-2 gap-16">
        <div className="mb-6 md:hidden">
          <Image
            src="/img/home/code-snippet.jpg"
            alt="Behind The Scenes"
            width="600"
            height="600"
          />
        </div>
        <div className="hidden md:block mb-8 lg:mb-0">
          <Image
            src="/img/home/code-snippet.jpg"
            alt="Behind The Scenes"
            width="653"
            height="636"
          />
        </div>
        <div className="lg:px-8">
          <InView
            onChange={(inView) =>
              onComponentVisible(inView, componentNames.behindTheScenes)
            }
          >
            <h3 className="text-[40px] w-[250px] md:w-full font-bold mb-2 leading-tight">
              Behind the Scenes
            </h3>
          </InView>
          <p className="font-mono mb-8">
            We ensure each NFT is unique by assigning a hash that can be sent
            back to the original function for how it was generated.
          </p>
          <div className="space-y-10">
            {btsItems.map((item, i) => (
              <div className="flex" key={i}>
                <div className="flex-shrink-0 mr-6">
                  <Image src={item.icon} alt="Roadmap" width="28" height="28" />
                </div>
                <p className="font-mono text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          {/* <button
            type="button"
            onClick={() => Router.push("/about")}
            className="bg-black text-white p-4 w-full font-sans font-bold tracking-wide md:max-w-[300px]"
          >
            Documentation
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
