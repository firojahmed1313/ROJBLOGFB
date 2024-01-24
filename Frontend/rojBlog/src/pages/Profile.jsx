import React, { useContext } from "react";
import ProfileNav from "../components/profileall/ProfileNav";
import ProfileBlog from "../components/profileall/ProfileBlog";
import GetCookie from "../cookies/GetCookie";
import context from "../context/Context";

const Profile = () => {
  //console.log("data :" , GetCookie("tokenf"))
  const auth = useContext(context);
  console.log("ttttt",auth);
  return (
    <>
      <div className="profile">
        <div className="profileNav">
          <ProfileNav/>
        </div>
        <div className="profileBlog">
          <ProfileBlog/>
        </div>
      </div>
    </>
  );
};

export default Profile;
