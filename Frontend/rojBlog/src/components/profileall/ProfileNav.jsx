import React, { useContext } from "react";
import "./profilenav.css";
import Avatar from "../../assets/avatar.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import DeleteCookie from "../../cookies/DeleteCookie";

const ProfileNav = () => {
  const auth = useContext(Context);
  
  const navigate = useNavigate();
  console.log(auth);
  const logOut = async () => {
    //const url = "https://rojblog.onrender.com/api/user/logOut";
    /*const localUrl = "https://5000-firojahmed131-rojblogfb-w8s8zoxujfd.ws-us107.gitpod.io/api/user/logOut"

    const api = await axios.get(localUrl, {
      
      withCredentials: true,
    });
    console.log(api);
    auth.setIsAuth(false);
    toast.success(api.data.message, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      navigate("/");
    }, "3000");*/
    DeleteCookie('tokenf');
    auth.setIsAuth(false);
    
    setTimeout(() => {
      navigate("/");
    }, "3000");
    toast.success("Logout Sucessfully", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-left"
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
      <div className="NavProfile">
        <div className="ProfileData">
          <img src={Avatar} className="profileImage" />
          <div className="profilename" title={auth.user.name}>{auth.user.name}</div>
          <div className="profileemail" title={auth.user.email}>
            {auth.user.email}
          </div>
          <button onClick={() => editBlog} type="submit">
           Extra
          </button>
        </div>
        <div className="ProfileLink">
          <Link to={"/"} className="Linkitem">
            <h3>Home</h3>
          </Link>
          <Link to={"/addBlog"} className="Linkitem">
            <h3>AddBlog</h3>
          </Link>
          <Link to={"/saveBlog"} className="Linkitem">
            <h3>SaveBlog</h3>
          </Link>
          <div className="Linkitem" onClick={logOut}>
            <h3>Logout</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileNav;
