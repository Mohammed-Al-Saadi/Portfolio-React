// Card.js
import React from "react";
import "./card.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Card = ({
  imageUrl,
  title,
  content,
  tech = [],
  links = [],
  videoUrl,
  onReadMore,
}) => {
  const MAX_TECH = 4;
  const visibleTech = tech.slice(0, MAX_TECH);
  const extraCount = tech.length - visibleTech.length;

  const isPrivateLink = (link) =>
    !link?.url ||
    link.url.trim() === "" ||
    link.label?.toLowerCase() === "private";

  const openLink = (e, link) => {
    e.stopPropagation();
    if (isPrivateLink(link)) return;
    window.open(link.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card">
      <div className="card_img_wrap">
        <img src={imageUrl} alt={title} />

        {(links.length > 0 || videoUrl) && (
          <div className="img_links">
            {links.map((link) => {
              const disabled = isPrivateLink(link);

              return (
                <button
                  key={link.label + (link.url || "")}
                  type="button"
                  className={`img_link_btn ${disabled ? "is_disabled" : ""}`}
                  onClick={(e) => openLink(e, link)}
                  disabled={disabled}
                  aria-disabled={disabled}
                  title={disabled ? "Private repository" : link.label}
                >
                  {link.label?.toLowerCase().includes("live") ? (
                    <FaGlobe size={16} />
                  ) : link.label?.toLowerCase().includes("code") ||
                    link.label?.toLowerCase().includes("frontend") ||
                    link.label?.toLowerCase().includes("backend") ? (
                    <FiGithub size={16} />
                  ) : (
                    <FiExternalLink size={16} />
                  )}
                  <span style={{ marginLeft: 6 }}>{link.label}</span>
                </button>
              );
            })}
            {videoUrl && (
              <button
                type="button"
                className="vp-watchBtn"
                onClick={(e) => {
                  e.stopPropagation();
                  onReadMore(true);
                }}
              >
                <span className="vp-watchIcon" aria-hidden="true">
                  <FaPlay size={10} color="white" />
                </span>
                Watch Video
              </button>
            )}
          </div>
        )}
      </div>

      <h2>{title}</h2>
      <p>{content}</p>

      {!!tech.length && (
        <div className="tech_stack">
          {visibleTech.map((t) => (
            <span key={t} className="tech_tag">
              {t}
            </span>
          ))}
          {extraCount > 0 && <span className="tech_more">+{extraCount}</span>}
        </div>
      )}

      <div
        className="read_more"
        role="button"
        tabIndex={0}
        onClick={onReadMore}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onReadMore()}
      >
        <span>Read more</span>
        <span className="read_more_arrow">»</span>
      </div>
    </div>
  );
};

export default Card;
