import React, { useEffect, useState } from "react";
import Blogeditdelete from "./Blogeditdelete";
import axios from "axios";

const ProfileBlog = () => {
  const [blogDatat, setBlogdata] = useState([]);
  const [userData, setUserData] = useState([]);
  //const url = "https://rojblog.onrender.com/api/blog/allBlog";
  const localUrl = "https://5000-firojahmed131-rojblogfb-w8s8zoxujfd.ws-us107.gitpod.io/api/blog/myBlog"
  useEffect(() => {
    const fatchBlogData = async () => {
      const BlogData = await axios.get(localUrl, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
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
      <div className="b">
        {blogDatat.map((blog, index) => (
          <Blogeditdelete blogData={blog} user={userData} key={index} />
        ))}
      </div>
    </>
  );
  
};

export default ProfileBlog;
