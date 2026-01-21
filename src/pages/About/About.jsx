import React from "react";
import SkillsList from "../../components/Skills/Skills.jsx";
import "./About.css";
import WorkExperience from "../../components/WorkExperience/WorkExperience.jsx";
import Education from "../../components/Education/Education.jsx";

export default function About() {
  return (
    <div className="about_main">
      <div className="skills-main-page">
        <WorkExperience />
        <SkillsList />
        <Education />
      </div>
    </div>
  );
}
