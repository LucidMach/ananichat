import type { NextPage } from "next";
import Image from "next/image";
import Router from "next/router";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

import SignIn from "../components/SignIn";
import Spinner from "../components/Spinner";

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);

  const render = () => {
    if (loading) return <Spinner />;
    if (user) Router.push("/lobby");
    else
      return (
        <>
          <h1 className="font-thin italic font-mono text-slate-700">
            the anonymous chat app
          </h1>
          <Image src="/nani.jpg" alt="logo" width={300} height={300} />
          <SignIn />
        </>
      );
  };

  return (
    <div className="h-full w-full flex justify-center items-center flex-col gap-2">
      {render()}
    </div>
  );
};

export default Home;
