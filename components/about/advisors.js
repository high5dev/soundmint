import dynamic from "next/dynamic";

const Advisor = dynamic(() => import("./advisor"));

const Advisors = () => {
  const advisors = [
    {
      name: "PplPleasr",
      position: "OG DeFi artist",
      img: "/img/about/advisors/ppl-pleasr.jpg",
    },
    {
      name: "Emma-Jane Mackinnon-Lee",
      position:
        "Founder of DIGITALAX, web3 fashion protocol stack built on Ethereum, and member of the Global Designer Network DAO.",
      img: "/img/about/advisors/emma-jane.jpg",
    },
    {
      name: "Julia Yan",
      position:
        "Julia is a growth leader focused on consumer product, tech and media. Her experience in building growth engines and scaling product adoption from zero to one enabled companies like Amazon and TikTok to achieve unprecedented hyper growth.",
      img: "/img/about/advisors/julia-yan.jpg",
    },
  ];
  return (
    <section className="bg-black text-white pb-20">
      <div className="wrapper">
        <h3 className="text-[40px] lg:text-[50px] font-bold text-center mb-12">
          Advisors
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {advisors.map((advisor, i) => (
            <Advisor advisor={advisor} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;
