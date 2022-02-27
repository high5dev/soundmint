import dynamic from "next/dynamic";

const Vinyls = dynamic(() => import("./vinyls"));

const HeroBanner = () => {
  const drops = [
    {
      title: "Mint",
      img: "/img/vinyl/Mint.png",
      text: "Redeem your mint vinyl. This vinyl will be redeemable in the future for SoundMint tokens.",
      size: "1 NFT = 1 Mint Vinyl",
      link: {
        text: "Mint Vinyl",
        path: "/drop-details",
      },
    },
    {
      title: "Mint",
      img: "/img/vinyl/Mint.png",
      text: "Redeem 2 mint vinyls. This vinyl will be redeemable in the future for SoundMint tokens.",
      size: "5 NFT = 2 Mint Vinyl",
      link: {
        text: "Mint Vinyl",
        path: "/drop-details",
      },
    },
    {
      title: "Mint",
      img: "/img/vinyl/Gold.png",
      text: "Redeem 2 mint vinyls and a gold vinyl. These vinyls will be redeemable in the future for SoundMint tokens. Gold vinyls hold a weighted value much higher than mint vinyls.",
      size: "10 NFT = 2 Mint Vinyl ± Gold Vinyl",
      link: {
        text: "Mint Vinyl",
        path: "/drop-details",
      },
    },
    {
      title: "Mint",
      img: "/img/vinyl/Gold.png",
      text: "Redeem 2 mint vinyls and 2 gold vinyls. These vinyls will be redeemable in the future for SoundMint tokens. Gold vinyls hold a weighted value much higher than mint vinyls.",
      size: "20 NFT = 3 Mint Vinyl ± Gold Vinyl",
      link: {
        text: "Mint Vinyl",
        path: "/drop-details",
      },
    },
  ];
  return (
    <section className="pb-20 bg-black text-white">
      <div className="wrapper pt-5 pb-10">
        <h3 className="text-[45px] lg:text-[60px] uppercase font-bold">Vinyl Drop</h3>
        <div className="pt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-16 lg:gap-6">
          {drops.map((drop, i) => (
            <Vinyls drop={drop} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
