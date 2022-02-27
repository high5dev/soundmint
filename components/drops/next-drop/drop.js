import Image from "next/image";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("../../shared/button"));

const Drop = ({ drop }) => {
  return (
    <div>
      <div className="image">
        <Image src={drop.img} alt={drop.title} width="760" height="430" />
      </div>
      <div className="p-6 md:p-8 bg-white text-black">
        <h4
          className={`text-[20px] lg:text-[26px] font-bold mb-2 ${
            drop.date ? `lg:flex` : ``
          }`}
        >
          <span className="block mb-2">{drop.title}</span>
          {drop.date && (
            <p className="lg:ml-6 sm:-top-1 md:top-0 inline-block text-[20px] bg-brightGreen text-black font-bold h-[35px] md:h-[35px] relative px-4">
              <span className="relative top-0.5">{drop.date}</span>
            </p>
          )}
        </h4>
        <p className="font-mono">{drop.text}</p>
        <div className="h-[1px] border-b border-black my-6" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 lg:mb-0">
          <div>
            <h5 className="font-bold">Project Size</h5>
            <p className="">{drop.size}</p>
          </div>
          <div>
            <h5 className=" font-bold">Price</h5>
            <p className="">{drop.price} Ξ</p>
          </div>
          <div className="hidden sm:block md:hidden lg:block">
            <Button
              type="dark"
              text={drop.link.text}
              width="full"
              link={drop.link.path}
              textSize="text-base"
            />
          </div>
        </div>
        <div className="mb-2 sm:hidden md:block lg:hidden">
          <Button
            type="dark"
            text={drop.link.text}
            width="full"
            link={drop.link.path}
            textSize="text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default Drop;
