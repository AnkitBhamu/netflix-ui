import React from "react";
import "../styles/Mdetail.css";
// import movie_logo from "../Assets/Movie logo.png";
import stars from "../Assets/stars.png";
import play from "../Assets/play.png";
import add from "../Assets/add.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Done } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";

export default function Mdetail(props) {
  let navigate = useNavigate();
  let cookies = useCookies()[0];
  let [added, listadd] = useState(false);

  async function updatemylist(mid) {
    try {
      let response = await axios.post(
        process.env.REACT_APP_API_URL +
          `/api/users/updateMyList/${cookies["user-details"]._id}`,
        { mid: mid, mode: added === false ? "add" : "remove" },
        {
          headers: { Authorization: `Bearer ${cookies["user-details"].token}` },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className="mdetail-main"
      style={{
        background: `linear-gradient(45deg, hsla(0, 0%, 0%, 0.8) 40%, hsla(0, 0%, 0%, 0.5) 50%),
    url(${props.data["cover_img"]})`,
        backgroundSize: "cover",
      }}
    >
      <div className="movie-details-container">
        <img className="movie-logo" src={props.data["name_img"]} alt="" />
        <div className="movie-ratings">
          <div className="age-cc">TV-14</div>
          <div className="age-cc">CC</div>
          <div>{props.data.genre}</div>
          <div>&middot;</div>
          <div>Sci-Fi</div>
          <div>&middot;</div>
          <div>{props.data.year}</div>
          <img className="stars" src={stars} alt="" />
        </div>
      </div>

      <div className="movie-desc">
        <div className="m-btns">
          <div
            className="play-btn"
            onClick={() =>
              navigate("/player", {
                state: { link: props.data.video, name: props.data.name },
              })
            }
          >
            <img style={{ height: "13px" }} src={play} alt="" />
            Watch
          </div>
          <div
            onClick={() =>
              navigate("/player", {
                state: { link: props.data.trailer, name: props.data.name },
              })
            }
            className="trailer-btn"
          >
            Trailer
          </div>
          <div
            className="add-btn"
            onClick={() => {
              updatemylist(props.data._id);
              listadd(!added);
            }}
          >
            {added === true ? (
              <Done />
            ) : (
              <img style={{ height: "24px" }} src={add} alt="" />
            )}
          </div>
        </div>

        <div className="author">
          <div className="author-name">By Jon Favreau</div>
          <div className="separator"></div>
          <div className="duration">{props.data.duration}</div>
        </div>

        <div className="desc-text">{props.data.desc}</div>
      </div>
    </div>
  );
}
