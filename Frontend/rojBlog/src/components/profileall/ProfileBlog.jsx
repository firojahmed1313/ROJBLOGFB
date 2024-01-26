import React, { useEffect, useState } from "react";
import Blogeditdelete from "./Blogeditdelete";
import axios from "axios";
import Cookies from 'js-cookie';
import Loder from "../Loder/Loder";


const ProfileBlog = () => {
  const [blogDatat, setBlogdata] = useState([]);
  const [userData, setUserData] = useState([]);
  const [first, setFirst] = useState(1);
  const [last, setLast] = useState(10);
  const [count, setCount] = useState(10);
  const burl = import.meta.env.VITE_URL;
  //const url = "https://rojblog.onrender.com/api/blog/allBlog";
  const localUrl = `${burl}/api/blog/myBlog/${first}`
  useEffect(() => {
    const fatchBlogData = async () => {
      const BlogData = await axios.get(localUrl, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${Cookies.get("tokenf")}`
        },
      });

      console.log(BlogData.data);
      setBlogdata(BlogData.data.blogData);
      setUserData(BlogData.data.user);
      setCount(BlogData.data.totalBlogCount);
    };

    fatchBlogData();
  }, [first]);
  let length = count;
  useEffect(() => {
    let lastd = ((length) % 2 === 0 ? length / 2 : Math.floor(length / 2) + 1);
    setLast(lastd);
  }, [count]); 
  console.log(blogDatat);
  console.log(userData);
  const prev = () => {
    if (first == 1) {
      setFirst(1);
    }
    else {

      setFirst(first - 1);
    }
  }
  const next = () => {
    if (first == last) {
      setFirst(1)
    } else {

      setFirst(first + 1);
    }


    //console.log((first+1)%last);
  }
  return (
    <>
      {(blogDatat.length != 0) ? (<div className="b">
        {blogDatat.map((blog, index) => (
          <Blogeditdelete blogData={blog} user={userData} key={index} />
        ))}
      </div>) : <Loder />}
      <div className="paginationcss">
        <button type="submit" onClick={prev}>PREV</button>
        <h4>{first} of {last}</h4>
        <button type="submit" onClick={next}>NEXT</button>
      </div>
    </>
  );

};

export default ProfileBlog;
