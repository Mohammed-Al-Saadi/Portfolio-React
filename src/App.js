import "./App.css";
import React from "react";
import Sidebar from "./Components/sideBarComponent/sideBar.js";
import FirstPage from "./sections/home/home.js";
import ContactUs from "./sections/contact/Contact.js";
import About from "./sections/About/About.js";
import { motion } from "framer-motion";
import { leftVariant, rightVariant } from "./animation/animations";
import { useRepeatedInView } from "./animation/hook.js";
import Projects from "./sections/Projects/projects.js";

function App() {
  // Custom hook with `triggerOnce: false` for repeated animation on each scroll
  const [aboutRef, aboutInView] = useRepeatedInView(0.1);
  const [projectsRef, projectsInView] = useRepeatedInView(0.1);
  const [contactRef, contactInView] = useRepeatedInView(0.1);

  return (
    <div className="app-container">
      <div className="fixed">
        <Sidebar />
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
            variants={leftVariant}
          >
            <ContactUs />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default App;
