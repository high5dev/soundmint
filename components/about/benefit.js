const Benefit = ({ title, bgColor, number }) => {
  return (
    <div>
      <div
        className={`${bgColor} w-[80px] h-[80px] mx-auto rounded-full text-black text-center`}
      >
        <h5 className="text-4xl relative top-5 font-bold">{number}</h5>
      </div>
      <p className="font-mono max-w-[300px] mx-auto mt-4 text-center text-sm">
        {title}
      </p>
    </div>
  );
};

export default Benefit;
