import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext } from "react";
import { SidebarTrackerContext, ScrollContext } from "../../layout/page";
import { InView } from "react-intersection-observer";

const Button = dynamic(() => import("./button"));

const ApplyToBeAnArtist = ({}) => {
  const { applyToBeAnArtistRef } = useContext(ScrollContext);
  const { onComponentVisible, componentNames } = useContext(
    SidebarTrackerContext
  );
  const items = [
    {
      icon: "/img/apply-icon-1.svg",
      text: "Creating a new medium of generative art.",
    },
    {
      icon: "/img/apply-icon-2.svg",
      text: "Majority of the revenue of the sale goes to the artist.",
    },
    {
      icon: "/img/apply-icon-3.svg",
      text: "We'll take you from idea to design to development and deployment.",
    },
  ];
  return (
    <InView
      onChange={(inView) =>
        onComponentVisible(inView, componentNames.applyToBeAnArtist)
      }
    >
      <section className="py-10 lg:py-20" ref={applyToBeAnArtistRef}>
        <div className="wrapper">
          <div className="grid md:grid-cols-2">
            <div className="">
              <h3 className="text-[50px] lg:text-[50px] 2xl:text-[60px] font-bold max-w-[300px] lg:max-w-[350px] leading-tight">
                Apply to be an artist
              </h3>
              <p className="font-mono my-8 md:max-w-[450px]">
                SoundMint is a generative platform offering a new medium for
                music creation.
              </p>
              <a
                href="https://go.soundmint.xyz/join"
                target="_blank"
                rel="noreferrer"
                className={`block bg-black text-white p-2 border border-white text-md font-bold hover:bg-white hover:text-black hover:border-black w-full md:w-[250px] text-center`}
              >
                Apply
              </a>
            </div>
            <div className="mt-10 md:mt-0">
              {items.map((item, i) => (
                <div className="flex mb-8 last:mb-0" key={i}>
                  <div className="flex items-center p-6 bg-black  md:hidden">
                    <div className="relative top-1">
                      <Image
                        src={item.icon}
                        alt={item.text}
                        width="30"
                        height="30"
                      />
                    </div>
                  </div>
                  <div className="hidden md:block flex-shirnk-0 p-6 bg-black">
                    <div className="relative top-1">
                      <Image
                        src={item.icon}
                        alt={item.text}
                        width="40"
                        height="40"
                      />
                    </div>
                  </div>
                  <p className="bg-gray-200 p-6 text-sm font-mono w-full flex items-center">
                    <span className="block">{item.text}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </InView>
  );
};

export default ApplyToBeAnArtist;
