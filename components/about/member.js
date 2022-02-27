import Image from "next/image";

const Member = ({ member }) => {
  return (
    <div className="grid 2xl:grid-cols-2 gap-4">
      <div>
        <Image src={member.img} alt={member.name} width="430" height="300" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg">{member.name}</p>
        <p className="text-[12px] font-mono my-2">{member.position}</p>
        <p className="text-[11px] font-mono">{member.bio}</p>
      </div>
    </div>
  );
};

export default Member;
