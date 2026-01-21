// Education.jsx
import React from "react";
import "./education.css";
import { FaUniversity, FaUserGraduate } from "react-icons/fa";
import { EducationData } from "./EducationData";
export default function Education() {
  return (
    <section className="edu-section">
      <header className="edu-header-main">
        <label className="skills-main-page">Education</label>
      </header>
      <div className="edu-grid">
        {EducationData.map((edu) => (
          <article className="edu-card" key={`${edu.degree}-${edu.period}`}>
            <div className="edu-card-body">
              {/* Degree & Field */}
              <h3 className="edu-degree">
                {edu.degree}
                <span className="edu-field">{edu.field}</span>
              </h3>

              {/* University */}
              <p className="edu-university">
                {edu.university}, {edu.country}
              </p>

              {/* Qualification */}
              {edu.qualification && (
                <p className="edu-qualification">{edu.qualification}</p>
              )}

              <div className="edu-divider" />

              {/* Period & GPA */}
              <div className="edu-footer">
                <span className="edu-period">
                  <FaUserGraduate /> {edu.period}
                </span>
                <span className="edu-gpa">{edu.gpa}</span>
              </div>
            </div>

            {/* Logo */}
            <a
              href={edu.uniLink}
              target="_blank"
              rel="noopener noreferrer"
              className="edu-logo"
            >
              <img src={edu.image} alt={edu.university} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
