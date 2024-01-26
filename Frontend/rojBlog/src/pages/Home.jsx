import React, { useContext, useEffect, useState } from "react";
import HomeBlog from "../components/HomeBlog";
import axios from "axios";
import Loder from "../components/Loder/Loder";
import context from "../context/Context";
const Home = () => {
  const [first,setFirst]=useState(1);
  const [last,setLast]=useState(10);
  const [count,setCount]=useState(10);
   

  const auth = useContext(context);
  //const url = "https://rojblog.onrender.com/api/blog/allBlog";  
  //const localUrl = "https://5000-firojahmed131-rojblogfb-w8s8zoxujfd.ws-us107.gitpod.io/api/blog/allBlog";
  //const localUrl = "https://rojblogfb.vercel.app/api/blog/allBlog"
  const burl=import.meta.env.VITE_URL;
  const localUrl = `${burl}/api/blog/allBlog/${first}`;
  console.log(localUrl);
  useEffect(() => {
    const fatchBlogData = async () => {
      const BlogData = await axios.get(localUrl, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setCount(BlogData.data.totalBlogCount);
      //setAllBlog(BlogData.data.allblogData);
      auth.setSearchBlog(BlogData.data.allblogData);
    };

    fatchBlogData();
  }, [first]);
  let length = count;
  useEffect(() => {
    let lastd = ((length) % 3 === 0 ? length / 3 : Math.floor(length / 3) + 1);
    setLast(lastd);
  }, [count]); // Add dependency to the useEffect
  
  //console.log(lastd);
  console.log(auth.searchBlog);
  //pagination 
  const prev=()=>{
    if(first==1){
      setFirst(1);
    }
    else{

      setFirst(first-1);
    }
  }
  const next=()=>{
    if(first==last){
      setFirst(1)
    }else{

      setFirst(first+1);
    }
      

      //console.log((first+1)%last);
  }
  return (
    <>
      {(length!=0) ? (
        (auth.searchBlog).map((blog, index) => {
          return <HomeBlog data={blog} key={index} />;
        })
      ) : (
        <Loder />
      )}
      <div className="paginationcss">
        <button type="submit" onClick={prev}>PREV</button>
        <h4>{first} of {last}</h4>
        <button type="submit" onClick={next}>NEXT</button>
      </div>
      
    </>
  );
};

export default Home;
