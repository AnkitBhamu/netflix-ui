import React, { useState } from "react";
import "../styles/Account.css";
import Profile from "../images/WhatsApp Image 2023-11-19 at 13.19.34_086dd31e Cropped.jpg";
import { Edit } from "@mui/icons-material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// remaining thing is to update and send the final data to the user.
export default function Account() {
  let [showPass, setShowPass] = useState("password");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  return (
    <div className="accounts-main">
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
          <button className="acc-btns save">Save</button>
          <button className="acc-btns cancel">Cancel</button>
          <button className="acc-btns delete">Delete Account</button>
        </div>
      </div>
    </div>
  );
}
