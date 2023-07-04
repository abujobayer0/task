import { useState } from "react";

const SingleMenu = () => {
  const [tab, setTab] = useState(0);
  const handleTab = (e) => {
    setTab(e);
  };
  return (
    <div className="w-full flex gap-2 flex-col md:flex-row items-center justify-between">
      <div className="inline-block w-full md:w-fit text-black ">
        <ul className="w-full md:w-fit">
          <li
            className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto md:w-60 flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
            onClick={() => handleTab(1)}
          >
            Testing
          </li>
          <li
            className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto md:w-60 flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
            onClick={() => handleTab(2)}
          >
            Java
          </li>

          <li
            className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto md:w-60 flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
            onClick={() => handleTab(3)}
          >
            .Net
          </li>
          <li
            className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto md:w-60 flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200"
            onClick={() => handleTab(4)}
          >
            Data Base
          </li>
        </ul>
      </div>
      <div className="text-start  flex justify-start items-center h-96 md:h-fit  w-full">
        {tab != 0 && (
          <>
            You Have Selected{" "}
            {tab === 1
              ? "Testing"
              : tab === 2
              ? "Java"
              : tab === 3
              ? ".Net"
              : tab === 4
              ? "Data Base"
              : ""}{" "}
            Menu Option.
          </>
        )}
      </div>
    </div>
  );
};

export default SingleMenu;
