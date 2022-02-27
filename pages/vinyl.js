import dynamic from "next/dynamic";

const SoundmintVinyls = dynamic(() => import("../components/vinyl/what-are-soundmint-vinyls"));
const Header = dynamic(() => import("../components/shared/header"));
const ContactForm = dynamic(() => import("../components/contact/contact-form"));
const HeroBanner = dynamic(() =>
  import("../components/vinyl/hero-banner")
);

const Contact = () => {
  return (
    <>
      <Header title="Vinyl | SoundMint" />
      <HeroBanner />
      <SoundmintVinyls/>
    </>
  );
};

export default Contact;
