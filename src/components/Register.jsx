import React, { useState } from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import RegisterSuccess from "./RegisterSuccess";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let [start, setStart] = useState(false);
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [regsuccess, setRegStatus] = useState(false);
  let [showPass, setShowPass] = useState(false);
  let [userdetails, setUserDetails] = useState({});
  let navigate = useNavigate();
  let [cookie, setcookie, removecookie] = useCookies();

  function checkUserLogged() {
    let item = cookie["user-details"];
    if (item) {
      setUserDetails(item);
      navigate("/home");
    }
  }

  useEffect(checkUserLogged, []);

  function setCookie(response) {
    let now = new Date();
    document.cookie =
      "user-details=" +
      JSON.stringify(response.data) +
      "; expires=" +
      new Date(now.setDate(now.getDate() + 7)).toUTCString();
  }

  async function handleSubmit() {
    let data = {
      name: "",
      email: email,
      password: pass,
    };

    let response = await axios.post(
      process.env.REACT_APP_API_URL + "/api/auth/register",
      data
    );

    if (response.data === "UserExists!") {
      alert("User already exists!!");
      return;
    }

    setCookie(response);
    setRegStatus(true);
  }
  return (
    <div className="register-main">
      <div className="register-header">
        <div className="left-register">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            className="logo-register"
          />
        </div>
        <div className="right-register">
          <Link to="/login">
            {" "}
            <button className="signin-btn-register">Sign In</button>
          </Link>
        </div>
      </div>

      {regsuccess === true ? (
        <RegisterSuccess />
      ) : (
        <div className="register-main-container">
          <div className="register-content">
            <h1 className="basic-intro">Unlimited movies, TV shows</h1>
            <h1 className="basic-intro">and more</h1>
            <div className="register-text">Watch anywhere. Cancel anytime.</div>
            <div className="register-text">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>

            <div className="register-email">
              {start === false ? (
                <input
                  className="email-login-register"
                  placeholder="Email address"
                  type="email"
                  required={true}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              ) : (
                <>
                  <input
                    className="pass-login-register"
                    placeholder="Password"
                    type={showPass === false ? "password" : "text"}
                    required={true}
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />

                  <div
                    className="pass-visible"
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                  >
                    {showPass === true ? <VisibilityOff /> : <Visibility />}
                  </div>
                </>
              )}
              {start === false ? (
                <button
                  type="submit"
                  className="get-started"
                  onClick={() => {
                    if (document.querySelector(".email-login-register").value) {
                      setEmail(
                        document.querySelector(".email-login-register").value
                      );
                      setStart(true);
                    }
                  }}
                >
                  Get Started
                </button>
              ) : (
                <button
                  type="submit"
                  className="get-started"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Start Now
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
