import dynamic from "next/dynamic";
import Image from "next/image";

const AboutTheDOATreasury = ({}) => {
  const roadmapItems = [
    {
      title: (
        <div className="flex lg:mb-16 md:border-b border-black">
          <div className="flex-shrink-0 mr-4 relative -left-2">
            <Image
              src="/img/about/roadmap/roadmap-icon-1.svg"
              alt="Roadmap"
              width="28"
              height="28"
            />
          </div>
          <p
            className="font-mono relative text-sm  lg:pb-16"
            style={{ top: "-4px" }}
          >
            Launch <span className="font-black font-sans">genesis drop</span> as
            proof of concept via our production house
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex lg:mb-16 md:border-b border-black">
          <div className="flex-shrink-0 mr-4 relative -left-2">
            <Image
              src="/img/about/roadmap/roadmap-icon-2.svg"
              alt="Roadmap"
              width="28"
              height="28"
            />
          </div>
          <p
            className="font-mono relative text-sm lg:pb-16"
            style={{ top: "-4px" }}
          >
            Create curated{" "}
            <span className="font-black font-sans">
              collections of NFT drops
            </span>{" "}
            in collaboration with music artists
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex lg:mb-16 md:border-b border-black">
          <div className="flex-shrink-0 mr-4 relative -left-2">
            <Image
              src="/img/about/roadmap/roadmap-icon-3.svg"
              alt="Roadmap"
              width="28"
              height="28"
            />
          </div>
          <p
            className="font-mono relative text-sm  lg:pb-16"
            style={{ top: "-4px" }}
          >
            Create a dashboard to{" "}
            <span className="font-black font-sans">burn and remix</span> NFTs to
            create new collectibles
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex lg:mb-16 md:border-b border-black">
          <div className="flex-shrink-0 mr-4 relative -left-2">
            <Image
              src="/img/about/roadmap/roadmap-icon-4.svg"
              alt="Roadmap"
              width="28"
              height="28"
            />
          </div>
          <p
            className="font-mono relative text-sm lg:pb-16"
            style={{ top: "-4px" }}
          >
            Create a{" "}
            <span className="font-black font-sans">
              {"'"}sandbox{"'"}
            </span>{" "}
            for collectors to explore and combine stems from each drop
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex lg:mb-16 md:border-b border-black">
          <div className="flex-shrink-0 mr-4 relative -left-2">
            <Image
              src="/img/about/roadmap/roadmap-icon-5.svg"
              alt="Roadmap"
              width="28"
              height="28"
            />
          </div>
          <p
            className="font-mono relative text-sm lg:pb-16"
            style={{ top: "-4px" }}
          >
            Create a{" "}
            <span className="font-black font-sans">
              platform with front-end tooling
            </span>{" "}
            to allow users to create generative music NFTs
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex lg:mb-16 md:border-b border-black">
          <div className="flex-shrink-0 mr-4 relative -left-2">
            <Image
              src="/img/about/roadmap/roadmap-icon-6.svg"
              alt="Roadmap"
              width="28"
              height="28"
            />
          </div>
          <p
            className="font-mono relative text-sm lg:pb-16"
            style={{ top: "-4px" }}
          >
            Develop <span className="font-black font-sans">open-source</span>{" "}
            contracts for algorithmic music creation
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex lg:mb-16 md:border-b border-black">
          <div className="flex-shrink-0 mr-4 relative -left-2">
            <Image
              src="/img/about/roadmap/roadmap-icon-7.svg"
              alt="Roadmap"
              width="28"
              height="28"
            />
          </div>
          <p
            className="font-mono relative text-sm lg:pb-16"
            style={{ top: "-4px" }}
          >
            Create a{" "}
            <span className="font-black font-sans">
              competitive marketplace
            </span>{" "}
            for music NFTs to reduce fee models
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex lg:mb-16 md:border-b border-black">
          <div className="flex-shrink-0 mr-4 relative -left-2">
            <Image
              src="/img/about/roadmap/roadmap-icon-8.svg"
              alt="Roadmap"
              width="28"
              height="28"
            />
          </div>
          <p
            className="font-mono relative text-sm lg:pb-16"
            style={{ top: "-4px" }}
          >
            Release <span className="font-black font-sans">cross-chain</span>{" "}
            integration feature for future NFT drops
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex lg:mb-16 md:border-b border-black">
          <div className="flex-shrink-0 mr-4 relative -left-2">
            <Image
              src="/img/about/roadmap/roadmap-icon-9.svg"
              alt="Roadmap"
              width="28"
              height="28"
            />
          </div>
          <p
            className="font-mono relative text-sm lg:pb-16"
            style={{ top: "-4px" }}
          >
            Host and organize{" "}
            <span className="font-black font-sans">real-world</span> music
            events in collaboration with SoundMint artists
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex lg:mb-16 md:border-b border-black">
          <div className="flex-shrink-0 mr-4 relative -left-2">
            <Image
              src="/img/about/roadmap/roadmap-icon-10.svg"
              alt="Roadmap"
              width="28"
              height="28"
            />
          </div>
          <p
            className="font-mono relative text-sm lg:pb-16"
            style={{ top: "-4px" }}
          >
            Integrate with existing{" "}
            <span className="font-black font-sans">metaverse</span> platforms to
            host music NFT events
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex lg:mb-16">
          <div className="flex-shrink-0 mr-4 relative -left-2">
            <Image
              src="/img/about/roadmap/roadmap-icon-11.svg"
              alt="Roadmap"
              width="28"
              height="28"
            />
          </div>
          <p className="font-mono relative text-sm" style={{ top: "-4px" }}>
            Create a{" "}
            <span className="font-black font-sans">social platform</span>{" "}
            feature for musicians to collaborate and create NFTs
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20">
      <div className="wrapper">
        <h3 className="text-[40px] lg:text-[50px] font-bold text-center mb-12">
          Roadmap
        </h3>
        <div className="max-w-[500px] lg:max-w-[600px] mx-auto grid grid-cols-6">
          <div className="col-span-1">
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="h-[110px] lg:h-[160px] w-[1px] bg-black relative left-[7px] dao-line" />
          </div>
          <div className="col-span-5">{roadmapItems[0].title}</div>
          <div className="col-span-1">
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="h-[110px] lg:h-[160px] w-[1px] bg-black relative left-[7px] dao-line" />
          </div>
          <div className="col-span-5">{roadmapItems[1].title}</div>
          <div className="col-span-1">
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="h-[110px] lg:h-[160px] w-[1px] bg-black relative left-[7px] dao-line" />
          </div>
          <div className="col-span-5">{roadmapItems[2].title}</div>
          <div className="col-span-1">
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="h-[110px] lg:h-[160px] w-[1px] bg-black relative left-[7px] dao-line" />
          </div>
          <div className="col-span-5">{roadmapItems[3].title}</div>
          <div className="col-span-1">
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="h-[110px] lg:h-[160px] w-[1px] bg-black relative left-[7px] dao-line" />
          </div>
          <div className="col-span-5">{roadmapItems[4].title}</div>
          <div className="col-span-1">
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="h-[110px] lg:h-[160px] w-[1px] bg-black relative left-[7px] dao-line" />
          </div>
          <div className="col-span-5">{roadmapItems[5].title}</div>
          <div className="col-span-1">
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="h-[110px] lg:h-[160px] w-[1px] bg-black relative left-[7px] dao-line" />
          </div>
          <div className="col-span-5">{roadmapItems[6].title}</div>
          <div className="col-span-1">
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="h-[110px] lg:h-[160px] w-[1px] bg-black relative left-[7px] dao-line" />
          </div>
          <div className="col-span-5">{roadmapItems[7].title}</div>
          <div className="col-span-1">
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="h-[110px] lg:h-[160px] w-[1px] bg-black relative left-[7px] dao-line" />
          </div>
          <div className="col-span-5">{roadmapItems[8].title}</div>
          <div className="col-span-1">
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="h-[110px] lg:h-[160px] w-[1px] bg-black relative left-[7px] dao-line" />
          </div>
          <div className="col-span-5">{roadmapItems[9].title}</div>
          <div className="col-span-1">
            <div className="w-4 h-4 bg-black rounded-full" />
          </div>
          <div className="col-span-5">{roadmapItems[10].title}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheDOATreasury;
