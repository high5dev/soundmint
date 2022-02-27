import dynamic from "next/dynamic";

const Drop = dynamic(() => import("../next-drop/drop"));

const NextDrops = () => {
  const drops = [
    {
      title: "KLOUD X Hooker",
      img: "/img/drops/next-drop.jpg",
      date: "02.20.22",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas libero, eleifend interdum condimentu,",
      size: "10,000",
      price: "0.05",
      link: {
        text: "Project Page",
        path: "/drop-details",
      },
    },
    {
      title: "KLOUD X Hooker",
      img: "/img/drops/next-drop.jpg",
      date: "02.20.22",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas libero, eleifend interdum condimentu,",
      size: "10,000",
      price: "0.05",
      link: {
        text: "Project Page",
        path: "/drop-details",
      },
    },
  ];
  return (
    <section className="pb-20 bg-black text-white">
      <div className="wrapper">
        <h3 className="text-[24px] mb-4 text-left">Current Drop</h3>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-6">
          {drops.map((drop, i) => (
            <Drop drop={drop} key={i} />
          ))}
        </div>
      </div>
      <div className="h-[1px] border-b border-white mt-32" />
    </section>
  );
};

export default NextDrops;
