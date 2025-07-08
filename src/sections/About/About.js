import React from "react";
import SkillsList from "../../Components/SkillsComponent/SkillsButton";
import AboutContent from "../../Components/aboutContent/AboutContent";
import "./About.css";
import WorkExperience from "../../Components/WorkExperience/WorkExperience";

export default function About() {
  return (
    <div className="about_main">
      <div className="skills-main-page">
        <WorkExperience />
        <SkillsList />
        <AboutContent />
      </div>
    </div>
  );
}
