import React, { useEffect, useState } from "react";
import Blogeditdelete from "./Blogeditdelete";
import axios from "axios";
import Cookies from 'js-cookie';
import Loder from "../Loder/Loder";


const ProfileBlog = () => {
  const [blogDatat, setBlogdata] = useState([]);
  const [userData, setUserData] = useState([]);
  const burl=import.meta.env.VITE_URL;
  //const url = "https://rojblog.onrender.com/api/blog/allBlog";
  const localUrl = `${burl}/api/blog/myBlog`
  useEffect(() => {
    const fatchBlogData = async () => {
      const BlogData = await axios.get(localUrl, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `${Cookies.get("tokenf")}`
        },
      });

      console.log(BlogData.data);
      setBlogdata(BlogData.data.blogData);
      setUserData(BlogData.data.user);
    };

    fatchBlogData();
  }, []);

  console.log(blogDatat);
  console.log(userData);
  return (
    <>
      {(blogDatat.length!=0)?(<div className="b">
        {blogDatat.map((blog, index) => (
          <Blogeditdelete blogData={blog} user={userData} key={index} />
        ))}
      </div>):<Loder/>}
    </>
  );
  
};

export default ProfileBlog;
