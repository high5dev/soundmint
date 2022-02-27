import Router from "next/router";

const Button = ({ ...props }) => {
  const { text, link, type, width, textSize } = props;

  if (type === "primary") {
    return (
      <button
        type="button"
        onClick={() => Router.push(link)}
        className={`bg-white text-black p-2 border border-white font-bold ${
          textSize ? `${textSize}` : `text-md`
        } hover:bg-black hover:border-white hover:border hover:text-white ${
          width === "full" ? `w-full` : `null`
        }`}
      >
        {text}
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button
        type="button"
        onClick={() => Router.push(link)}
        className={`bg-brightGreen text-black p-2 font-bold ${
          textSize ? `${textSize}` : `text-md`
        } border border-brightGreen hover:bg-brightBlue ${
          width === "full" ? `w-full` : `null`
        }`}
      >
        {text}
      </button>
    );
  } else if (type === "dark") {
    return (
      <button
        type="button"
        onClick={() => Router.push(link)}
        className={`bg-black text-white p-2 border border-white ${
          textSize ? `${textSize}` : `text-md`
        } font-bold hover:bg-white hover:text-black hover:border-black ${
          width === "full" ? `w-full` : `null`
        }`}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        onClick={() => Router.push(link)}
        className={`border border-white p-3 ${
          textSize ? `${textSize}` : `text-md`
        } font-bold hover:bg-white hover:text-black ${
          width === "full" ? `w-full` : `null`
        }`}
      >
        {text}
      </button>
    );
  }
};

export default Button;
