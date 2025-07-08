import React from "react";
import "./HomeContent.css";
import homeContentData from "./HomeContentData.json";
import aboutData from "./AboutData.json";

export default function HomeContent() {
  return (
    <div className="hc-container">
      <h2 className="hc-name">{homeContentData.name}</h2>
      <h3 className="hc-role">{homeContentData.role}</h3>
      <span className="hc-current">{homeContentData.currentWork}</span>
      <p className="hc-about">{aboutData.description}</p>
    </div>
  );
}
