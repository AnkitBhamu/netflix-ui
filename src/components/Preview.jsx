import React from "react";
import "../styles/Preview.css";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

let preview_content = {};

export default function Preview(props) {
  let [cookie, setcookie, removecookie] = useCookies();
  let navigate = useNavigate();
  let [data_loaded, setDataloaded] = useState(false);

  function playvideo() {
    navigate("/player", {
      state: { name: preview_content.name, link: preview_content.video },
    });
  }
  function get_data() {
    preview_content = axios
      .get(
        process.env.REACT_APP_API_URL + "/api/movies/preview/" + props.type,
        { headers: { Authorization: `Bearer ${cookie["user-details"].token}` } }
      )
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
      <img
        src={preview_content.cover_img ? preview_content.cover_img : ""}
        alt=""
        className="movie-image"
      />
      <div className="movie-info">
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
