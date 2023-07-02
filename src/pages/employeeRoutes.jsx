import { Route, Routes } from "react-router-dom";
import { Home } from "../components";
import UserCreatePage from "./userCreatePage";
import SearchUserPage from "./searchUserPage";

const EmployeeRoutes = () => {
  return (
    <>
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="create" element={<UserCreatePage />} />
        <Route path="search" element={<SearchUserPage />} />
      </Routes> */}
    </>
  );
};

export default EmployeeRoutes;
