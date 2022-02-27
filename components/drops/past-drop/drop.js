import dynamic from "next/dynamic";
import Image from "next/image";

const Button = dynamic(() => import("../../shared/button"));

const Drop = ({ drop }) => {
  return (
    <div>
      <div className="image">
        <Image src={drop.img} alt={drop.title} width="600" height="600" />
      </div>
      <div className="p-6 bg-white text-black min-h-[280px]">
        <h4
          className={`text-[22px] font-bold mb-2 ${drop.date ? `md:flex` : ``}`}
        >
          <span>{drop.title}</span>
          {drop.date && (
            <p className="sm:ml-6 sm:-top-1 md:top-0 inline-block text-[20px] bg-brightGreen text-black font-bold h-[35px] md:h-[35px] relative px-4">
              <span className="relative top-0.5">{drop.date}</span>
            </p>
          )}
        </h4>
        <p className="font-mono text-sm">{drop.text}</p>
        <div className="h-[1px] border-b border-black my-6" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 lg:mb-0">
          <div className="w-full">
            <h5 className="font-bold lg:text-[14px]">Project Size</h5>
            <p className="lg:text-[14px]">{drop.size}</p>
          </div>
          <div className="pl-2">
            <h5 className="font-bold text-[14px]">Price</h5>
            <p className="lg:text-[14px]">{drop.price} Ξ</p>
          </div>
          <div className="hidden sm:block md:hidden lg:block">
            <Button
              type="dark"
              text={drop.link.text}
              width="full"
              link={drop.link.path}
              textSize="lg:text-[14px]"
            />
          </div>
        </div>
        <div className="mb-2 sm:hidden md:block lg:hidden">
          <Button
            type="dark"
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

export default Drop;
