import dynamic from "next/dynamic";
import { componentNames } from "../common/constants";
import { SidebarTrackerContext, ScrollContext } from "../layout/page";
import { useContext } from "react";

const Header = dynamic(() => import("../components/shared/header"));
const HeroBanner = dynamic(() =>
  import("../components/drop-details/hero-banner")
);
const MintShowCase = dynamic(() =>
  import("../components/shared/mint-show-case")
);
const Roadmap = dynamic(() => import("../components/shared/roadmap"));
const About = dynamic(() => import("../components/shared/about-drop"));
const AboutTheArtists = dynamic(() =>
  import("../components/drop-details/about-the-artists")
);
const Stems = dynamic(() => import("../components/shared/stems/stems"));
const Visuals = dynamic(() => import("../components/shared/visuals"));
const ApplyToBeAnArtist = dynamic(() =>
  import("../components/shared/apply-to-be-an-artist")
);

const WeAreKloud = () => {
  const { activeComponent } = useContext(SidebarTrackerContext);

  const {
    heroRef,
    mintShowCaseRef,
    aboutDropRef,
    aboutTheArtistsRef,
    stemsRef,
    visualsRef,
    applyToBeAnArtistRef,
    executeScroll,
  } = useContext(ScrollContext);

  const roadmapItems = [
    {
      icon: "/img/roadmap/drop-details/roadmap-icon-1.svg",
      text: "Access to Exclusive KLOUD Merch for KLOUD NFT Holders.",
    },
    {
      icon: "/img/roadmap/drop-details/roadmap-icon-2.svg",
      text: "Launch SoundMint KLOUD Drop #2.",
    },
    {
      icon: "/img/roadmap/drop-details/roadmap-icon-3.svg",
      text: "Exclusive access to future KLOUD metaverse events.",
    },
  ];

  return (
    <>
      <ul className="tracker">
        <li
          onClick={() => executeScroll(heroRef)}
          className={`hover:cursor-pointer ${
            componentNames.heroBanner === activeComponent ? `active` : ``
          }`}
        />
        <li
          onClick={() => executeScroll(mintShowCaseRef)}
          className={`hover:cursor-pointer ${
            componentNames.mintShowCase === activeComponent ? `active` : ``
          }`}
        />
        <li
          onClick={() => executeScroll(aboutDropRef)}
          className={`hover:cursor-pointer ${
            componentNames.about === activeComponent ? `active` : ``
          }`}
        />
        <li
          onClick={() => executeScroll(aboutTheArtistsRef)}
          className={`hover:cursor-pointer ${
            componentNames.aboutTheArtists === activeComponent ? `active` : ``
          }`}
        />
        <li
          onClick={() => executeScroll(stemsRef)}
          className={`hover:cursor-pointer ${
            componentNames.stems === activeComponent ? `active` : ``
          }`}
        />
        <li
          onClick={() => executeScroll(visualsRef)}
          className={`hover:cursor-pointer ${
            componentNames.visuals === activeComponent ? `active` : ``
          }`}
        />
        <li
          onClick={() => executeScroll(applyToBeAnArtistRef)}
          className={`hover:cursor-pointer ${
            componentNames.applyToBeAnArtist === activeComponent ? `active` : ``
          }`}
        />
      </ul>
      <Header title="WE ARE KLOUD | SoundMint" />
      <HeroBanner />
      <MintShowCase showLearnBtn={false} />
      <Roadmap
        background="bg-lightGrey"
        textColor="text-black"
        title="KLOUD Roadmap"
        items={roadmapItems}
        gridCols="lg:grid-cols-2"
      />
      <About showLearnBtn={false} />
      <AboutTheArtists />
      <Stems
        title="KLOUD"
        pillText="STEMS"
        text="Press the 'play button' next to each stem to hear different stem traits. Press 'Play Preview Track' to listen to a combination of the stems. "
      />
      <Visuals title="Alex Hooker" pillText="Visuals" />
      <ApplyToBeAnArtist />
    </>
  );
};

export default WeAreKloud;
