import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

import Image from "next/image";
import Router from "next/router";
import { useState } from "react";

import DropMenu from "./DropMenu";
import Button from "./Button";

interface props {
  children: JSX.Element[] | JSX.Element;
}

const NavBar: React.FC<props> = ({ children }) => {
  const [user] = useAuthState(auth);
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    setMenuActive((active) => !active);
  };

  const signOutClick = () => {
    if (user) {
      Router.push("/");
      return signOut(auth);
    }
  };

  return (
    <div className="absolute top-0 flex flex-col w-full shadow-md select-none">
      <div className="flex w-full justify-between items-center px-8 py-4">
        {children}
        {user ? (
          <Image
            src={user.photoURL}
            className="rounded-full cursor-pointer"
            onClick={handleClick}
            width={40}
            height={40}
            alt="user dp"
          />
        ) : (
          <></>
        )}
      </div>
      {menuActive ? (
        <DropMenu>
          <Button text="Setting" handleClick={() => console.log("sadeyes")} />
          <Button text="Sign Out" handleClick={() => signOutClick()} />
        </DropMenu>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
