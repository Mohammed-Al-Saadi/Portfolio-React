// Card.js
import React from "react";
import "./card.css";

const Card = ({ imageUrl, title, content, onReadMore }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={onReadMore}>Read More</button>
    </div>
  );
};

export default Card;
