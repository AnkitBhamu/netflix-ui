import "../styles/Crew.css";
import no_image from "../Assets/no_image.png";

import React from "react";

export default function Crew(props) {
  return (
    <div className="crew-main">
      <div className="crew-title">CREW</div>
      <div className="crew-list">
        {props.crew &&
          props.crew.map((item, index) => (
            <div className="crew-card">
              <img
                className="crew-image"
                onError={(e) => (e.target.attributes["src"].value = no_image)}
                src={item.profile_pic}
                alt=""
              />
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
              <img
                className="crew-image"
                onError={(e) => (e.target.attributes["src"].value = no_image)}
                src={item.profile_pic}
                alt=""
              />
              <div className="crew-name">{item.original_name}</div>
              <div className="crew-work">{item.character}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
