import Image from "next/image";

const Advisor = ({ advisor }) => {
  return (
    <div>
      <div>
        <Image src={advisor.img} alt={advisor.name} width="440" height="480" />
        <div>
          <p className="text-xl py-2">{advisor.name}</p>
          <p className="text-xs font-mono">{advisor.position}</p>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
