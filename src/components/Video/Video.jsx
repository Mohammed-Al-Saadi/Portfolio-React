import React, { useEffect, useState } from "react";
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
  autoOpen = false,
}) => {
  const [openVideo, setOpenVideo] = useState(false);

  const showBoxes =
    keyFeatures.length > 0 || challenges.length > 0 || solutions.length > 0;
  useEffect(() => {
    if (!autoOpen) {
      setOpenVideo(false);
    }
  }, [autoOpen]);
  useEffect(() => {
    if (autoOpen === true && videoUrl) {
      setOpenVideo(true);
    }
  }, [autoOpen, videoUrl]);

  useEffect(() => {
    if (!openVideo) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [openVideo]);

  return (
    <section className="vp-card">
      <div className="vp-grid">
        {/* Content */}
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
          {(links.length > 0 || videoUrl) && (
            <div className="vp-links vp-actions">
              {links.map(({ label, url }) => (
                <a
                  key={url || label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vp-link"
                >
                  {label}
                </a>
              ))}

              {videoUrl && (
                <button
                  type="button"
                  className="vp-watchBtn"
                  onClick={() => setOpenVideo(true)}
                >
                  <span className="vp-watchIcon" aria-hidden="true">
                    ▶
                  </span>
                  Watch Video
                </button>
              )}
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
      </div>

      {openVideo && (
        <div
          className="vp-modalOverlay"
          onClick={() => setOpenVideo(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="vp-modal" onClick={(e) => e.stopPropagation()}>
            <video className="vp-modalVideo" controls autoPlay>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoPlayer;
