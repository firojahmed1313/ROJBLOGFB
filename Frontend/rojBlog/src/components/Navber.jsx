import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../context/Context"
import axios from "axios";

const Navber = () => {
  const [searchData, setSearchData] = useState("");
  const auth = useContext(Context);
  const burl = import.meta.env.VITE_URL;
  console.log(auth.isAuth);

  const onsubmitform=(e)=>{
    e.preventDefault();
  }
  console.log(searchData);

  useEffect(() => {
    const searchFunction = async () => {
      try {
        const response = await axios.post(`${burl}/api/blog/search`, {
          searchData
        }, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
        );
        auth.setSearchBlog(response.data.results);
        console.log(auth.searchBlog);
        
      } catch (error) {
        console.error('Error searching:', error.response ? error.response.data : error.message);
      }
    }
    const debounceTimer = setTimeout(() => {
      searchFunction();
    }, 500); 

    return () => clearTimeout(debounceTimer);
    
  }, [searchData])


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
            <form onSubmit={onsubmitform}>
              <input
                name="searchData"
                value={searchData}
                placeholder="Search"
                onChange={(e) => setSearchData(e.target.value)}
                type="text"
              />
            </form>
          </div>

          {(!auth.isAuth) ? <Link to={"/register"} className="navitem">
            <h3>Register</h3>
          </Link> : <h3></h3>}

          {(auth.isAuth) ? <Link to={"/profile"} className="navitem">
            <h3>Profile</h3>
          </Link> : <h3></h3>}

          {(!auth.isAuth) ? <Link to={"/login"} className="navitem">
            <h3>Login</h3>
          </Link> : <h3></h3>}
        </div>
      </div>
    </>
  );
};

export default Navber;
