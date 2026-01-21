import "./App.css";
import React from "react";
import Sidebar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import { motion } from "framer-motion";
import { leftVariant, rightVariant } from "./utils/animations.js";
import { useRepeatedInView } from "./hooks/useRepeatedInView.js";
import Projects from "./pages/Projects/Projects.jsx";
import OpenChat from "./components/OpenChat/OpenChat.jsx";

function App() {
  const [aboutRef, aboutInView] = useRepeatedInView(0.1);
  const [projectsRef, projectsInView] = useRepeatedInView(0.1);
  const [contactRef, contactInView] = useRepeatedInView(0.1);

  return (
    <div className="app-container">
      <div>
        <Sidebar />
      </div>
      <div className="content">
        {/* Home Section */}
        <section id="home">
          <Home />
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
            <Contact />
          </motion.div>
        </section>
        <OpenChat />
      </div>
    </div>
  );
}

export default App;
