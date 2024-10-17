import React from "react";
import "./home.css";
import HomeContent from "../../Components/homeComponent/HomeContent";

export default function Home() {
  return (
    <div className="home-first-page">
      <div className="home-left-section">
        <div className="home-right-section">
          <HomeContent />
        </div>
      </div>
    </div>
  );
}
