import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Preview from "./Preview";
import Preview2 from "./Preview2";
import ContentList from "./ContentList";
import axios from "axios";
import Footer from "./Footer";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router";

export default function Home() {
  let cookie = useCookies()[0];
  let [content_type, setcontent] = useState("movies");
  let [list_data, setList] = useState([]);

  function get_data() {
    axios
      .get(
        process.env.REACT_APP_API_URL + `/api/movies/listsAll/${content_type}`,
        { headers: { Authorization: `Bearer ${cookie["user-details"].token}` } }
      )
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
      {/* <Preview type={content_type} /> */}
      <Preview2 type={content_type} />
      <div className="content">
        {list_data.map((item, index) => (
          <ContentList key={index} list_data={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
