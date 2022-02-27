import Image from "next/image";
const HeroBanner = () => {
  return (
    <section className="bg-black text-white">
      <div className="wrapper relative">
        <div className="lg:hidden">
          <h1 className="text-[40px] font-bold max-w-[450px] leading-tight">
            Have a question about SoundMint?
          </h1>
        </div>
        <div
          className="hidden lg:grid grid-cols-3 min-h-[400px] gap-20"
          style={{ zIndex: "-1" }}
        >
          <div className="col-span-2">
            <h1
              className="text-[50px] lg:text-[60px] font-bold max-w-[450px] lg:max-w-[550px] leading-tight absolute"
              style={{ top: "40%", transform: "translateY(-40%)" }}
            >
              Have a question about SoundMint?
            </h1>
          </div>
          <div className="col-span-1 text-right relative">
            <div className="absolute -top-24">
              <Image
                src="/img/contact/contact-hero.jpg"
                alt="Contact SoundMint"
                width="275"
                height="550"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
