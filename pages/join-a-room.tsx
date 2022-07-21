import type { NextPage } from "next";
import Image from "next/image";

import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "../components/NavBar";
import Head from "next/head";

const JoinARoom: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Head>
        <title>ananichat</title>
        <meta name="description" content="the anonymous chat app... nani!!!" />
        <link rel="icon" href="/nani.jpg" />
      </Head>
      <div className="h-full w-full flex justify-center items-center flex-col">
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
        <div className="shadow-md px-8 py-4">
          <h1 className="font-thin italic font-mono text-slate-700">
            join a room
          </h1>
        </div>
      </div>
    </>
  );
};

export default JoinARoom;
