import { NextPage } from "next";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import ChatDock from "../../components/ChatDock";
import NavBar from "../../components/NavBar";
import chatdata from "../../interfaces/chatdata";

import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBoard from "../../components/ChatBoard";

const ws_url = "ws://127.0.0.1:5000";

/*
MUST READ ME

tried using a single socket connection for both pushing and listening to data from the server
but unable to access a socket created in one useEffect in anothor useEffect

so we make 2 connections now
1. to listen to data from server
2. to push data from server
*/

const RoomPage: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [newText, setNewText] = useState<chatdata>();
  const [chat, setChat] = useState<chatdata[]>();

  useEffect(() => {
    !user ? Router.push("/") : null;
  }, [user]);

  // listens to incoming data fr ws after component mounts
  useEffect(() => {
    const ws = new WebSocket(ws_url);

    ws.onopen = () => {
      console.log("handshake successful [listener]");

      ws.onmessage = (msg) => {
        const MSG = JSON.parse(msg.data);
        setChat((chat) => (chat ? [...chat, MSG] : [MSG]));
      };
    };

    ws.onclose = () => {
      console.log("disconnected [listener]");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const ws = new WebSocket(ws_url);

    ws.onopen = () => {
      console.log("handshake successful [pusher]");
      if (newText) ws.send(JSON.stringify(newText));
      ws.close();
    };

    ws.onclose = () => {
      console.log("disconnected [pusher]");
    };
  }, [newText]);

  const route_data = useRouter();
  const { room_id } = route_data.query;

  return (
    <div className="w-full flex justify-center items-center flex-col gap-2">
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
      <ChatBoard room_id={room_id} chat={chat} />
      <ChatDock text={newText} setText={setNewText} />
    </div>
  );
};

export default RoomPage;
