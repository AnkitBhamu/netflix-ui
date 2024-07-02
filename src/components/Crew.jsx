import "../styles/Crew.css";
import director from "../Assets/director.png";

import React from "react";

export default function Crew(props) {
  return (
    <div className="crew-main">
      <div className="crew-title">CREW</div>
      <div className="crew-list">
        {props.crew &&
          props.crew.map((item, index) => (
            <div className="crew-card">
              <img className="crew-image" src={item.profile_pic} alt="" />
              <div className="crew-name">{item.original_name}</div>
              <div className="crew-work">{item.job}</div>
            </div>
          ))}
      </div>

      <div className="crew-title">TOP CAST</div>
      <div className="crew-list">
        {props.cast &&
          props.cast.map((item, index) => (
            <div className="crew-card">
              <img className="crew-image" src={item.profile_pic} alt="" />
              <div className="crew-name">{item.original_name}</div>
              <div className="crew-work">{item.character}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
