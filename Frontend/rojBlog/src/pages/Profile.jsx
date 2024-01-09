import React from "react";
import ProfileNav from "../components/profileall/ProfileNav";
import ProfileBlog from "../components/profileall/ProfileBlog";

const Profile = () => {
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
