import { useContext } from "react";
import dynamic from "next/dynamic";
import { SidebarTrackerContext, ScrollContext } from "../layout/page";
import { componentNames } from "../common/constants";

const Header = dynamic(() => import("../components/shared/header"));
const HeroBanner = dynamic(() => import("../components/home/hero-banner"));
const About = dynamic(() => import("../components/shared/about-drop"));
const MintShowCase = dynamic(() =>
  import("../components/shared/mint-show-case")
);

const SoundArtsDrop = dynamic(() =>
  import("../components/home/soundarts-drop")
);
const BehindTheScenes = dynamic(() =>
  import("../components/home/behind-the-scenes")
);
const SignUpUpdatesAnnouncements = dynamic(() =>
  import("../components/shared/sign-up-updates-announcements")
);
const WhatIsSoundArts = dynamic(() =>
  import("../components/home/what-is-soundarts")
);
const Roadmap = dynamic(() => import("../components/shared/roadmap"));

const Home = () => {
  const { activeComponent } = useContext(SidebarTrackerContext);

  const roadmap1Items = [
    {
      icon: "/img/roadmap/home/roadmap-icon-1.svg",
      text: "Access to Exclusive KLOUD Merch for KLOUD NFT Holders",
    },
    {
      icon: "/img/roadmap/home/roadmap-icon-2.svg",
      text: "Launch SoundMint KLOUD Drop #2",
    },
    {
      icon: "/img/roadmap/home/roadmap-icon-3.svg",
      text: "Exclusive access to future KLOUD metaverse events.",
    },
  ];

  const roadmapAction = {
    title: "Join KLOUD Discord",
    link: "https://discord.com/invite/wearekloud",
  };

  const {
    heroRef,
    mintShowCaseRef,
    aboutDropRef,
    whatIsSoundArtsRef,
    soundArtsDropRef,
    subscribeRef,
    behindTheScenesRef,
    executeScroll,
  } = useContext(ScrollContext);

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
          onClick={() => executeScroll(whatIsSoundArtsRef)}
          className={`hover:cursor-pointer ${
            componentNames.whatIsSoundArts === activeComponent ? `active` : ``
          }`}
        />
        <li
          onClick={() => executeScroll(soundArtsDropRef)}
          className={`hover:cursor-pointer ${
            componentNames.soundArtsDrop === activeComponent ? `active` : ``
          }`}
        />
        <li
          onClick={() => executeScroll(behindTheScenesRef)}
          className={`hover:cursor-pointer ${
            componentNames.behindTheScenes === activeComponent ? `active` : ``
          }`}
        />
        <li
          onClick={() => executeScroll(subscribeRef)}
          className={`hover:cursor-pointer ${
            componentNames.signUpUpdatesAnnouncements === activeComponent
              ? `active`
              : ``
          }`}
        />
      </ul>
      <Header title="SoundMint | Sounds Rare" />
      <HeroBanner />
      <div id="mint-showcase">
        <MintShowCase showLearnBtn={true} />
      </div>
      <Roadmap
        background="bg-lightGrey"
        textColor="text-black"
        title="KLOUD Roadmap"
        items={roadmap1Items}
        gridCols="lg:grid-cols-2"
        action={roadmapAction}
      />
      <div id="about">
        <About showLearnBtn={true} />
      </div>
      {/* <div id="about">
        <About showLearnBtn={true} />
      </div> */}
      <div id="what-is-soundarts">
        <WhatIsSoundArts />
      </div>
      <div id="soundarts-drop">
        <SoundArtsDrop />
      </div>
      <div id="behind-the-scenes">
        <BehindTheScenes />
      </div>
      <div id="sign-up">
        <SignUpUpdatesAnnouncements />
      </div>
    </>
  );
};

export default Home;
