import About from "./About";
import "./css/Pages.css";
import Picture from "./Picture";
import Card from "../Components/Card";
import SkillsButton from "../Components/SkillsButton";
import Footer from "./Footer";
import Slider from "./Slider";
import { Link } from "react-router-dom";

export default function Pages() {
  return (
    <div className="main-html-div">
      <div className="html-div">
        <Picture />
        <About />
        <Footer />
        <li>
          <Link to="https://www.google.com/contact"></Link>
        </li>
      </div>

      <div className="html2-div">
        <div className="html2-2component">
          <Card />
          <SkillsButton />
        </div>
        <Slider />
        <Footer />
      </div>
    </div>
  );
}
