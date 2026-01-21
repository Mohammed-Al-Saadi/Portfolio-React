import React from "react";
import "./HomeContent.css";
import homeContentData from "./HomeContentData.json";
import aboutData from "./HomeContent.json";

export default function HomeContent() {
  const handleViewProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hc-container">
      <h2 className="hc-name">{homeContentData.name}</h2>
      <h3 className="hc-role">{homeContentData.role}</h3>

      <div className="hc-status-wrap">
        <span className="hc-dot" />
        <span className="hc-current">{homeContentData.currentWork}</span>
      </div>

      <p className="hc-about">{aboutData.description}</p>

      <button className="hc-projects-btn" onClick={handleViewProjects}>
        View Projects »
      </button>
    </div>
  );
}
