import "./App.css";
import React from "react";
import Sidebar from "./Components/sideBar/sideBar";
import FirstPage from "./Components/home/firstPage.js";
import Projects from "./Components/Projects/projects.js";
import ContactUs from "./Components/Contact/Contact.js";
import About from "./Components/About/About.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { leftVariant, rightVariant } from "./animations"; // Import animation variants

function App() {
  // InView hooks with `triggerOnce: false` for repeated animation on each scroll
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="app-container">
      <div className="fixed">
        <Sidebar /> {/* Sidebar is always visible */}
      </div>
      <div className="content">
        {/* Home Section */}
        <section id="home">
          <FirstPage />
        </section>

        {/* About Section */}
        <section id="education" ref={aboutRef}>
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={leftVariant}
          >
            <About />
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef}>
          <motion.div
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={rightVariant}
          >
            <Projects />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef}>
          <motion.div
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={rightVariant}
          >
            <ContactUs />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default App;
