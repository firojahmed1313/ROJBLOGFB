import React, { useContext, useEffect, useState } from "react";
import HomeBlog from "../components/HomeBlog";
import axios from "axios";
import Loder from "../components/Loder/Loder";
import context from "../context/Context";
const Home = () => {
  const auth = useContext(context);
  //const url = "https://rojblog.onrender.com/api/blog/allBlog";  
  //const localUrl = "https://5000-firojahmed131-rojblogfb-w8s8zoxujfd.ws-us107.gitpod.io/api/blog/allBlog";
  //const localUrl = "https://rojblogfb.vercel.app/api/blog/allBlog"
  const burl=import.meta.env.VITE_URL;
  const localUrl = `${burl}/api/blog/allBlog`;
  console.log(localUrl);
  useEffect(() => {
    const fatchBlogData = async () => {
      const BlogData = await axios.get(localUrl, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      //console.log(BlogData.data.allblogData);
      //setAllBlog(BlogData.data.allblogData);
      auth.setSearchBlog(BlogData.data.allblogData);
    };

    fatchBlogData();
  }, []);

  //console.log(allblog);
  console.log(auth.searchBlog);

  return (
    <>
      {(auth.searchBlog.length!=0) ? (
        (auth.searchBlog).map((blog, index) => {
          return <HomeBlog data={blog} key={index} />;
        })
      ) : (
        <Loder />
      )}
      
    </>
  );
};

export default Home;
