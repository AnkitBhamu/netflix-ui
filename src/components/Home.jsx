import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Preview from "./Preview";
import ContentList from "./ContentList";
import axios from "axios";
import Footer from "./Footer";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router";

export default function Home() {
  let [cookie, setcookie, removecookie] = useCookies();
  let [content_type, setcontent] = useState("movies");
  let [list_data, setList] = useState([]);
  let navigate = useNavigate();

  function checkUserLogged() {
    let item = cookie["user-details"];
    if (!item) {
      navigate("/login");
    }
  }

  useEffect(checkUserLogged, [content_type]);

  function get_data() {
    axios
      .get(`http://127.0.0.1:8080/api/movies/listsAll/${content_type}`)
      .then((response) => {
        setList(response.data.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    get_data();
  }, [content_type]);

  return (
    <div>
      <Navbar setType={setcontent} />
      <Preview type={content_type} />
      <div className="content">
        {list_data.map((item, index) => (
          <ContentList key={index} list_data={item} />
        ))}
      </div>
      {/* <VideoPlayer /> */}
      <Footer />
    </div>
  );
}
