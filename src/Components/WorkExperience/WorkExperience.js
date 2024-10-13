import React, { useState } from "react";
import Modal from "react-modal";
import "./WorkExperience.css";
import { IoClose } from "react-icons/io5";

// Bind the modal to your app element (the root div in public/index.html)
Modal.setAppElement("#root");

const WorkExperience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      title: "IT Specialist Trainee",
      company: "Baqubah Municipality",
      year: "2013",
      duration: "5 months",
      description:
        "Spent 5 months as an IT Specialist trainee at Baqubah Municipality, diving into technical support, network management, and system optimization. This experience built a solid foundation in IT and sparked a real passion for tackling tech challenges head-on.",
    },
    {
      title: "App Developer Trainee",
      company: "Calevala",
      year: "2023",
      duration: "5 months",
      description:
        "In 2023, joined Calevala as an Application Developer Trainee and took on an active role in shaping the Kalibro project. Worked closely with the team to plan, design, and develop the core services and user interface, contributing directly to the architecture and vision of the tool from its earliest stages. It was an incredible opportunity to bring ideas to life and see the project take shape.",
    },
    {
      title: "Full-Stack Developer",
      company: "Calevala",
      year: "2024 - Present",
      description:
        "Now, as a Full-Stack Developer at Calevala, leading the team in building Kalibro.io site audit tool created with Flask, React, and AWS. This role includes everything from coding and deploying to setting project milestones and guiding the team. The focus is always on delivering powerful features to make Kalibro a must-have tool for businesses looking to improve their online presence.",
    },
  ];

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <div div className="work-experience-main">
      <label className="skills-main-page">Work Experience</label>

      <div className="work-experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="work-experience-card">
            <h3>{exp.title}</h3>
            <p className="italic">
              <strong>{exp.company}</strong> - {exp.year}
            </p>

            <button className="read-more-button" onClick={() => openModal(exp)}>
              Read More
            </button>
          </div>
        ))}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Experience Details"
          className="experience-modal-content"
          overlayClassName="experience-modal-overlay"
        >
          {selectedExperience && (
            <div>
              <div className="close">
                <IoClose
                  size={40}
                  onClick={closeModal}
                  className="work-experience-close-button"
                ></IoClose>
              </div>

              <h3>{selectedExperience.title}</h3>

              <p>
                <strong>{selectedExperience.company}</strong> -{" "}
                {selectedExperience.year} ({selectedExperience.duration})
              </p>
              <p>{selectedExperience.description}</p>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default WorkExperience;
