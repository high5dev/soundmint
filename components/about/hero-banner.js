import { useContext } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ScrollContext } from "../../layout/page";

const Button = dynamic(() => import("../../components/shared/button"));

const HeroBanner = ({}) => {
  const { stemsRef, executeScroll } = useContext(ScrollContext);
  return (
    <section className="bg-black text-white">
      <div className="wrapper pb-10 md:grid md:grid-cols-2">
        <div className="order-last relative">
          <div className="about-hero-content">
            <h1 className="font-sans pt-2 md:pt-14 2xl:pt-20 about-hero-title font-bold leading-tight">
              What Is SoundMint?
            </h1>
            <p className="my-8 font-mono">
              We&apos;re bringing innovation to the way people interpret music
              collectibles in Web3.
            </p>
            <div className="md:max-w-[250px]">
              <button
                onClick={() => executeScroll(stemsRef)}
                className="bg-brightGreen text-black py-2 px-12 w-full md:w-fit font-bold border border-brightGreen hover:bg-brightBlue text-md"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="order-first relative">
          <div className="about-hero-img">
            <Image
              src="/img/about/about-hero-lg.jpg"
              alt="Hero Image"
              width="840"
              height="960"
              priority
            />
          </div>
          <p className="about-hero-outline-text font-bold uppercase">
            Sounds Rare
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
