import React from "react";
const data = {
  title: "fffffffff",
  createAt: "23-23-2345",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief,Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the moreobscure Latin words ",
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjv8k9FpJH5AvquxbVyd06B5UludsXYeHuTLTGllucw&s",
};
const user = {
  name: "MD FIROJ AHMED",
  email: "firojahmed@gmail.com",
};
const Blogeditdelete = () => {
  return (
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
        <img className="blogDetailsImage" src={data.imgUrl} alt="blog image" />
        <div >
          <p className="blogDescription">{data.description}</p>
          <div className="editDelete">
          <button onClick={() => editBlog} type="submit">
           Edit
          </button>
          <button onClick={() => deleteBlog} type="submit">
            Delete
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogeditdelete;
