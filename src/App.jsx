import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { useEffect } from "react";
import UserCreatePage from "./pages/userCreatePage";
import SearchUserPage from "./pages/searchUserPage";
import { Home, LoginComp } from "./components";
import UpdateEmployee from "./pages/updatePage";
import PrivateRoute from "./router/privateRoute";

const App = () => {
  useEffect(() => {
    localStorage.setItem("i", 0);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginComp />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage>
                <Home />
              </HomePage>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <HomePage>
                <UserCreatePage />
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <HomePage>
                <SearchUserPage />
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/update/employee/:id"
          element={
            <PrivateRoute>
              <HomePage>
                <UpdateEmployee />
              </HomePage>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
