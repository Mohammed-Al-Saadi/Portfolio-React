import React from "react";
import "./video.css";

const VideoPlayer = ({ videoUrl, imgUrl, text, tech, links }) => {
  return (
    <div className="video-description-container">
      <div className="video-description">
        <h4>Technologies Used:</h4>
        <div className="tech-list">
          {tech.map((item, index) => (
            <span key={index} className="tech-badge">
              {item}
            </span>
          ))}
        </div>

        <div className="project-links-container">
          {links &&
            links.map(({ label, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {label}
              </a>
            ))}
        </div>

        <label className="video-description-text">{text}</label>
      </div>

      {(videoUrl || imgUrl) && (
        <div>
          {videoUrl ? (
            <video className="video-content" width="300" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              className="video-content"
              src={imgUrl}
              alt="description"
              width="300"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
