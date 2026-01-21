import "./Skills.css";
import { skillsByCategory } from "./Data.js";

export default function SkillsList() {
  return (
    <section className="skills_section">
      <label className="skills-main-page">Tech Stack</label>
      <div className="skills_grid">
        {skillsByCategory.map((group) => (
          <div key={group.category} className="skills_card">
            <div className="skills_card_header">
              <div className="skills_card_badge">{group.icon}</div>
              <h3 className="skills_card_title">{group.category}</h3>
            </div>

            <ul className="skills_list">
              {group.items.map((skill, index) => (
                <li key={index} className="skills_item">
                  <span className="skills_icon">{skill.icon}</span>
                  <span className="skills_name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
