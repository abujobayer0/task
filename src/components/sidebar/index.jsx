import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BsCaretRight } from "react-icons/bs";
import {
  AiFillDashboard,
  AiFillDatabase,
  AiFillSetting,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../utils/firebase.init";
const auth = getAuth(app);
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
                color: index === 0 ? "#7128f8" : "#000",
                backgroundColor: index === 0 ? "#fff" : "#fff",
              }}
            >
              Home
            </MenuItem>
          </Link>

          <SubMenu
            label="Employee"
            icon={<AiFillDashboard />}
            style={{
              color: index === 1 || index === 2 ? "#7128f8" : "#000",
              backgroundColor: index === 1 || index === 2 ? "#fff" : "#fff",
            }}
          >
            <Link to={"/create"}>
              <MenuItem
                onClick={() => handleIndex(1)}
                icon={<AiOutlineUserAdd />}
                style={{
                  color: index === 1 ? "#7128f8" : "#000",
                  backgroundColor: index === 1 ? "#fff" : "#fff",
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
                  color: index === 2 ? "#7128f8" : "#000",
                  backgroundColor: index === 2 ? "#fff" : "#fff",
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
            <Link to="/multiple/tabs">
              <MenuItem
                onClick={() => handleIndex(3)}
                icon={<BsCaretRight />}
                style={{
                  color: index === 3 ? "#7128f8" : "#000",
                  backgroundColor: index === 3 ? "#fff" : "#fff",
                }}
              >
                {" "}
                Multiple Tabs
              </MenuItem>
            </Link>
            <Link to="/home/menu">
              <MenuItem
                onClick={() => handleIndex(4)}
                icon={<BsCaretRight />}
                style={{
                  color: index === 4 ? "#7128f8" : "#000",
                  backgroundColor: index === 4 ? "#fff" : "#fff",
                }}
              >
                {" "}
                Menu
              </MenuItem>
            </Link>
            <Link to={"/home/autocomplete"}>
              <MenuItem
                icon={<BsCaretRight />}
                onClick={() => handleIndex(5)}
                style={{
                  color: index === 5 ? "#7128f8" : "#000",
                  backgroundColor: index === 5 ? "#fff" : "#fff",
                }}
              >
                {" "}
                Autocomplete
              </MenuItem>
            </Link>
            <Link to={"/home/collapse"}>
              <MenuItem
                icon={<BsCaretRight />}
                onClick={() => handleIndex(6)}
                style={{
                  color: index === 6 ? "#7128f8" : "#000",
                  backgroundColor: index === 6 ? "#fff" : "#fff",
                }}
              >
                Collapsible Content
              </MenuItem>
            </Link>
            <Link to="/home/image">
              <MenuItem
                icon={<BsCaretRight />}
                onClick={() => handleIndex(7)}
                style={{
                  color: index === 7 ? "#7128f8" : "#000",
                  backgroundColor: index === 7 ? "#fff" : "#fff",
                }}
              >
                {" "}
                Images
              </MenuItem>
            </Link>
            <Link to={"/home/slider"}>
              <MenuItem
                icon={<BsCaretRight />}
                onClick={() => handleIndex(8)}
                style={{
                  color: index === 8 ? "#7128f8" : "#000",
                  backgroundColor: index === 8 ? "#fff" : "#fff",
                }}
              >
                {" "}
                Slider
              </MenuItem>
            </Link>
            <Link to={"/home/tooltip"}>
              <MenuItem
                icon={<BsCaretRight />}
                onClick={() => handleIndex(9)}
                style={{
                  color: index === 9 ? "#7128f8" : "#000",
                  backgroundColor: index === 9 ? "#fff" : "#fff",
                }}
              >
                {" "}
                Tooltips
              </MenuItem>
            </Link>
            <Link to={"/home/popup"}>
              <MenuItem
                icon={<BsCaretRight />}
                onClick={() => handleIndex(10)}
                style={{
                  color: index === 10 ? "#7128f8" : "#000",
                  backgroundColor: index === 10 ? "#fff" : "#fff",
                }}
              >
                {" "}
                Popups
              </MenuItem>
            </Link>

            <Link to={"/home/links"}>
              <MenuItem
                icon={<BsCaretRight />}
                onClick={() => handleIndex(11)}
                style={{
                  color: index === 11 ? "#7128f8" : "#000",
                  backgroundColor: index === 11 ? "#fff" : "#fff",
                }}
              >
                {" "}
                Links
              </MenuItem>
            </Link>
            <Link to={"/home/css/properties"}>
              <MenuItem
                icon={<BsCaretRight />}
                onClick={() => handleIndex(12)}
                style={{
                  color: index === 12 ? "#7128f8" : "#000",
                  backgroundColor: index === 12 ? "#fff" : "#fff",
                }}
              >
                {" "}
                CSS Properties
              </MenuItem>
            </Link>
            <Link to={"/home/iframes"}>
              <MenuItem
                icon={<BsCaretRight />}
                onClick={() => handleIndex(13)}
                style={{
                  color: index === 13 ? "#7128f8" : "#000",
                  backgroundColor: index === 13 ? "#fff" : "#fff",
                }}
              >
                {" "}
                iFrames
              </MenuItem>
            </Link>
          </SubMenu>

          <MenuItem
            icon={<AiFillSetting />}
            style={{ color: "#000", backgroundColor: "#fff" }}
          >
            {" "}
            Settings
          </MenuItem>
          <div className="flex md:hidden">
            <MenuItem
              onClick={handleSignout}
              icon={<AiOutlineLogout />}
              style={{ color: "#000", backgroundColor: "#fff" }}
            >
              Sign out
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          {broken && (
            <div className="w-full relative  bg-purple-600">
              <h1 className="w-full text-3xl p-2 m-0 ">Magnus</h1>
              <button
                className="bg-purple-600 sb-button text-3xl p-2"
                onClick={handleToggle}
              >
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
