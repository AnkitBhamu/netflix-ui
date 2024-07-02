import React from "react";
import "../styles/Preview.css";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

export default function Preview2(props) {
  let cookie = useCookies()[0];
  let navigate = useNavigate();
  let [data_loaded, setDataloaded] = useState(false);
  let [curr_idx, setidx] = useState(0);
  let [preview_content, setcontent] = useState([]);

  if (data_loaded) {
    setTimeout(() => {
      setidx((curr_idx + 1) % 3);
    }, 15000);
  }

  function playvideo() {
    navigate("/player", {
      state: { name: preview_content.name, link: preview_content.video },
    });
  }
  function get_data() {
    axios
      .get(
        process.env.REACT_APP_API_URL + "/api/movies/preview2/" + props.type,
        { headers: { Authorization: `Bearer ${cookie["user-details"].token}` } }
      )
      .then((response) => {
        setcontent(response.data);
        setDataloaded(true);
      })
      .catch((err) => setcontent([]));
  }

  useEffect(() => {
    get_data();
  }, [props.type]);

  return (
    <div className="non-wrapper">
      <div className="content-type">
        {props.type && props.type === "series" ? "Series" : "Movies"}
      </div>
      <div
        style={{ transform: `translate(${-100 * curr_idx}vw)` }}
        className="slider-wrapper"
      >
        {data_loaded === true && preview_content
          ? preview_content.map((item, index) => (
              <div className="featured-container">
                <img
                  src={
                    preview_content[curr_idx]
                      ? preview_content[curr_idx].cover_img
                      : ""
                  }
                  alt=""
                  className="movie-image"
                />
                <div className="movie-info">
                  <img
                    src={
                      preview_content[curr_idx]
                        ? preview_content[curr_idx].name_img
                        : ""
                    }
                    alt=""
                    className="movie-title"
                  />
                  <div className="desc-text">
                    {preview_content[curr_idx]
                      ? preview_content[curr_idx].desc
                      : ""}
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
            ))
          : null}
      </div>
      <div className="round-ticks">
        <div
          className="ticks"
          style={curr_idx === 0 ? { backgroundColor: "red" } : null}
        ></div>
        <div
          style={curr_idx === 1 ? { backgroundColor: "red" } : null}
          className="ticks"
        ></div>
        <div
          style={curr_idx === 2 ? { backgroundColor: "red" } : null}
          className="ticks"
        ></div>
      </div>
    </div>
  );
}
