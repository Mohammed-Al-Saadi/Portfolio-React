import React from "react";
import "./video.css";

const VideoPlayer = ({ videoUrl, imgUrl, text, tech, link }) => {
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
        {link && (
          <div className="link-container">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        )}
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
