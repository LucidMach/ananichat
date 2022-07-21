import type { NextPage } from "next";

import Image from "next/image";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import NavBar from "../components/NavBar";

const CreateARoom: NextPage = () => {
  const [roomName, setRoomName] = useState<string>();

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
      <div className="px-8 py-4 w-1/2 min-w-[300px] shadow-md flex flex-col justify-center items-center gap-4">
        <h1 className="font-black ">CREATE A ROOM</h1>
        <div className="">
          <h1 className="font-thin italic font-mono text-slate-700">
            enter a name for the room
          </h1>
          <Input
            placeholder="eg: ananichat_room"
            value={roomName}
            setValue={setRoomName}
          />
        </div>
        <div className="w-2/5">
          <Button text="create" handleClick={() => console.log(roomName)} />
        </div>
      </div>
    </div>
  );
};

export default CreateARoom;
