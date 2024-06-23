import React from "react";
import "../styles/Login.css";
import { CheckBoxOutlineBlank, CheckBox, Password } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

export default function Login() {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [showPass, setShowPass] = useState(false);
  let [cbox, setcbox] = useState(false);
  let navigate = useNavigate();
  let [cookie, setcookie, removecookie] = useCookies();

  function setCookie(response) {
    let now = new Date();
    setcookie("user-details", JSON.stringify(response.data), {
      expires: new Date(now.setDate(now.getDate() + 7)),
    });
  }

  async function handleLogin() {
    let data = {
      email: email,
      password: pass,
    };

    try {
      let response = await axios.post(
        "http://localhost:8080/api/auth/login",
        data
      );

      setCookie(response);
      navigate("/home");
    } catch (err) {
      console.log(err);
      alert("Invalid email or password!!");
    }
  }

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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="pass-container">
              <input
                placeholder="Password"
                className="pass-login"
                type={showPass === false ? "password" : "text"}
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />

              {showPass === true ? (
                <div
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                >
                  <VisibilityOff className="visiblity-login" />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                >
                  <Visibility className="visiblity-login" />
                </div>
              )}
            </div>
            <button onClick={handleLogin} className="signin-btn">
              Sign In
            </button>
            <div className="rem-help" onClick={() => setcbox(!cbox)}>
              <div className="rem-me">
                {cbox === false ? <CheckBoxOutlineBlank /> : <CheckBox />}
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
