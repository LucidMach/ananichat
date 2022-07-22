import Router from "next/router";
import { useEffect, useState } from "react";

enum roomModeEnum {
  JOIN,
  CREATE,
}

const RoomNav: React.FC = () => {
  const buttoncss =
    "w-full px-8 py-4 shadow-md hover:shadow-lg font-thin italic text-center font-mono text-slate-700";

  const [roomMode, setRoomMode] = useState<0 | 1>(null);

  useEffect(() => {
    if (roomMode === null) return;
    roomMode === 0
      ? Router.push("/rooms/join-a-room")
      : Router.push("/rooms/create-a-room");
  }, [roomMode]);

  return (
    <>
      <div className="w-1/2 min-w-[300px] px-8 py-4">
        <button
          className={buttoncss}
          onClick={() => setRoomMode(roomModeEnum["JOIN"])}
        >
          join a room
        </button>
        <h1 className="select-none m-4 font-thin italic text-center font-mono text-slate-700">
          (or)
        </h1>
        <button
          className={buttoncss}
          onClick={() => setRoomMode(roomModeEnum["CREATE"])}
        >
          create your room
        </button>
      </div>
      ;
    </>
  );
};

export default RoomNav;
