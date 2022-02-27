import dynamic from "next/dynamic";

const Member = dynamic(() => import("./member"));

const CoreDAOMembers = () => {
  const members = [
    {
      name: "Brian Nguyen",
      position: "Founder // Platform & Product Development",
      img: "/img/about/dao-members/brian-nguyen.jpg",
      bio: "Blockchain Consultant at Accenture. Independent investor and NFT collector. Previously worked with and advised at Sushiswap, Animoca Brands, and Redacted Cartel.",
    },
    {
      name: "Andre Benz",
      position: "Co-Founder // Community & Artist Relations",
      img: "/img/about/dao-members/andre-benz.jpg",
      bio: "Founder of The Nations, the world’s largest electronic music curation network, with 50M+ subscribers, and Lowly, an independent record label for emerging artists.",
    },
    {
      name: "Paris Blohm",
      position: "Founder // Production & Art Direction",
      img: "/img/about/dao-members/paris-blohm.jpg",
      bio: "Internationally renowned DJ with 15+ years in the music industry. Paris is the Manager and Creative Director of KLOUD, an immersive art-forward electronic project, and a member of pleasrDAO.",
    },
    // {
    //   name: "Ben Noble",
    //   position: "Co-Founder // Marketing & Communications",
    //   img: "/img/about/dao-members/ben-noble.jpg",
    //   bio: "Co-Owner of Multiplied, blockchain public relations, an avid collector with over 15,000 NFTs. Since 2018, Ben has helped several NFT projects secure more than $100M in sales.",
    // },
    // {
    //   name: "Ivan Perez",
    //   position: "Co-Founder // Brand & Business Development",
    //   img: "/img/about/dao-members/ivan-perez.jpg",
    //   bio: "Co-Owner of Multiplied, blockchain public relations, and Founder at Teller Finance, decentralized lending platform. Previously advised and helped lead more than $100M in NFT sales.",
    // },
    {
      name: "Merc0",
      position: "Solidity Engineering",
      img: "/img/about/dao-members/merc0.jpg",
      bio: "Multi-cycle blockchain developer focused on EVM based protocol design and implementation. Worked on everything from identity through to defi and nft Smart Contract development.",
    },
  ];
  return (
    <section className="py-10 lg:pb-20 bg-black text-white">
      <div className="wrapper">
        <h3 className="text-[40px] lg:text-[50px] font-bold text-center pb-20">
          Core Team Members
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {members.map((member, i) => (
            <Member member={member} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreDAOMembers;
