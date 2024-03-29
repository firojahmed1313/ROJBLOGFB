import axios from "axios";
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import context from "../context/Context";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';
const initialData = {
  title: "",
  description: "",
  imgUrl: "",
};

const AddBlog = () => {
  const auth = useContext(context);
  const [blog, setBlog] = useState(auth.isEdit ? auth.blogEdited : initialData);

  const navigate = useNavigate();
  console.log(auth.blogEdited);
  console.log(auth)
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };
  const burl = import.meta.env.VITE_URL;
  const onSubmits = async (e) => {
    e.preventDefault();
    var api;
    try {
      //const url = "https://rojblog.onrender.com/api/blog/new";
      if (auth.isEdit) {
        const localUrle = `${burl}/api/blog/updateBlog/${auth.blogEdited._id}`
        api = await axios.put(localUrle, blog, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${Cookies.get("tokenf")}`
          },
          withCredentials: true,
        });
        auth.setIsEdit(false);
      } else {
        const localUrla = `${burl}/api/blog/new`

        api = await axios.post(localUrla, blog, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `${Cookies.get("tokenf")}`
          },

        });

      }

      console.log("api data blog ", api);
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
        navigate('/profile');
      }, "3000");
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
    console.log(blog);

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
        <form onSubmit={onSubmits}>
          <h1>CREATE BLOG</h1>
          <div className="formiconplusi">
            <TitleIcon fontSize="large" />
            <input
              placeholder="Enter Blog Title"
              type="text"
              name="title"
              id="title"
              value={blog.title}
              onChange={inputEvent}
            />
          </div>
          <div className="formiconplusi">
            <DescriptionIcon fontSize="large" />
            <input
              placeholder="Enter Blog Description"
              type="text"
              name="description"
              id="description"
              value={blog.description}
              onChange={inputEvent}
            />
          </div>
          <div className="formiconplusi">
            <LinkIcon fontSize="large" />
            <input
              placeholder="Enter Blog imgUrl"
              type="text"
              name="imgUrl"
              id="imgUrl"
              value={blog.imgUrl}
              onChange={inputEvent}
            />
          </div>
          <button onClick={() => onSubmits} type="submit">
            {(auth.isEdit) ? "Update Blog" : "Create Blog"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
