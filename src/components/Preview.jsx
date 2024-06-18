import React from "react";
import "../styles/Preview.css";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

let preview_content = {};

export default function (props) {
  // get data from the back-end  for preview and list
  let [data_loaded, setDataloaded] = useState(false);
  function get_data() {
    preview_content = axios
      .get("http://127.0.0.1:8080/api/movies/preview/movies")
      .then((response) => {
        preview_content = response.data;
        setDataloaded(true);
        // console.log("data loaded!!");
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    get_data();
  }, []);
  return (
    <div className="featured-container">
      <div className="content-type">Movies</div>
      {/* <img src={movie_image} alt="" className="movie-image" /> */}
      <img
        src={preview_content.cover_img ? preview_content.cover_img : ""}
        alt=""
        className="movie-image"
      />
      <div className="movie-info">
        {/* <img src={m_title} alt="" className="movie-title" /> */}
        <img
          src={preview_content.name_img ? preview_content.name_img : ""}
          alt=""
          className="movie-title"
        />
        <div className="desc-text">
          {preview_content.desc ? preview_content.desc : ""}
        </div>
        <div className="play-info">
          <div className="pi-btns">
            <PlayArrow />
            Play
          </div>
          <div className="pi-btns pi-btns-info">
            <InfoOutlined />
            Info
          </div>
        </div>
      </div>
    </div>
  );
}
