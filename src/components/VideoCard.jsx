import React from "react";
import "../styles/VideoCard.css";
import movie_banner from "../images/movie_banner.jpg";
import video from "../images/I Care a Lot _ Official Trailer _ Netflix.mp4";
import { PlayArrow, ThumbUp, ThumbDown, Add } from "@mui/icons-material";
import ua from "../images/ua.png";

export default function () {
  return (
    <div className="video-card">
      <img className="video-thumb" src={movie_banner} alt="" />
      <div className="videoInfo">
        <video src={video} autoPlay muted loop className="video"></video>
        <div className="video-actions">
          <div className="video-actions-btn">
            <PlayArrow />
          </div>
          <div className="video-actions-btn">
            <Add />
          </div>
          <div className="video-actions-btn">
            <ThumbUp />
          </div>
          <div className="video-actions-btn">
            <ThumbDown />
          </div>
        </div>
        <div className="time-rating">
          <span>1 hr 50 mins</span>
          <img className="ua-logo" src={ua} alt="" />
          <span>1999</span>
        </div>
        <div className="video-info-text">
          <div style={{ marginLeft: "10px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            illum, labore voluptatum quae officiis voluptates, fugiat eveniet
            distinctio tempore vero enim illo aspernatur expedita sapiente
            deleniti quidem quod ab sunt.
          </div>
        </div>
      </div>
    </div>
  );
}
