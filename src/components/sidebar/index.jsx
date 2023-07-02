import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  AiFillDashboard,
  AiFillDatabase,
  AiFillSetting,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const SideBar = ({
  toggled,
  handleToggle,
  index,
  setBroken,
  broken,
  setIndex,
}) => {
  const handleIndex = (e) => {
    setIndex(e);
  };

  return (
    <div style={{ minHeight: "100%" }} className="flex-col  md:flex-row flex">
      <Sidebar
        toggled={toggled}
        customBreakPoint="768px"
        onBreakPoint={setBroken}
        style={{
          background: "#fff",
          width: "250px",
          minHeight: "100vh",
          transition: "all 0.5s ease",
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  color: disabled ? "#fff" : "#fff",
                  backgroundColor: active ? "#fff" : undefined,
                };
            },
          }}
        >
          <Link to={"/"}>
            <MenuItem
              icon={<AiFillDashboard />}
              onClick={() => handleIndex(0)}
              style={{
                color: index === 0 ? "#000" : "#000",
                backgroundColor: index === 0 ? "#E5BEEC" : "#fff",
              }}
            >
              Home
            </MenuItem>
          </Link>

          <SubMenu
            label="Employee"
            icon={<AiFillDashboard />}
            style={{
              color: index === 1 || index === 2 ? "#000" : "#000",
              backgroundColor: index === 1 || index === 2 ? "#E5BEEC" : "#fff",
            }}
          >
            <Link to={"/create"}>
              <MenuItem
                onClick={() => handleIndex(1)}
                icon={<AiOutlineUserAdd />}
                style={{
                  color: index === 1 ? "#000" : "#000",
                  backgroundColor: index === 1 ? "#FDE2F3" : "#fff",
                }}
              >
                Create
              </MenuItem>
            </Link>
            <Link to={"/search"}>
              <MenuItem
                onClick={() => handleIndex(2)}
                icon={<AiOutlineSearch />}
                style={{
                  color: index === 2 ? "#000" : "#000",
                  backgroundColor: index === 2 ? "#FDE2F3" : "#fff",
                }}
              >
                Search
              </MenuItem>
            </Link>
          </SubMenu>
          <SubMenu
            label="More"
            icon={<AiFillDatabase />}
            style={{ color: "#000", background: "#fff" }} // Add custom styles to SubMenu component
          >
            <MenuItem style={{ color: "#000", backgroundColor: "#fff" }}>
              {" "}
              Pie charts
            </MenuItem>
            <MenuItem style={{ color: "#000", backgroundColor: "#fff" }}>
              {" "}
              Line charts
            </MenuItem>
            <MenuItem style={{ color: "#000", backgroundColor: "#fff" }}>
              {" "}
              Bar charts
            </MenuItem>
          </SubMenu>

          <MenuItem
            icon={<AiFillSetting />}
            style={{ color: "#000", backgroundColor: "#fff" }}
          >
            {" "}
            Settings
          </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          {broken && (
            <div className="w-full relative  bg-[#917FB3]">
              <h1 className="w-full text-3xl p-2 m-0 ">Magnus</h1>
              <button className="sb-button text-3xl p-2" onClick={handleToggle}>
                <AiOutlineMenu />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SideBar;
