import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./WorkExperience.css";
import { IoClose } from "react-icons/io5";
import workExperienceData from "./workExperienceData.json";

Modal.setAppElement("#root");

const WorkExperience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  // Sort work experience data by year in descending order (newest first)
  const sortedWorkExperienceData = [...workExperienceData].sort((a, b) => {
    return parseInt(b.year) - parseInt(a.year);
  });
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  return (
    <div className="work-experience-main">
      <label className="skills-main-page">Work Experience</label>

      <div className="work-experience-container">
        {sortedWorkExperienceData.map((exp, index) => (
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
          shouldReturnFocusAfterClose={false}
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
              <h3>{selectedExperience.title}</h3>{" "}
              <div className="title-underline" />
              <p>
                <strong>{selectedExperience.company}</strong> -{" "}
                {selectedExperience.year} ({selectedExperience.duration})
              </p>
              <p>
                {selectedExperience.description
                  .split("\n")
                  .map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
              </p>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default WorkExperience;
