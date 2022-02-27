import dynamic from "next/dynamic";
import Image from "next/image";

const Button = dynamic(() => import("../shared/button"));

const Vinyls = ({ drop }) => {
  return (
    <div className="border-4 border-brightGreen">
      <div className="p-2 bg-white image">
        <Image src={drop.img} alt={drop.title} width="600" height="600" />
      </div>
      <div className="p-2 bg-white text-black sm:min-h-[180px] md:min-h-[280px]">
      <div className="sm:min-h-[150px] md:min-h-[210px] pb-2">
        <h4 className={`text-[22px] font-bold mb-2 ${drop.date ? `md:flex` : ``}`}>
          <span>{drop.title}</span>
        </h4>
        <p className="text-sm">{drop.text}</p>
      </div>
        <div className="grid grid-cols-1 sm:mb-2 md:mb-0">
          <div className="w-full md:min-h-[50px]">
            <p className="font-mono uppercase pb-2 text-sm">{drop.size}</p>
          </div>
        </div>
        <div className="hidden sm:block md:hidden lg:block">
            <Button
              type="secondary"
              text={drop.link.text}
              width="full"
              link={drop.link.path}
              textSize="lg:text-[14px]"
            />
          </div>
        <div className="sm:hidden md:block lg:hidden">
          <Button
            type="secondary"
            text={drop.link.text}
            width="full"
            textSize="lg:text-[14px]"
            link={drop.link.path}
          />
        </div>
      </div>
    </div>
  );
};

export default Vinyls;
