import React from "react";
import "../styles/footer.css";
import tmdb_logo from "../Assets/tmdb_logo.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="terms">
        <img
          style={{ height: "25px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        ></img>
        <div style={{ display: "flex", columnGap: "5px" }}>
          <a className="footer-links" href="">
            {" "}
            Terms and Privacy Notice
          </a>
          <a className="footer-links" href="">
            Send us feedback
          </a>
          <a className="footer-links" href="">
            Help
          </a>
          <div className="footer-links">
            © 1996-2024, Netflix.com, Inc. or its affiliates
          </div>
        </div>
        <div className="footer-links">
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            Powered by
            <img className="tmdb_logo" src={tmdb_logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
