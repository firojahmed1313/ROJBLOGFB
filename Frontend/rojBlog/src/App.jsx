import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AddBlog from "./pages/AddBlog";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Navber from "./components/Navber";
import SaveBlog from "./pages/SaveBlog";
import GetCookie from "./cookies/GetCookie";
import context from "./context/Context";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  const auth = useContext(context);
  const isCookies= GetCookie("tokenf");
  if(isCookies){
    auth.setIsAuth(true);
  }
  return (
    <>
      <Navber/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="/saveBlog" element={<SaveBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default App;
