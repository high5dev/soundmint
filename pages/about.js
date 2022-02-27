import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/shared/header"));
const HeroBanner = dynamic(() => import("../components/about/hero-banner"));
const IntersectionOfArtAndAudio = dynamic(() =>
  import("../components/about/intersection-of-art-and-audio")
);
const Stems = dynamic(() => import("../components/shared/stems/stems"));
const AboutTheDAOTreasury = dynamic(() =>
  import("../components/about/about-the-dao-treasury")
);
const CommunityBenefits = dynamic(() =>
  import("../components/about/community-benefits")
);
const CoreDAOMembers = dynamic(() =>
  import("../components/about/core-dao-members")
);
const Advisors = dynamic(() => import("../components/about/advisors"));
const ApplyToBeAnArtist = dynamic(() =>
  import("../components/shared/apply-to-be-an-artist")
);
const SignUpUpdatesAnnouncements = dynamic(() =>
  import("../components/shared/sign-up-updates-announcements")
);
const AudioVisual = dynamic(() =>
  import("../components/about/audio-visual-relationship")
);

const title = (
  <p>
    Audio+Visual
    <br />
    Relationship
  </p>
);

const About = () => {
  return (
    <>
      <Header title="About | SoundMint" />
      <HeroBanner />
      <IntersectionOfArtAndAudio />
      <Stems
        title="Stem Examples"
        text="Press the 'play button' next to each stem to hear different stem traits. Press 'Play Preview Track' to listen to a combination of the stems."
      />
      <AudioVisual
        title={title}
        text="Each Visual Trait is linked with a stem. More stems could mean more links with visuals."
      />
      <AboutTheDAOTreasury />
      <CommunityBenefits />
      <CoreDAOMembers />
      <Advisors />
      <ApplyToBeAnArtist />
      <SignUpUpdatesAnnouncements />
    </>
  );
};

export default About;
