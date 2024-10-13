import SkillsList from "../Skills/SkillsButton";
import AboutContent from "./AboutContent";
import "./About.css";
import WorkExperience from "../WorkExperience/WorkExperience";

export default function About() {
  return (
    <div className="about_main">
      <h1>ABOUT ME</h1>
      <h4>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </h4>
      <div className="skills-main-page">
        <AboutContent />
        <SkillsList />
        <WorkExperience />
      </div>
    </div>
  );
}
