import React from "react";
import "../styles/ContentList.css";
import VideoCard from "./VideoCard";

export default function ContentList(props) {
  return (
    <div className="content-list-main">
      <div className="list-name">{props.list_name}</div>
      <div className="non-scroll-wrapper">
        <div className="videos">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
}
