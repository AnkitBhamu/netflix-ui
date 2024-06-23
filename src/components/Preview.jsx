import React from "react";
import "../styles/Preview.css";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

let preview_content = {};

export default function (props) {
  // get data from the back-end  for preview and list
  let navigate = useNavigate();
  let [data_loaded, setDataloaded] = useState(false);

  function playvideo() {
    navigate("/player", { state: { link: preview_content.video } });
  }
  function get_data() {
    preview_content = axios
      .get("http://localhost:8080/api/movies/preview/" + props.type)
      .then((response) => {
        preview_content = response.data;
        setDataloaded(true);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    get_data();
  }, [props.type]);

  return (
    <div className="featured-container">
      <div className="content-type">
        {props.type && props.type === "series" ? "Series" : "Movies"}
      </div>
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
          <div className="pi-btns" onClick={playvideo}>
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
