import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AddBlog from "./pages/AddBlog";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Navber from "./components/Navber";

const App = () => {
  return (
    <>
      <Navber/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
