import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const ChatDock: React.FC = () => {
  const [msg, setMsg] = useState<string>();
  return (
    <div className="absolute bottom-0 flex flex-col w-full shadow-inner border-y-4">
      <div className="flex w-full justify-between items-center px-8 py-4 gap-4">
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
          <Button
            text="Send"
            handleClick={() => {
              console.log(msg);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatDock;
