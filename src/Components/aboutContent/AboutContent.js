import "../../sections/About/About.css";
import Education from "../educationComponent/education.js";

import aboutContentData from "./AboutContentData.json";
export default function AboutContent() {
  return (
    <div className="about_main_content">
      <label className="skills-main-page">{aboutContentData.label}</label>
      <p>{aboutContentData.description}</p>
      <Education />
    </div>
  );
}
