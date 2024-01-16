import React, { useEffect, useState } from "react";
import HomeBlog from "../components/HomeBlog";
import axios from "axios";
import Loder from "../components/Loder/Loder";
const Home = () => {
  const [allblog, setAllBlog] = useState([]);
  //const url = "https://rojblog.onrender.com/api/blog/allBlog";  
  const localUrl = "https://5000-firojahmed131-rojblogfb-w8s8zoxujfd.ws-us107.gitpod.io/api/blog/allBlog"

  useEffect(() => {
    const fatchBlogData = async () => {
      const BlogData = await axios.get(localUrl, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      //console.log(BlogData.data.allblogData);
      setAllBlog(BlogData.data.allblogData);
    };

    fatchBlogData();
  }, []);

  console.log(allblog);
  //console.log("home");

  return (
    <>
      {(allblog.length!=0) ? (
        allblog.map((blog, index) => {
          return <HomeBlog data={blog} key={index} />;
        })
      ) : (
        <Loder />
      )}
      
    </>
  );
};

export default Home;
