import React, { useState } from "react";
import { SideBar } from "../components";
import { AiOutlineLogout } from "react-icons/ai";

const HomePage = ({ children }) => {
  const [toggled, setToggled] = React.useState(false);
  const [index, setIndex] = useState(0);
  const [broken, setBroken] = React.useState(
    window.matchMedia("(min-width: 800px)").matches
  );
  const handleToggle = () => {
    setToggled((prev) => !prev);
  };
  return (
    <>
      <div className="w-full  h-20 hidden md:flex justify-between items-center bg-[#917FB3]">
        {" "}
        <h1
          className="text-3xl uppercase w-full justify-center text-white items-center px-10"
          style={{ color: "#fff" }}
        >
          Magnus
        </h1>
        <button className="text-3xl uppercase w-full flex  right-0 justify-end items-end px-10">
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
