import { Dispatch, SetStateAction, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import chatdata from "../interfaces/chatdata";
import { auth } from "../utils/firebase";
import Button from "./Button";
import Input from "./Input";

interface props {
  text: chatdata;
  setText: Dispatch<SetStateAction<chatdata>>;
}

const ChatDock: React.FC<props> = ({ text, setText }) => {
  const [user, loading, error] = useAuthState(auth);
  const [msg, setMsg] = useState<string>("");

  const handleEnter = () => {
    const chat: chatdata = {
      msg: msg,
      user: {
        id: user.email,
        pic: user.photoURL,
      },
    };

    setText(chat);
    setMsg("");
  };

  return (
    <div className="absolute bottom-0 flex flex-col w-full shadow-inner border-y-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEnter();
        }}
        className="flex w-full justify-between items-center px-8 py-4 gap-4"
      >
        <div className="border-2">
          <Button
            text="invite"
            handleClick={() =>
              navigator.clipboard.writeText(window.location.href)
            }
          />
        </div>
        <Input
          value={msg}
          setValue={setMsg}
          placeholder="enter your message..."
        />
        <div className="border-2 bg-slate-500 text-white">
          <Button text="Send" handleClick={handleEnter} />
        </div>
      </form>
    </div>
  );
};

export default ChatDock;
