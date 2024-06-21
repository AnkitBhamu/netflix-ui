import React, { useEffect } from "react";
import "../styles/Login.css";
import { CheckBox } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Login() {
  return (
    <div className="login-main">
      <div className="login-header">
        <div className="left-login">
          <img
            className="logo-login"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="error"
          />
        </div>
      </div>
      <div className="form-container">
        <div className="login-details">
          <div className="form-login">
            <div className="signin-text">Sign In</div>
            <input
              className="email-login"
              placeholder="Email or phone number"
              type="text"
            />
            <input
              placeholder="Password"
              className="pass-login"
              type="password"
            />

            <button className="signin-btn">Sign In</button>
            <div className="rem-help">
              <div className="rem-me">
                <CheckBox />
                Remember me
              </div>
              <div>Need Help?</div>
            </div>

            <div className="info">
              <div>
                New to Netflix?{" "}
                <strong>
                  {" "}
                  <Link to="/register"> Sign up now</Link>
                </strong>
                <br />
                <br />
                <br />
              </div>
              <div>
                This page is protected by Google reCAPTCHA to ensure you are not
                a bot. <a href="">Learn more.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
