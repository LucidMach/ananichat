import { MouseEventHandler } from "react";

interface props {
  text: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<props> = ({ text, handleClick }) => {
  return (
    <button
      className="w-full text-right hover:bg-slate-700 hover:text-white py-2 px-4"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
