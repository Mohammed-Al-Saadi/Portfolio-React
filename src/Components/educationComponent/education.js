import React from "react";
import "./education.css";
import { BsCheckCircle } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { EducationData } from "./educationData.js";
import { FaUserGraduate } from "react-icons/fa6";

export default function Education() {
  // Function to handle opening the certificate
  const handleOpenCertificate = (certificateUrl) => {
    window.open(certificateUrl, "_blank");
  };

  return (
    <div className="education-card-container">
      <div className="education-card-content">
        {EducationData.map((item, index) => (
          <div className="education-card-section" key={index}>
            <div className="education-card-body">
              {/* University name */}
              <div className="education-item">
                <FaUniversity color="black" size={20} className="icon" />{" "}
                <span>{item.name}</span>
              </div>
              {/* Completion year */}
              <div className="education-completion-year">
                <FaUserGraduate size={18} color="black" className="icon" />
                <span>{item.completed}</span>
                <BsCheckCircle size={18} color="green" className="icon" />
                <span>GPA {item.gpa}</span>
              </div>
              {/* Text to open the certificate */}
              {item.certificate && (
                <p onClick={() => handleOpenCertificate(item.certificate)}>
                  View Certificate
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Display the images after all education items with links */}
        <div className="education-images-section">
          {EducationData.map((item, index) => (
            <a
              href={item.uniLink}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img
                className={item.logoClassName}
                src={item.image}
                alt={item.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
