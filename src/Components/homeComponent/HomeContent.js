import React from "react";
import "./HomeContent.css";
import SocialMedia from "../socialMediaComponent/social_media";
import { MdDownloading } from "react-icons/md";
import homeContentData from "./HomeContentData.json";
import { downloadFile } from "./downloadUtils"; // Import the utility function

export default function HomeContent() {
  const onButtonClick = () => {
    downloadFile(homeContentData.resumeFileName);
  };

  return (
    <div className="home-content-container">
      <div className="home-header">
        <h2>
          <span className="home-highlight">{homeContentData.name}</span>
        </h2>
        <h3 className="home-developer-role">{homeContentData.role}</h3>
        <label className="home-current-work">
          {homeContentData.currentWork}
        </label>
        <div className="home-contact-links">
          <div className="home-resume-link" onClick={onButtonClick}>
            Resume <MdDownloading />
          </div>
          <div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}
