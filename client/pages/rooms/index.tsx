import Router from "next/router";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";

const Rooms: React.FC = () => {
  useEffect(() => {
    Router.push("/lobby");
  }, []);

  return (
    <div className="h-full w-full flex justify-center items-center flex-col gap-2">
      <Spinner />
    </div>
  );
};

export default Rooms;
