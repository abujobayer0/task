import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { useEffect } from "react";
import UserCreatePage from "./pages/userCreatePage";
import "animate.css";
import SearchUserPage from "./pages/searchUserPage";
import {
  Alerts,
  Buttons,
  CssLink,
  Home,
  IFrames,
  ImageLink,
  ImgComp,
  Label,
  Links,
  LoginComp,
  MultipleAutocomplete,
  MultipleCollapse,
  Popup,
  ProgressBars,
  SingleAutocomplete,
  SingleCollapse,
  SingleMenu,
  Slider,
  StatusCode,
  SubMenu,
  Tabs,
  Tooltip,
} from "./components";
import UpdateEmployee from "./pages/updatePage";
import PrivateRoute from "./router/privateRoute";
import ErrorPage from "./pages/errorPage";
import { CommonTab } from "./components/common/commonTab";
const data = [
  {
    label: "Single Menus",
    comp: <SingleMenu />,
  },
  {
    label: "Sub Menus",
    comp: <SubMenu />,
  },
];
const autocomplete = [
  {
    label: "Single Values",
    comp: <SingleAutocomplete />,
  },
  {
    label: "Multiple Value",
    comp: <MultipleAutocomplete />,
  },
];
const collapse = [
  {
    label: "Single Collapse",
    comp: <SingleCollapse />,
  },
  {
    label: "Multiple Collapse",
    comp: <MultipleCollapse />,
  },
];
const slider = [
  {
    label: "Slider",
    comp: <Slider />,
  },
];
const img = [
  {
    label: "Image",
    comp: <ImgComp />,
  },
];
const tooltip = [
  {
    label: "Tooltip",
    comp: <Tooltip />,
  },
];
const popup = [
  {
    label: "popup",
    comp: <Popup />,
  },
];
const links = [
  {
    label: "Active Links",
    comp: <Links />,
  },
  {
    label: "Broken Links",
    comp: <Links />,
  },
  {
    label: "Image Links",
    comp: <ImageLink />,
  },
  {
    label: "Status Code",
    comp: <StatusCode />,
  },
];
const cssProperties = [
  {
    label: "Links",
    comp: <CssLink />,
  },
  {
    label: "Buttons",
    comp: <Buttons />,
  },
  {
    label: "Labels",
    comp: <Label />,
  },
  {
    label: "Alerts",
    comp: <Alerts />,
  },
  {
    label: "Progress Bar",
    comp: <ProgressBars />,
  },
];
const Iframe = [
  {
    label: "Iframe",
    comp: <IFrames />,
  },
];

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
        <Route
          path="/multiple/tabs"
          element={
            <PrivateRoute>
              <HomePage>
                <Tabs />
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/home/menu"
          element={
            <PrivateRoute>
              <HomePage>
                <CommonTab data={data}></CommonTab>
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/home/autocomplete"
          element={
            <PrivateRoute>
              <HomePage>
                <CommonTab data={autocomplete}></CommonTab>
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/home/collapse"
          element={
            <PrivateRoute>
              <HomePage>
                <CommonTab data={collapse}></CommonTab>
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/home/slider"
          element={
            <PrivateRoute>
              <HomePage>
                <CommonTab data={slider}></CommonTab>
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/home/tooltip"
          element={
            <PrivateRoute>
              <HomePage>
                <CommonTab data={tooltip}></CommonTab>
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/home/popup"
          element={
            <PrivateRoute>
              <HomePage>
                <CommonTab data={popup}></CommonTab>
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/home/links"
          element={
            <PrivateRoute>
              <HomePage>
                <CommonTab data={links}></CommonTab>
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/home/css/properties"
          element={
            <PrivateRoute>
              <HomePage>
                <CommonTab data={cssProperties}></CommonTab>
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/home/iframes"
          element={
            <PrivateRoute>
              <HomePage>
                <CommonTab data={Iframe}></CommonTab>
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route
          path="/home/image"
          element={
            <PrivateRoute>
              <HomePage>
                <CommonTab data={img}></CommonTab>
              </HomePage>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
