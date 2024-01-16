import React, { useContext } from "react";
import "./profilenav.css";
import Avatar from "../../assets/avatar.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../context/Context";

const ProfileNav = () => {
  const auth = useContext(Context);
  const navigate = useNavigate();
  console.log(auth);
  const logOut = async () => {
    //const url = "https://rojblog.onrender.com/api/user/logOut";
    const localUrl = "https://5000-firojahmed131-rojblogfb-w8s8zoxujfd.ws-us107.gitpod.io/api/user/logOut"

    const api = await axios.get(localUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(api);
    auth.setIsAuth(false);
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
      navigate("/");
    }, "3000");
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
      <div className="NavProfile">
        <div className="ProfileData">
          <img src={Avatar} className="profileImage" />
          <h2 className="profilename">MD FIROJ AHMED</h2>
          <h3 className="profileemail">
            firojahmed30@gmail.com
          </h3>
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
          <Link to={"/addBlog"} className="Linkitem">
            <h3>AddBlog</h3>
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
