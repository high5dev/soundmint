import Image from "next/image";
import Link from "next/link";

const Roadmap = ({ items, background, textColor, gridCols, title, action }) => {
  return (
    <section className={`py-8 ${background} ${textColor} lg:py-12`}>
      <div className="wrapper">
        <h3 className="text-2xl mb-8 font-mono tracking-wide">{title}</h3>
        <div className={`grid ${gridCols} gap-8 lg:gap-12`}>
          {items.map((item, i) => (
            <div className="flex items-center" key={i}>
              <div className="flex-shrink-0 mr-6">
                <Image src={item.icon} alt="Roadmap" width="35" height="35" />
              </div>
              <p className="font-mono lg:text-xs">{item.text}</p>
            </div>
          ))}
        </div>
        {action && (
          <div className="text-center mb-4 lg:mb-0 mt-12">
            <Link href={action.link}>
              <a
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white py-2 px-20 border border-black text-md font-bold hover:bg-lightGrey hover:text-black hover:border-black"
              >
                {action.title}
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Roadmap;
