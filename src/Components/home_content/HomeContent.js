import React from "react";
import "./HomeContent.css";
import Footer from "../Footer/Footer";
import { MdDownloading } from "react-icons/md";

export default function About() {
  //pdf Download
  const onButtonClick = () => {
    fetch("resume_mohammed.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume_mohammed.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="AboutMe-Info">
      <div className="Header">
        <h2>
          <span className="highlight">Mohammed Al-Saadi</span>
        </h2>
        <h3 className="developer-role">A Full Stack Developer</h3>
        <label>Current work: Calevala Ltd</label>
        <div className="contact-link-insta">
          <div className="contact-link" onClick={onButtonClick}>
            Resume <MdDownloading />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
