import React from "react";
import "../styles/VideoCard.css";
import { PlayArrow, ThumbUp, ThumbDown, Add } from "@mui/icons-material";
import ua from "../images/ua.png";
import { useNavigate } from "react-router-dom";

export default function VideoCard(props) {
  let navigate = useNavigate();
  function playvideo(link) {
    console.log("link is : ", link);
    navigate("/player", { state: { name: props.videodata.name, link: link } });
  }
  return (
    <div
      className="video-card"
      style={{ transform: `translateX(${props.translate}px)` }}
    >
      {/* <img className="video-thumb" src={movie_banner} alt="" /> */}
      <img className="video-thumb" src={props.videodata.thumb_img} alt="" />
      <div className="videoInfo">
        {/* <video src={video} autoPlay muted loop className="video"></video> */}
        <video
          src={props.videodata.trailer}
          autoPlay
          muted
          loop
          className="video"
        ></video>
        <div className="video-actions">
          <div
            className="video-actions-btn"
            onClick={() => playvideo(props.videodata.video)}
          >
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
          {/* <span>1 hr 50 mins</span> */}
          <span>{props.videodata.name}</span>
        </div>
        <div className="time-rating">
          {/* <span>1 hr 50 mins</span> */}
          <span>{props.videodata.duration}</span>
          <span className="ua-logo">+{props.videodata.age_limit}</span>
          <span>{props.videodata.year}</span>
        </div>
        <div className="video-info-text">
          <div style={{ marginLeft: "10px" }}>{props.videodata.desc}</div>
        </div>
      </div>
    </div>
  );
}
