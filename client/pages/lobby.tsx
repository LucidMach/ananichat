import type { NextPage } from "next";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import NavBar from "../components/NavBar";

const JoinARoom: NextPage = () => {
  const [roomName, setRoomName] = useState<string>();

  const handleClick = () => {
    Router.push(`/rooms/${roomName}`);
  };

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className="px-8 py-4 w-1/2 min-w-[300px] shadow-md flex flex-col justify-center items-center gap-4"
      >
        <h1 className="font-black ">JOIN A ROOM</h1>
        <div className="w-4/5">
          <h1 className="font-thin italic font-mono text-slate-700">
            enter name of the room:
          </h1>
          <Input
            placeholder="eg) lucidchat"
            value={roomName}
            setValue={setRoomName}
          />
        </div>
        <div className="w-3/5 border-2">
          <Button text="join" handleClick={() => handleClick()} />
        </div>
      </form>
    </div>
  );
};

export default JoinARoom;
