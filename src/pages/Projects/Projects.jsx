import React, { useEffect, useMemo, useState } from "react";
import ReactModal from "react-modal";
import "./projects.css";
import VideoPlayer from "../../components/Video/Video.jsx";
import Card from "../../components/Card/Card.jsx";
import { projects } from "./ProjectData.js";
import { IoClose } from "react-icons/io5";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

ReactModal.setAppElement("#root");

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [autoPlayVideo, setAutoPlayVideo] = useState(false);

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = useMemo(() => {
    return showAll ? projects : projects.slice(0, 4);
  }, [showAll]);

  const openModal = (project, playVideo = false) => {
    setSelectedProject(project);
    setAutoPlayVideo(playVideo);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
    setAutoPlayVideo(false);
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", modalIsOpen);
    return () => document.body.classList.remove("modal-open");
  }, [modalIsOpen]);

  return (
    <div className="projects-container">
      <h1>PROJECTS</h1>
      <h4>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </h4>

      <div className="project-cards">
        {visibleProjects.map((project, index) => (
          <Card
            key={project.id ?? index}
            imageUrl={project.imageUrl}
            title={project.shortTitle}
            content={project.content}
            tech={project.tech}
            links={project.links}
            onReadMore={(playVideo) => openModal(project, playVideo)}
            videoUrl={project.videoUrl}
          />
        ))}
      </div>
      {projects.length > 4 && (
        <div className="projects-actions">
          <button
            className="projects-toggle-btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            <span>{showAll ? "Show Less" : "Show More Projects"}</span>
            {showAll ? (
              <FiChevronUp size={18} className="toggle-icon" />
            ) : (
              <FiChevronDown size={18} className="toggle-icon" />
            )}
          </button>
        </div>
      )}

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Video Modal"
        className="project-modal-fullscreen"
        overlayClassName="project-modal-overlay-fullscreen"
        shouldReturnFocusAfterClose={false}
        bodyOpenClassName="modal-open"
        htmlOpenClassName="modal-open"
      >
        {selectedProject && (
          <div>
            <div className="close">
              <IoClose
                className="tryout"
                color="black"
                size={35}
                onClick={closeModal}
              />
            </div>

            <h2>{selectedProject.title}</h2>
            <VideoPlayer
              videoUrl={selectedProject.videoUrl}
              imgUrl={selectedProject.imageUrl}
              text={selectedProject.fullText}
              tech={selectedProject.tech}
              links={selectedProject.links}
              keyFeatures={selectedProject.keyFeatures}
              challenges={selectedProject.challenges}
              solutions={selectedProject.solutions}
              autoOpen={autoPlayVideo}
            />
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default Projects;
