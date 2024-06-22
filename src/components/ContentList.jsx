import React, { useEffect } from "react";
import "../styles/ContentList.css";
import VideoCard from "./VideoCard";
import { useState } from "react";
import axios from "axios";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function ContentList(props) {
  let [m_data, setMdata] = useState([]);
  let [videosHovered, setHovered] = useState(false);
  let [translate, setTranslate] = useState(0);

  async function getMovies(l_data) {
    let final_data = await Promise.all(
      l_data.map((item) =>
        axios
          .get("http://127.0.0.1:8080/api/movies/moviebyId/" + item)
          .then((response) => response.data)
          .catch((err) => console.log(err))
      )
    );
    setMdata(final_data);
  }

  useEffect(() => {
    getMovies(props.list_data.content);
  }, []);

  return (
    <div className="content-list-main">
      <div className="list-name">{props.list_data.name}</div>
      <div
        className="non-scroll-wrapper"
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        {videosHovered === true ? (
          <>
            <div
              className="navigation-bars-bck"
              onClick={() => {
                if (translate != 0) {
                  setTranslate(translate + 242);
                }
              }}
            >
              <ArrowBackIos style={{ width: "20px", height: "20px" }} />
            </div>

            <div
              className="navigation-bars-fwd"
              onClick={() => {
                if (
                  Math.abs(translate) <=
                  document.querySelector(".videos").getBoundingClientRect()
                    .width -
                    window.innerWidth
                ) {
                  setTranslate(translate - 242);
                }
              }}
            >
              <ArrowForwardIos style={{ width: "20px", height: "20px" }} />
            </div>
          </>
        ) : null}

        <div className="videos">
          {m_data.map((item, index) => (
            <VideoCard
              class={"video-card"}
              translate={translate}
              key={index}
              videodata={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
