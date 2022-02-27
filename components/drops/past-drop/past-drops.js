import dynamic from "next/dynamic";

const Drop = dynamic(() => import("../past-drop/drop"));

const PastDrops = () => {
  const drops = [
    {
      title: "KLOUD X Hooker",
      img: "/img/drops/past-drop-1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas libero, eleifend interdum condimentu,",
      size: "10,000",
      price: "0.05",
      link: {
        text: "View",
        path: "/drop-details",
      },
    },
    {
      title: "KLOUD X Hooker",
      img: "/img/drops/past-drop-2.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas libero, eleifend interdum condimentu,",
      size: "10,000",
      price: "0.05",
      link: {
        text: "View",
        path: "/drop-details",
      },
    },
    {
      title: "KLOUD X Hooker",
      img: "/img/drops/past-drop-3.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas libero, eleifend interdum condimentu,",
      size: "10,000",
      price: "0.05",
      link: {
        text: "View",
        path: "/drop-details",
      },
    },
    {
      title: "KLOUD X Hooker",
      img: "/img/drops/past-drop-4.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas libero, eleifend interdum condimentu,",
      size: "10,000",
      price: "0.05",
      link: {
        text: "View",
        path: "/drop-details",
      },
    },
    {
      title: "KLOUD X Hooker",
      img: "/img/drops/past-drop-5.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas libero, eleifend interdum condimentu,",
      size: "10,000",
      price: "0.05",
      link: {
        text: "View",
        path: "/drop-details",
      },
    },
  ];
  return (
    <section className="pb-20 bg-black text-white">
      <div className="wrapper">
        <h3 className="text-[24px] mb-4 text-left">Current Drop</h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 lg:gap-6">
          {drops.map((drop, i) => (
            <Drop drop={drop} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastDrops;
