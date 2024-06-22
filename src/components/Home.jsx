import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Preview from "./Preview";
import ContentList from "./ContentList";
import axios from "axios";
import "../styles/Home.css";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

export default function Home() {
  let [cookie, setcookie, removecookie] = useCookies();
  let [list_data, setList] = useState([]);
  let navigate = useNavigate();

  function checkUserLogged() {
    let item = cookie["user-details"];
    if (!item) {
      navigate("/login");
    }
  }

  useEffect(checkUserLogged, []);

  function get_data() {
    axios
      .get("http://127.0.0.1:8080/api/movies/listsAll")
      .then((response) => {
        setList(response.data.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    get_data();
  }, []);

  return (
    <div>
      <Navbar />
      <Preview />
      <div className="content">
        {list_data.map((item, index) => (
          <ContentList key={index} list_data={item} />
        ))}

        <div className="footer">
          <img
            style={{ height: "25px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          ></img>
        </div>
      </div>
      {/* <VideoPlayer /> */}
    </div>
  );
}
