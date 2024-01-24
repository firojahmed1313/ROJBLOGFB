import React from "react";
import ProfileNav from "../components/profileall/ProfileNav";
import ProfileBlog from "../components/profileall/ProfileBlog";
import GetCookie from "../cookies/GetCookie";

const Profile = () => {
  //console.log("data :" , GetCookie("tokenf"))
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
