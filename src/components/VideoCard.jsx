import React, { useState } from "react";
import "../styles/VideoCard.css";
import { PlayArrow, ThumbUp, ThumbDown, Add, Done } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Info } from "@mui/icons-material";
import CardSuspense from "./CardSuspense";

export default function VideoCard(props) {
  let [added, listadd] = useState(props.cardType === "mylist" ? true : false);
  let [cookies, setcookie, removecookie] = useCookies();
  let [itrue, setinfo] = useState(false);
  console.log("video card width is : ", props.thumb_width);

  async function updatemylist(mid) {
    try {
      let response = await axios.post(
        process.env.REACT_APP_API_URL +
          `/api/users/updateMyList/${cookies["user-details"]._id}`,
        { mid: mid, mode: added === false ? "add" : "remove" }
      );
    } catch (err) {
      console.log(err);
    }
  }

  let navigate = useNavigate();

  function renderVideoInfo() {
    return (
      <div className="videoInfo">
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
          <div
            onClick={() => {
              updatemylist(props.videodata._id);
              // if this is my list then only option must be of removing from the list so dont add to database.
              if (props.mylistrender) {
                console.log("got the parent updater fn");
                props.mylistrender(!props.parentrenderstatus);
              } else listadd(!added);
            }}
            className="video-actions-btn"
          >
            {added === true ? <Done /> : <Add />}
          </div>
          <div className="video-actions-btn">
            <ThumbUp />
          </div>
          <div className="video-actions-btn">
            <ThumbDown />
          </div>

          <div className="more-opt">
            <div
              onClick={() => setinfo(!itrue)}
              onMouseLeave={() => setinfo(false)}
              className="more-info"
            >
              <Info />
            </div>
          </div>
        </div>
        <div className="time-rating">
          <span>{props.videodata.name}</span>
        </div>
        <div className="time-rating">
          <span>{props.videodata.duration}</span>
          <span className="ua-logo">+{props.videodata.age_limit}</span>
          <span>{props.videodata.year}</span>
        </div>

        {itrue === true ? (
          <div className="video-info-text">
            <div style={{ marginLeft: "10px" }}>{props.videodata.desc}</div>
          </div>
        ) : null}
      </div>
    );
  }

  function playvideo(link) {
    navigate("/player", { state: { name: props.videodata.name, link: link } });
  }

  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
        navigate("/selected", { state: props.videodata });
      }}
      className={[props.class]}
      style={{
        transform: `translateX(${props.translate}px)`,
        // height: itrue === true ? "400px" : "",
        width: props.thumb_width ? `${props.thumb_width}px` : "",
        height: props.thumb_width ? `${props.thumb_width / 0.66}px` : "",
      }}
    >
      {props.videodata ? (
        <img
          loading="lazy"
          className="video-thumb"
          src={props.videodata.thumb_img}
          alt=""
        />
      ) : null}

      {/* {props.videodata && hovered === true ? renderVideoInfo() : null} */}

      {!props.videodata ? <CardSuspense /> : null}
    </div>
  );
}
