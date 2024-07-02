import React, { lazy, useEffect, useState } from "react";
import "../styles/Account.css";
import Profile from "../images/Netflix-avatar.png";
import { Edit } from "@mui/icons-material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router";

// remaining thing is to update and send the final data to the user.
export default function Account() {
  let [showPass, setShowPass] = useState("password");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [uid, setuid] = useState("");
  let [cookies, setcookie, removecookie] = useCookies();
  let navigate = useNavigate();

  function setCookie(response) {
    let now = new Date();
    setcookie("user-details", JSON.stringify(response.data), {
      expires: new Date(now.setDate(now.getDate() + 7)),
    });
  }

  async function updateprofile() {
    let data = {
      email: email,
      password: pass,
      name: username,
      id: uid,
    };

    try {
      let response = await axios.post(
        process.env.REACT_APP_API_URL + "/api/users/update",
        data,
        {
          headers: { Authorization: `Bearer ${cookies["user-details"].token}` },
        }
      );

      // update the cookie so that latest data can be used evert time
      setCookie(response);
      alert("Profile updated successfully!!");
    } catch (err) {
      alert("Profile updating failed!!");
    }
  }

  async function getUserData() {
    let user_cookie = cookies["user-details"];

    if (user_cookie) {
      try {
        let response = await axios.get(
          process.env.REACT_APP_API_URL +
            `/api/users/getUser/${user_cookie._id}`,
          {
            headers: {
              Authorization: `Bearer ${cookies["user-details"].token}`,
            },
          }
        );

        setUsername(response.data.name);
        setEmail(response.data.email);
        setPass(response.data.password);
        setuid(response.data._id);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please sign in again!!");
      navigate("/login");
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="accounts-main">
      <div className="accounts-header">
        <div className="acc-left-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            className="logo-account"
            alt=""
          />
        </div>
      </div>
      <div className="account-content">
        <div className="account-text">Edit Account</div>
        <div className="border-line"></div>
        <div className="account-profile-container">
          <div className="account-left">
            <img src={Profile} className="account-profile-pic" />
            <Edit
              style={{ height: "15px", width: "15px" }}
              className="p-edit-icon"
            />
          </div>

          <div className="profile-details">
            <input
              className="input-fields"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              className="input-fields"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="password-container">
              <input
                className="input-fields"
                type={showPass}
                placeholder="Password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              {showPass === "password" ? (
                <div
                  className="show-pass-vis-account"
                  onClick={() => {
                    setShowPass("text");
                  }}
                >
                  <Visibility />
                </div>
              ) : (
                <div
                  className="show-pass-vis-account"
                  onClick={() => {
                    setShowPass("password");
                  }}
                >
                  <VisibilityOff />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-line"></div>
        <div className="final-btns">
          <button className="acc-btns save" onClick={() => updateprofile()}>
            Save
          </button>
          <button onClick={() => navigate(-1)} className="acc-btns cancel">
            Cancel
          </button>
          <button className="acc-btns delete">Delete Account</button>
        </div>
      </div>
    </div>
  );
}
