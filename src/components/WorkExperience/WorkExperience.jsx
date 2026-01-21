// src/components/WorkExperience/WorkExperience.jsx
import React from "react";
import "./WorkExperience.css";
import workExperienceData from "./WorkExperienceData.js";

const WorkExperience = () => {
  return (
    <div className="work-experience-main">
      <h2 className="section-label">Work Experience</h2>
      <div className="timeline">
        {workExperienceData.map((exp, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="item-header">
                <strong>{exp.title}</strong>
                <span className="year">{exp.year}</span>
                <strong className="logo-name">
                  {exp.company}{" "}
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="company-logo"
                  />{" "}
                </strong>
              </div>
              <div className="item-body">
                {exp.duration && (
                  <p className="duration">Duration: {exp.duration}</p>
                )}
                {exp.description.split("\n").map((line, i) => (
                  <p className="description-line" key={i}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
