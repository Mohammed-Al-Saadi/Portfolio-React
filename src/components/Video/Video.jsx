import React from "react";
import "./video.css";

const VideoPlayer = ({
  videoUrl,
  imgUrl,
  text,
  tech = [],
  links = [],
  keyFeatures = [],
  challenges = [],
  solutions = [],
}) => {
  const showBoxes =
    keyFeatures.length > 0 || challenges.length > 0 || solutions.length > 0;

  return (
    <section className="vp-card">
      <div className="vp-grid">
        <div>
          <h3 className="vp-title">Technologies Used</h3>

          {tech.length > 0 && (
            <div className="vp-tech">
              {tech.map((item) => (
                <span key={item} className="vp-badge">
                  {item}
                </span>
              ))}
            </div>
          )}

          {links.length > 0 && (
            <div className="vp-links">
              {links.map(({ label, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vp-link"
                >
                  {label}
                </a>
              ))}
            </div>
          )}

          {text && <p className="vp-text">{text}</p>}

          {showBoxes && (
            <div className="vp-boxGrid">
              {keyFeatures.length > 0 && (
                <div className="vp-box">
                  <h4>Key Features</h4>
                  <ul>
                    {keyFeatures.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {challenges.length > 0 && (
                <div className="vp-box">
                  <h4>Challenges</h4>
                  <ul>
                    {challenges.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {solutions.length > 0 && (
                <div className="vp-box">
                  <h4>Solutions</h4>
                  <ul>
                    {solutions.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {(videoUrl || imgUrl) && (
          <div className="vp-media">
            <div className="vp-mediaFrame">
              {videoUrl ? (
                <video className="vp-video" controls>
                  <source src={videoUrl} type="video/mp4" />
                </video>
              ) : imgUrl ? null : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoPlayer;
