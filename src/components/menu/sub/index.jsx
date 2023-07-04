import { useState } from "react";
import "./sub.css";
const SubMenu = () => {
  const [tab, setTab] = useState(0);
  const handleTab = (e) => {
    setTab(e);
  };
  return (
    <div className="relative w-full  flex flex-col md:flex-row min-h-screen justify-between items-center md:justify-normal md:items-start">
      <div className="w-full flex  h-fit flex-col  gap-[58px] items-center justify-center relative">
        <div className="flex justify-start  w-full text-black ">
          <div className="relative  group bg-red-100">
            <div className="absolute  group-hover:visible   ">
              <div className="relative group2 md:px-14 bg-purple-600  py-0 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white  hover:text-gray-200 border-b-2 ">
                <div className="px-10   py-4 cursor-pointer mx-auto  flex justify-center items-center  text-white  hover:text-gray-200 ">
                  Testing
                </div>
                <div className="absolute w-full top-0  left-32 md:left-[245px] invisible group2-hover:visible bg-green-100">
                  <div
                    onClick={() => handleTab(1)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    Selenium
                  </div>
                  <div
                    onClick={() => handleTab(2)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    Manual Testing
                  </div>
                  <div
                    onClick={() => handleTab(3)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    DB Testing
                  </div>
                  <div
                    onClick={() => handleTab(4)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    Unit Testing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start w-full text-black ">
          <div className="relative  group bg-red-100">
            <div className="absolute  group-hover:visible   ">
              <div className="relative group2 md:px-14 bg-purple-600  py-0 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2 ">
                <div className="px-12   py-4 cursor-pointer mx-auto  flex justify-center items-center  text-white hover:text-gray-200 ">
                  JAVA
                </div>
                <div className="absolute w-full top-0  left-32 md:left-[245px] invisible group2-hover:visible bg-green-100">
                  <div
                    onClick={() => handleTab(5)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    Adv Java
                  </div>
                  <div
                    onClick={() => handleTab(6)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    Core Java
                  </div>
                  <div
                    onClick={() => handleTab(7)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    Spring
                  </div>
                  <div
                    onClick={() => handleTab(8)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    Hibernate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start w-full text-black ">
          <div className="relative  group bg-red-100">
            <div className="absolute  group-hover:visible   ">
              <div className="relative group2 md:px-14 bg-purple-600  py-0 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2 w-full">
                <div className="px-[49px] w-full   py-4 cursor-pointer mx-auto  flex justify-center items-center  text-white hover:text-gray-200 ">
                  .NET
                </div>
                <div className="absolute w-full top-0  left-32 md:left-[245px] invisible group2-hover:visible bg-green-100">
                  <div
                    onClick={() => handleTab(9)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    C#
                  </div>
                  <div
                    onClick={() => handleTab(10)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    ASP.Net
                  </div>
                  <div
                    onClick={() => handleTab(11)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    ADO.Net
                  </div>
                  <div
                    onClick={() => handleTab(12)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    MVC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start w-full text-black ">
          <div className="relative  group bg-red-100">
            <div className="absolute  group-hover:visible   ">
              <div className="relative group2 md:px-14 bg-purple-600  py-0 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2 ">
                <div className="px-8  py-4 cursor-pointer mx-auto  flex justify-center items-center  text-white hover:text-gray-200 ">
                  Database
                </div>
                <div className="absolute w-full top-0  left-32 md:left-[245px] invisible group2-hover:visible bg-green-100">
                  <div
                    onClick={() => handleTab(13)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    SQL
                  </div>
                  <div
                    onClick={() => handleTab(14)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    My Sql
                  </div>
                  <div
                    onClick={() => handleTab(15)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    Oracle
                  </div>
                  <div
                    onClick={() => handleTab(16)}
                    className="px-10 bg-purple-600  py-4 cursor-pointer mx-auto  flex justify-center items-center hover:bg-purple-500 text-white hover:text-gray-200 border-b-2"
                  >
                    H2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-start  flex justify-start items-start h-96 md:h-fit  w-full">
        {tab != 0 && (
          <>
            You Have Selected{" "}
            {tab === 1
              ? "Selenium"
              : tab === 2
              ? "Manual Testing"
              : tab === 3
              ? "DB Test"
              : tab === 4
              ? "Unit Test"
              : tab === 5
              ? "Adv Java"
              : tab === 6
              ? "Core Java"
              : tab === 7
              ? "Spring"
              : tab === 8
              ? "Hibernate"
              : tab === 9
              ? "C#"
              : tab === 10
              ? "ASP.NET"
              : tab === 11
              ? "ADO.Net"
              : tab === 12
              ? "MVC"
              : tab === 13
              ? "SQL"
              : tab === 14
              ? "My Sql"
              : tab === 15
              ? "Oracle"
              : tab === 16
              ? "H2"
              : ""}{" "}
            Menu Option.
          </>
        )}
      </div>
    </div>
  );
};

export default SubMenu;
