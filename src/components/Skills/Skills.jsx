import "./Skills.css";
import { skills } from "./Data.js";

export default function SkillsList() {
  return (
    <div className="skills_main">
      <label className="skills-main-page"> Tech Stack</label>
      <div className="skills_cards_container">
        {skills.map((skill, index) => (
          <div key={index} className="skill_card">
            <div className="skill_icon">{skill.icon}</div>
            <div className="skill_name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
