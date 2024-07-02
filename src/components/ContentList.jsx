import React, { useEffect, useMemo } from "react";
import "../styles/ContentList.css";
import VideoCard from "./VideoCard";
import { useState } from "react";
import axios from "axios";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function ContentList(props) {
  let [m_data, setMdata] = useState([]);
  let [videosHovered, setHovered] = useState(false);
  let [translate, setTranslate] = useState(0);
  let [index_range, setrange] = useState([
    0,
    Math.ceil(window.innerWidth / props.width),
  ]);

  // important function
  useEffect(() => {
    setrange([0, Math.ceil(window.innerWidth / props.width)]);
    setMdata([]);
  }, [props.range]);

  useEffect(() => {
    getMovies(
      props.list_data.content.slice(
        index_range[0],
        Math.min(index_range[1], props.list_data.content.length)
      )
    );
  }, [index_range]);

  let dummy_cards = [];
  for (let i = 0; i < Math.ceil(window.innerWidth / props.width); i++) {
    dummy_cards.push(1);
  }

  async function getMovies(l_data) {
    let final_data = await Promise.all(
      l_data.map((item) =>
        axios
          .get(process.env.REACT_APP_API_URL + "/api/movies/moviebyId/" + item)
          .then((response) => response.data)
          .catch((err) => console.log(err))
      )
    );
    setMdata(final_data);
    // setTimeout(() => setMdata(final_data), 2000);
  }

  return (
    <div
      className="content-list-main"
      style={{ height: `${props.width / 0.66 + 10}px` }}
    >
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
              style={{ height: `${props.width / 0.66 + 5}px` }}
              onClick={() => {
                setrange([
                  Math.max(
                    index_range[0] - Math.ceil(window.innerWidth / props.width),
                    0
                  ),
                  Math.max(
                    index_range[1] - Math.ceil(window.innerWidth / props.width),
                    Math.ceil(window.innerWidth / props.width)
                  ),
                ]);
                setMdata([]);
              }}
            >
              <ArrowBackIos style={{ width: "20px", height: "20px" }} />
            </div>

            <div
              className="navigation-bars-fwd"
              style={{ height: `${props.width / 0.66 + 7}px` }}
              onClick={() => {
                if (
                  index_range[0] <
                    props.list_data.content.length -
                      Math.ceil(window.innerWidth / props.width) &&
                  index_range[1] < props.list_data.content.length
                ) {
                  setrange([
                    index_range[1],
                    index_range[1] + Math.ceil(window.innerWidth / props.width),
                  ]);
                  setMdata([]);
                }
              }}
            >
              <ArrowForwardIos style={{ width: "20px", height: "20px" }} />
            </div>
          </>
        ) : null}

        <div className="videos">
          {m_data.length > 0
            ? m_data.map((item, index) => (
                <VideoCard
                  class={"video-card"}
                  translate={translate}
                  key={index}
                  videodata={item}
                  thumb_width={props.width}
                />
              ))
            : dummy_cards.map((item, index) => (
                <VideoCard
                  class={"video-card"}
                  translate={translate}
                  key={index}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
