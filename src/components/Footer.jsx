import React from "react";
import "../styles/footer.css";

export default function () {
  return (
    <div className="footer">
      <img
        style={{ height: "25px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
      ></img>
      <div className="terms">
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
    </div>
  );
}
