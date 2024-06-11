import React from "react";
import "../styles/Preview.css";
import movie_image from "../images/movie_image.png";
import m_title from "../images/movie_title.jpg";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";

export default function () {
  return (
    <div className="featured-container">
      <img src={movie_image} alt="" className="movie-image" />
      <div className="movie-info">
        <img src={m_title} alt="" className="movie-title" />
        <div className="desc-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          temporibus sapiente in ratione aspernatur. Mollitia odio placeat unde
          consequuntur rem non consectetur. Voluptas reiciendis neque
          consectetur quas repudiandae earum animi!
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
