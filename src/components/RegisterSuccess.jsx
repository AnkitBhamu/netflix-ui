import React from "react";
import "../styles/RegisterSuccess.css";
import DoneIcon from "@mui/icons-material/Done";
import { Link } from "react-router-dom";

export default function RegisterSuccess() {
  return (
    <div className="reg-success-main">
      <div className="reg-success-content">
        <div className="done-container">
          <DoneIcon style={{ width: "60px", height: "60px" }} />
        </div>
        <div>You have Registered Successfully!</div>
        <div>
          Go to
          <Link to="/home" replace={true}>
            Home Page
          </Link>
        </div>
        <div>
          Go to
          <Link to="/login" replace={true}>
            Login Page
          </Link>
        </div>
      </div>
    </div>
  );
}
