import Edu from "../Education/education.js";
import "./About.css";

export default function AboutContent() {
  return (
    <div className="about_main_content">
      <label className="skills-main-page">Get to Know Me!</label>
      <p>
        Hi, I'm a recent graduate from Häme University of Applied Sciences
        (HAMK) and currently working at Calevala. I have a passion for creating
        responsive and scalable web applications, and I’m dedicated to staying
        up-to-date with the latest technologies. My goal is to craft seamless
        user experiences that are both efficient and visually appealing. I’m
        always eager to learn, push the boundaries of what’s possible, and bring
        innovative ideas to life!
      </p>
      <Edu />
    </div>
  );
}
