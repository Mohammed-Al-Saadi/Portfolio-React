// Card.js
import React from "react";
import "./card.css";

const Card = ({
  imageUrl,
  title,
  content,
  tech = [],
  links = [],
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

        {links.length > 0 && (
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
                  {link.label} »
                </button>
              );
            })}
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
