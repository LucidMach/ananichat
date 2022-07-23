import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ChatDock from "../../components/ChatDock";
import NavBar from "../../components/NavBar";
import chatdata from "../../interfaces/chatdata";

const RoomPage: NextPage = () => {
  const [chat, setChat] = useState<chatdata[]>();
  const [newText, setNewText] = useState<chatdata>();

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:5000");

    ws.onopen = () => {
      console.log("handshake successful");
      ws.send(JSON.stringify(newText));

      ws.onmessage = (msg) => {
        console.log("msg from server: " + msg.data);
      };
    };

    ws.onclose = () => {
      console.log("client disconnected");
    };
  }, [newText]);

  const route_data = useRouter();
  const { room_id } = route_data.query;

  return (
    <div className="h-full w-full flex justify-center items-center flex-col gap-2">
      <NavBar>
        <Image
          src="/nani.jpg"
          alt="logo"
          className="cursor-pointer"
          height={60}
          width={60}
        />
        <h1 className="font-thin text-3xl italic font-mono text-slate-700">
          a<span className="font-black text-slate-900">nani</span>chat
        </h1>
      </NavBar>
      {room_id}
      <ChatDock text={newText} setText={setNewText} />
    </div>
  );
};

export default RoomPage;
