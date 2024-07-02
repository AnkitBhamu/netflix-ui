import React, { useState } from "react";
import "../styles/Navbar.css";
import { Search, Notifications, ArrowDropDown } from "@mui/icons-material";
import profile_pic from "../images/Netflix-avatar.png";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

export default function Navbar(props) {
  let [pselected, setp] = useState(false);
  let navigate = useNavigate();
  let [cookie, setcookie, removecookie] = useCookies();

  window.addEventListener("scroll", () => {
    let element = document.querySelector(".header");
    if (element === null) return;
    if (window.scrollY > 0) {
      element.style.backgroundColor = "black";
    } else element.style.backgroundColor = "";
  });

  return (
    <div className="header">
      <div className="left">
        <div className="menu-btn">
          <Menu />
        </div>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="error"
        />
      </div>

      <div className="middle">
        <div
          className="links"
          onClick={() => {
            window.scrollTo(0, 0);
            props.setType ? props.setType("series") : navigate("/home");
          }}
        >
          Series
        </div>
        <div
          className="links"
          onClick={() => {
            window.scrollTo(0, 0);
            props.setType ? props.setType("movies") : navigate("/home");
          }}
        >
          Homepage
        </div>
        <div
          className="links"
          onClick={() => {
            window.scrollTo(0, 0);
            props.setType ? props.setType("movies") : navigate("/home");
          }}
        >
          Movies
        </div>
        {/* <div className="links">New and popular</div> */}
        <div className="links" onClick={() => navigate("/mylist")}>
          My list
        </div>
      </div>

      <div className="right">
        <div className="right-container">
          <div className="header-icons">
            <Search />
          </div>
          <div className="header-icons">
            <Notifications />
          </div>
          <img src={profile_pic} alt="" className="profile-pic" />
          <div
            className="profile_show"
            onClick={() => {
              setp(!pselected);
            }}
            onMouseLeave={() => setp(false)}
          >
            <ArrowDropDown className="header-icons" />
            {pselected === true ? (
              <div className="profile-container">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/editAccount", { replace: false });
                  }}
                >
                  Account
                </div>
                <div
                  onClick={() => {
                    removecookie("user-details");
                    navigate("/login");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
