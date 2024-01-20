import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeBlogWithUser from "./HomeBlogWithUser";
const HomeBlog = ({ data }) => {
  const [user, setuser] = useState([]);
  const burl=import.meta.env.VITE_URL;
  //const url = `https://rojblog.onrender.com/user/${data.user}`;
  const localUrl = `${burl}/user/${data.user}`;
  useEffect(() => {
    const getUserdata = async () => {
      const userdata = await axios.get(localUrl, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("user ", userdata.data.user);
      setuser(userdata.data.user);
    };
    getUserdata();
  }, []);
  console.log(user);
  return (
    <>
      {//<HomeBlogWithUser data={data} user={user} />
      }

        <div className="homeBlog">
          <h1 className="blogTitle">{data.title}</h1>
          <div className="blogAddOn">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios-filled/50/user.png"
              alt="user"
            />
            <h3 className="blogAddOntext">{user.name}</h3>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/metro/26/new-post.png"
              alt="new-post"
            />
            <h3 className="blogAddOntext">{user.email}</h3>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/material-outlined/24/calendar--v1.png"
              alt="calendar--v1"
            />
            <h3 className="blogAddOntext">{data.createAt.substring(0, 10)}</h3>
          </div>
          <div className="blogDetails">
            <img
              className="blogDetailsImage"
              src={data.imgUrl}
              alt="blog image"
            />

            <p className="blogDescription">{data.description}</p>
          </div>
        </div>
        
    </>
  );
};

export default HomeBlog;
