import "../../sections/About/About.css";
import Education from "../educationComponent/education.js";

import aboutContentData from "./AboutContentData.json";
export default function AboutContent() {
  return (
    <div className="about_main_content">
      <h1 className="skills-main-page">{aboutContentData.label}</h1>
      <Education />
    </div>
  );
}
