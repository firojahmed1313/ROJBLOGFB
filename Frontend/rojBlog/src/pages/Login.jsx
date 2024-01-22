import React, { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import context from "../context/Context";
import SetCookie from "../cookies/SetCookie";

const Login = () => {
  const auth = useContext(context);
  const [email, setname] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  console.log(auth);
  const burl=import.meta.env.VITE_URL;
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      //const url = "https://rojblog.onrender.com/api/user/logIn";
      const localUrl = `${burl}/api/user/logIn`
      const api = await axios.post(
        localUrl,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(api);
      
      if(api.data.success){
        SetCookie("tokenf",JSON.stringify(api.data.user));
      }
      auth.setIsAuth(true);
      toast.success(api.data.massage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/profile");
      }, "3000");
    } catch (error) {
      console.warn(error);
      auth.setIsAuth(false);
      toast.error(error.response.data.massage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="formbody">
        <form onSubmit={onSubmit}>
          <h1>LOGIN</h1>

          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            placeholder="Enter Your Password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
