import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../context/Context"
import axios from "axios";

const Navber = () => {
  const [searchData, setSearchData] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const auth = useContext(Context);
  const burl=import.meta.env.VITE_URL;
  console.log(auth.isAuth);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(searchData);
    try {
      const response = await axios.post(`${burl}/api/blog/search`, {
        searchData},{
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setSearchResults(response.data);
      console.log(searchResults);
      setSearchData("")
    } catch (error) {
      console.error('Error searching:', error.response ? error.response.data : error.message);
    }

  };
  return (
    <>
      <div className="Navber">
        <div className="left">
          <Link to={"/"} className="">
            <h2>ROJ BLOG</h2>
          </Link>
        </div>
        <div className="right">
          <div className="navfrom">
            <form onSubmit={onSubmit}>
              <input
                name="searchData"
                value={searchData}
                placeholder="Search"
                onChange={(e) => setSearchData(e.target.value)}
                type="text"
              />
            </form>
          </div>

          <Link to={"/register"} className="navitem">
            <h3>Register</h3>
          </Link>

          {(auth.isAuth)?<Link to={"/profile"} className="navitem">
            <h3>Profile</h3>
          </Link> : <h3></h3>}

          <Link to={"/login"} className="navitem">
            <h3>Login</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navber;
