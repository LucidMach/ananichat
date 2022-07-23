import chatdata from "../interfaces/chatdata";
import Image from "next/image";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface props {
  room_id: string | string[];
  chat: chatdata[];
}
const ChatBoard: React.FC<props> = ({ chat, room_id }) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="absolute bottom-24 -z-10 w-full">
      {chat ? (
        chat.map((text, i) => {
          return (
            <div
              key={i}
              className={`flex items-center mx-4 my-2 gap-2 justify-start ${
                user.email !== text.user.id ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <Image
                className="rounded-full"
                alt="user_dp"
                src={text.user.pic}
                width={40}
                height={40}
              />
              <div className="px-4 py-2 bg-slate-300 rounded-3xl">
                {text.msg}
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChatBoard;
