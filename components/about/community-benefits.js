import dynamic from "next/dynamic";

const Benefit = dynamic(() => import("./benefit"));

const CommunityBenefits = ({}) => {
  const benefits = [
    {
      number: 1,
      title: "Artists Specific Chatrooms for SoundMint Holders.",
      bgColor: "bg-brightGreen",
    },
    {
      number: 2,
      title: "Exclusive Artist related merchandise.",
      bgColor: "bg-brightOrange",
    },
    {
      number: 3,
      title: "Access to events exclusive to SoundMint Holders.",
      bgColor: "bg-brightYellow",
    },
    {
      number: 4,
      title: "SoundMint Merchandise.",
      bgColor: "bg-brightBlue",
    },
  ];
  return (
    <section className="bg-black text-white py-20">
      <div className="wrapper">
        <h3 className="text-[40px] lg:text-[50px] font-bold text-center pb-20">
          Community Benefits
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, i) => (
            <Benefit
              title={benefit.title}
              number={benefit.number}
              bgColor={benefit.bgColor}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityBenefits;
