import React from "react";
import "./home.css";
import HomeContent from "../../components/HomeContent/HomeContent.jsx";
import HomeImage from "../../assets/images/profile.webp";
import { MdDownloading } from "react-icons/md";
import { downloadFile } from "../../utils/downloadUtils.js";
import homeContentData from "../../components/HomeContent/HomeContentData.json";
import SocialMedia from "../../components/SocialMedia/SocialMedia.jsx";
export default function Home() {
  return (
    <div className="home-page">
      <div className="home-profile-image">
        <img alt="" src={HomeImage} />
      </div>
      <div className="">
        <HomeContent />
      </div>
      <div className="home-actions">
        {" "}
        <SocialMedia />
      </div>
    </div>
  );
}
