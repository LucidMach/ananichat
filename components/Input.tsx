import { Dispatch, SetStateAction } from "react";

interface props {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Input: React.FC<props> = ({ placeholder, setValue, value }) => {
  return (
    <>
      <input
        type="text"
        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        placeholder={placeholder}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </>
  );
};

export default Input;
