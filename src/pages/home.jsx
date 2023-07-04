import React, { useState } from "react";
import { SideBar } from "../components";
import { AiOutlineLogout } from "react-icons/ai";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../utils/firebase.init";
const auth = getAuth(app);
const HomePage = ({ children, title }) => {
  const [toggled, setToggled] = React.useState(false);
  const [index, setIndex] = useState(0);
  const [broken, setBroken] = React.useState(
    window.matchMedia("(min-width: 800px)").matches
  );
  const handleToggle = () => {
    setToggled((prev) => !prev);
  };
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("sign out successfull");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="w-full  py-3 hidden md:flex justify-between items-center bg-purple-600">
        {" "}
        <h1
          className="text-3xl uppercase w-full justify-center text-white items-center px-10"
          style={{ color: "#fff" }}
        >
          Magnus
        </h1>
        <button
          onClick={handleSignout}
          className="text-3xl uppercase w-full flex  right-0 justify-end items-end px-10"
        >
          <AiOutlineLogout className="text-3xl  w-fit  pr-10" />
        </button>
      </div>
      <div className="flex flex-col  gap-2 md:gap-0  md:flex-row">
        <SideBar
          toggled={toggled}
          index={index}
          setIndex={setIndex}
          setBroken={setBroken}
          broken={broken}
          handleToggle={handleToggle}
        />

        {children}
      </div>
    </>
  );
};

export default HomePage;
