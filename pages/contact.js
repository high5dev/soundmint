import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/shared/header"));
const HeroBanner = dynamic(() => import("../components/contact/hero-banner"));
const ContactForm = dynamic(() => import("../components/contact/contact-form"));
const ApplyToBeAnArtist = dynamic(() =>
  import("../components/shared/apply-to-be-an-artist")
);
const SignUpUpdatesAnnouncements = dynamic(() =>
  import("../components/shared/sign-up-updates-announcements")
);

const Contact = () => {
  return (
    <>
      <Header title="Contact | SoundMint" />
      <HeroBanner />
      <ContactForm />
      <ApplyToBeAnArtist />
      <SignUpUpdatesAnnouncements />
    </>
  );
};

export default Contact;
