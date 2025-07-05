import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import "./projects.css";
import VideoPlayer from "../../Components/videoComponent/video";
import Card from "../../Components/cardComponent/card";
import { projects } from "./projectData";
import { IoClose } from "react-icons/io5";

ReactModal.setAppElement("#root"); // Set the root element for accessibility

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalIsOpen]);
  return (
    <div className="projects-container">
      <h1>PROJECTS</h1>
      <h4>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </h4>
      <div className="project-cards">
        {projects.map((project, index) => (
          <Card
            key={index}
            imageUrl={project.imageUrl}
            title={project.shortTitle}
            content={project.content}
            onReadMore={() => openModal(project)}
          />
        ))}
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Video Modal"
        className="project-modal-fullscreen"
        overlayClassName="project-modal-overlay-fullscreen"
        shouldReturnFocusAfterClose={false} // ← add this
      >
        {selectedProject && (
          <div>
            <div className="close">
              {" "}
              <IoClose
                className="tryout"
                color="black"
                size={35}
                onClick={closeModal}
              ></IoClose>
            </div>

            <h2>{selectedProject.title}</h2>
            <VideoPlayer
              videoUrl={selectedProject.videoUrl}
              text={selectedProject.fullText}
              p={selectedProject.title}
              tech={selectedProject.tech}
              links={selectedProject.links}
            />
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default Projects;
