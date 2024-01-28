import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import context from "../../context/Context";
import Cookies from 'js-cookie';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
const data = {
  title: "fffffffff",
  createAt: "23-23-2345",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief,Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the moreobscure Latin words ",
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjv8k9FpJH5AvquxbVyd06B5UludsXYeHuTLTGllucw&s",
};
/*
const user = {
  name: "MD FIROJ AHMED",
  email: "firojahmed@gmail.com",
};*/
const Blogeditdelete = ({ blogData, user }) => {
  const navigate = useNavigate();
  const auth = useContext(context);
  auth.setUser(user);
  const burl = import.meta.env.VITE_URL;

  const deleteBlog = async () => {
    console.log("deleteBlog");
    try {
      //const url = "https://rojblog.onrender.com/api/user/logIn";
      const localUrl = `${burl}/api/blog/deleteBlog/${blogData._id}`;
      console.log(localUrl);
      const api = await axios.delete(localUrl, {
        headers: {
          "Authorization": `${Cookies.get("tokenf")}`
        },
        withCredentials: true,
      });

      console.log(api);
      setTimeout(() => {
        navigate("/profile");
      }, "4000");
      /*
      if(api.data.success){
        SetCookie("token",JSON.stringify(api.data.user));
      }*/
      //auth.setIsAuth(true);
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
        navigate("/home");
      }, "3000");
      setTimeout(() => {
        navigate("/profile");
      }, "4000");
    } catch (error) {
      console.warn(error);
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
  }

  const editBlog = async () => {
    console.log("edited");
    //console.log(blogData);
    auth.setBlogEdited(blogData);
    console.log(auth.blogEdited);
    auth.setIsEdit(true);
    navigate("/addBlog");
  }
  console.log(user);
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
      <div className="homeBlog">
        <h1 className="blogTitle">{blogData.title}</h1>
        <div className="blogAddOn">
          <div className="blogimageHeading">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios-filled/50/user.png"
              alt="user"
            />
            <h3 className="blogAddOntext">{user.name}</h3>
          </div>
          <div className="blogimageHeading">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/metro/26/new-post.png"
              alt="new-post"
            />
            <h3 className="blogAddOntext">{user.email}</h3>
          </div>
          <div className="blogimageHeading">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/material-outlined/24/calendar--v1.png"
              alt="calendar--v1"
            />
            <h3 className="blogAddOntext">{data.createAt.substring(0, 10)}</h3>
          </div>
        </div>
        <div className="blogDetails">
          <img className="blogDetailsImage" src={blogData.imgUrl} alt="blog image" />
          <div >
            <p className="blogDescription">{blogData.description.substring(0, 500)}...</p>
            <div className="editDelete">
              <button onClick={editBlog} type="submit">
                <EditNoteIcon/>
              </button>
              <button onClick={deleteBlog} type="submit">
                <DeleteIcon/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogeditdelete;
