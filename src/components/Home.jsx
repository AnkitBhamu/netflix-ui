import React from "react";
import Navbar from "./Navbar";
import Preview from "./Preview";
import ContentList from "./ContentList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Preview />
      <div className="content">
        <ContentList list_name="Continue to watch" />
        <ContentList list_name="Continue to watch" />
        <ContentList list_name="Continue to watch" />
        <ContentList list_name="Continue to watch" />
      </div>
    </div>
  );
}
