import React, { useEffect, useState } from "react";
import "./homepage.css";
import axios from "axios";

const Homepage = ({ setLoginUser, user }) => {
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    axios.get("http://localhost:5000/alluser").then(async (res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="homepage">
      <h1>Logged user = {user}</h1>
      <div className="alluser">
        {data.map((data, index) => {
          return (
            <ul key={index}>
              <h3>{data.name}</h3>
              <li>{data.email}</li>
              <li>{data.password}</li>
            </ul>
          );
        })}
      </div>

      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;
