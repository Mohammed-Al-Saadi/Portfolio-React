import React from "react";
import "./firstPage.css";
import About from "../home_content/HomeContent";
export default function FirstPage() {
  return (
    <div className="first-page">
      <div className="left-half">
        {" "}
        <div className="right-half">
          <About />
        </div>
      </div>
    </div>
  );
}
