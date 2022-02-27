import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/shared/header"));
const HeroBanner = dynamic(() => import("../components/drops/hero-banner"));
const SignUpUpdatesAnnouncements = dynamic(() =>
  import("../components/shared/sign-up-updates-announcements")
);
const NextDrops = dynamic(() =>
  import("../components/drops/next-drop/next-drops")
);
const PastDrops = dynamic(() =>
  import("../components/drops/past-drop/past-drops")
);

const Drops = () => {
  return (
    <>
      <Header title="Drops | SoundMint" />
      <HeroBanner />
      {/* <NextDrops />
      <PastDrops /> */}
      <SignUpUpdatesAnnouncements />
    </>
  );
};

export default Drops;
