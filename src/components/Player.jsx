import React, { useState } from "react";
import "../styles/Player.css";
import volume from "../Assets/volume-2.png";
import settings from "../Assets/settings.png";
import pinp from "../Assets/ri_picture-in-picture-2-fill.png";
import fscreen from "../Assets/Full screen.png";
import {
  ArrowBackIos,
  FastForwardOutlined,
  FastRewindOutlined,
  PlayArrowOutlined,
  Pause,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

export default function Player() {
  let vid_info = useLocation();
  let navigate = useNavigate();

  let [playbtn, setplay] = useState(false);
  let [duration, setduration] = useState("");
  let [playedduration, setplayedduration] = useState("00:00:00");
  let [progresswidth, setprogresswidth] = useState(0);
  let [settingsclicked, setsettingsclicked] = useState(false);

  function render_settings() {
    return (
      <div className="settings-container">
        <div className="settings-title">
          <div>Audio</div>
          <div>Subtitle</div>
          <div>Quality</div>
        </div>
      </div>
    );
  }

  function handlePlay() {
    let element = document.querySelector(".video-player");

    if (playbtn) {
      element.pause();
    } else {
      element.play();
    }

    setplay(!playbtn);
  }

  function updateduration() {
    let element = document.querySelector(".video-player");
    let vid_duration = element.duration;
    let dobj = new Date(vid_duration * 1000);
    let hrs = dobj.getUTCHours();
    let mins = dobj.getUTCMinutes();
    let secs = dobj.getUTCSeconds();

    let string =
      hrs.toString().padStart(2, "0") +
      ":" +
      mins.toString().padStart(2, "0") +
      ":" +
      secs.toString().padStart(2, "0");

    setduration(string);
  }

  function handleplaying() {
    let element = document.querySelector(".video-player");
    let vid_duration = element.currentTime;
    let width = (element.currentTime / element.duration) * 100;
    let dobj = new Date(vid_duration * 1000);
    let hrs = dobj.getUTCHours();
    let mins = dobj.getUTCMinutes();
    let secs = dobj.getUTCSeconds();

    let string =
      hrs.toString().padStart(2, "0") +
      ":" +
      mins.toString().padStart(2, "0") +
      ":" +
      secs.toString().padStart(2, "0");

    setplayedduration(string);
    setprogresswidth(width);
  }

  function handlefullscreen() {
    let element = document.querySelector(".video-player");
    element.requestFullscreen();
  }

  function handlepip() {
    let element = document.querySelector(".video-player");
    element.requestPictureInPicture();
  }

  function handlenavigation(type) {
    let element = document.querySelector(".video-player");
    if (type === "fwd") {
      element.currentTime += 10;

      if (element.currentTime > element.duration) {
        element.currentTime = element.duration;
      }
    } else {
      element.currentTime -= 10;
      if (element.currentTime < 0) {
        element.currentTime = 0;
      }
    }
  }

  return (
    <div className="player-main">
      <video
        onDurationChange={() => updateduration()}
        onTimeUpdate={() => handleplaying()}
        className="video-player"
        src={vid_info.state.link}
      ></video>
      <div className="player-header">
        <div onClick={() => navigate(-1)}>
          <ArrowBackIos style={{ cursor: "pointer" }} />
        </div>
        <div className="video-name">{vid_info.state.name}</div>
      </div>

      <div className="controls">
        <div className="progress-bar">
          <div
            className="progress-done"
            style={{ width: `${progresswidth}%` }}
          ></div>
        </div>
        <div className="control-btns">
          <div
            className="controls-icons"
            onClick={() => handlenavigation("bck")}
          >
            <FastRewindOutlined
              className="controls-icons"
              style={{ width: "30px", height: "30px" }}
            />
          </div>

          {playbtn === false ? (
            <div onClick={() => handlePlay()} className="controls-icons">
              <PlayArrowOutlined style={{ width: "30px", height: "30px" }} />
            </div>
          ) : (
            <div onClick={() => handlePlay()} className="controls-icons">
              <Pause style={{ width: "30px", height: "30px" }} />
            </div>
          )}

          <div
            className="controls-icons"
            onClick={() => handlenavigation("fwd")}
          >
            <FastForwardOutlined style={{ width: "30px", height: "30px" }} />
          </div>

          <div className="volume-container">
            <img className="volume-icon" src={volume} alt="" />
            <div className="volume-bar"></div>
          </div>

          <div className="video-timer">
            {playedduration} / {duration}
          </div>
          <div className="settings-fscreen">
            <div className="settings-space">
              <img
                onClick={() => setsettingsclicked(!settingsclicked)}
                className="settings-icon"
                src={settings}
                alt=""
              />
              {settingsclicked === true ? render_settings() : null}
            </div>

            <img
              className="pip"
              onClick={() => handlepip()}
              src={pinp}
              alt=""
            />
            <img
              className="fscreen"
              onClick={() => handlefullscreen()}
              src={fscreen}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
