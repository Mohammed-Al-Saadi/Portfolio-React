import React from "react";
import SkillsList from "../../Components/SkillsComponent/SkillsButton";
import AboutContent from "../../Components/aboutContent/AboutContent";
import "./About.css";
import WorkExperience from "../../Components/WorkExperience/WorkExperience";
import aboutData from "./AboutData.json";

export default function About() {
  return (
    <div className="about_main">
      <h1>{aboutData.title}</h1>
      <h4>{aboutData.description}</h4>
      <div className="skills-main-page">
        <AboutContent />
        <SkillsList />
        <WorkExperience />
      </div>
    </div>
  );
}
