import React from "react";
import "../styles/ContentSelected.css";
import Navbar from "./Navbar";
import Mdetail from "./Mdetail";
import Crew from "./Crew";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

export default function ContentSelected() {
  let content_info = useLocation();
  return (
    <div className="contentselected-main">
      <Navbar />
      <Mdetail data={content_info.state} />
      <Crew cast={content_info.state.cast} crew={content_info.state.crew} />
      {/* <Footer /> */}
    </div>
  );
}
