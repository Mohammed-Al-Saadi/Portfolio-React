import React from "react";
import "./home.css";
import HomeContent from "../../Components/homeComponent/HomeContent";
import HomeImage from "../../assets/images/profile.webp";
import { MdDownloading } from "react-icons/md";
import { downloadFile } from "../../Components/homeComponent/downloadUtils";
import homeContentData from "../../Components/homeComponent/HomeContentData.json";
import Footer from "../../Components/socialMediaComponent/social_media";
export default function Home() {
  const onButtonClick = () => downloadFile(homeContentData.resumeFileName);

  return (
    <div className="home-page">
      <div className="home-profile-image">
        <img alt="" src={HomeImage} />
      </div>
      <div className="">
        <HomeContent />
      </div>
      <div className="home-actions">
        <button className="hc-resume-btn" onClick={onButtonClick}>
          <MdDownloading className="hc-icon" />
          <span>Resume</span>
        </button>
        <Footer />
      </div>
    </div>
  );
}
