import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { useEffect } from "react";

import UserCreatePage from "./pages/userCreatePage";
import SearchUserPage from "./pages/searchUserPage";
import { Home } from "./components";

const App = () => {
  useEffect(() => {
    localStorage.setItem("i", 0);
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage>
              <Home />
            </HomePage>
          }
        ></Route>
        <Route
          path="/create"
          element={
            <HomePage>
              <UserCreatePage />
            </HomePage>
          }
        />
        <Route
          path="/search"
          element={
            <HomePage>
              <SearchUserPage />
            </HomePage>
          }
        />
      </Routes>
    </>
  );
};

export default App;
