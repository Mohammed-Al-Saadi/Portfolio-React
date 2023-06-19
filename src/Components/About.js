import React from "react";
import { Link } from "react-router-dom";
import "./css/About.css";

export default function About() {
  return (
    <div className="AboutMe-Info">
      {}
      <div className="Header">
        <h1>Hello, I'm Mohammed Al-Saadi</h1>
        <p>
          I am a third-year student at HAMK majoring in a degree programing of
          Computer Applications. I aim to become a Full-Stack Developer with an
          in-depth expertise on everything related to web and app development. I
          am a dedicated, organized and systematic individual with great people
          skills. I have developed a flexible set of planning skills and I’m
          confident working independently or as part of a team.
        </p>
      </div>
      <div className="center">
        <Link to="/Contact">
          <button className="name noselect">Contact me</button>{" "}
        </Link>
      </div>
    </div>
  );
}
