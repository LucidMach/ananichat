import type { NextPage } from "next";

import Image from "next/image";
import SignIn from "../components/SignIn";

const Home: NextPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col gap-2">
      <h1 className="font-thin italic font-mono text-slate-700">
        the anonymous chat app
      </h1>
      <Image src="/nani.jpg" alt="logo" width={300} height={300} />
      <SignIn />
    </div>
  );
};

export default Home;
