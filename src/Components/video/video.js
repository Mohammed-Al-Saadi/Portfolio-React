import React from "react";
import "./video.css";

const VideoPlayer = ({ videoUrl, imgUrl, text, p, tech }) => {
  return (
    <div className="description">
      <div className="videoplayer_description">
        <h4>Technologies Used:</h4>
        <div className="tech-container">
          {tech.map((item, index) => (
            <span key={index} className="tech-badge">
              {item}
            </span>
          ))}
        </div>
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
