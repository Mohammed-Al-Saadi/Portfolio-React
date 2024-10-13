import React from "react";
import "./video.css";

const VideoPlayer = ({ videoUrl, imgUrl, text, p }) => {
  return (
    <div className="description">
      <div className="videoplayer_description">
        <label>{text}</label>
      </div>
      {videoUrl ? (
        <video className="mm" width="300" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="mm" src={imgUrl} alt="description" width="300" />
      )}
    </div>
  );
};

export default VideoPlayer;
