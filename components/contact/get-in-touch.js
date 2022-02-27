import { InstagramCircleGreen, TwitterCircleGreen } from "../shared/icons";
const GetInTouch = () => {
  return (
    <div>
      <h4 className="text-[26px] md:text-[28px] lg:text-[36px] md:mt-8 mb-8">
        Get in touch.
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
        <div className="md:mb-4">
          <p className="mb-2">Socials</p>
          <div className="flex space-x-4">
            <a
              href="https://go.soundmint.xyz/ig"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramCircleGreen />
            </a>
            <a
              href="https://go.soundmint.xyz/twitter"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterCircleGreen />
            </a>
          </div>
        </div>
        <div className="md:mb-4">
          <p className="mb-2">Phone</p>
          <a
            href="tel:808.294.3300"
            className="border-b border-white hover:text-brightGreen hover:border-brightGreen"
          >
            808.294.3300
          </a>
        </div>
        <div className="md:mb-4">
          <p className="mb-2">Email</p>
          <a
            href="mailto:contact@soundmint.xyz"
            className="border-b border-white hover:text-brightGreen hover:border-brightGreen"
          >
            contact@soundmint.xyz
          </a>
        </div>
        <div className="md:mb-4">
          <p className="mb-2">Press Inquiries</p>
          <a
            href="mailto:press@soundarts.io"
            className="border-b border-white hover:text-brightGreen hover:border-brightGreen"
          >
            press@soundarts.io
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
