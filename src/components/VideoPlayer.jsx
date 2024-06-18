import React from "react";
import "../styles/VideoPlayer.css";
import { ArrowBack } from "@mui/icons-material";
import { Fullscreen } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

export default function VideoPlayer(props) {
  let params = useLocation();
  let navigate = useNavigate();
  function goBack(event) {
    navigate("/", { replace: "true" });
  }
  return (
    <div className="player-main">
      <div className="player-header">
        <div className="player-left" onClick={goBack}>
          <ArrowBack />
        </div>
        <div className="video-name">{params.state.name}</div>
        <div className="player-right">
          <div className="fscreen">
            <Fullscreen />
          </div>
        </div>
      </div>
      <video
        controls
        className="main-video-player"
        src={params.state.link}
      ></video>
    </div>
  );
}
