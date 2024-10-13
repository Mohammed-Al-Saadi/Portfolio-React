import React from "react";
import "./education.css";
import { BsCheckCircle } from "react-icons/bs";
import hameUniversityImage from "../../assets/hamk.png";
import yarmoukUniversityImage from "../../assets/yar.png";
import { FaUniversity } from "react-icons/fa";

export default function Card() {
  const educ = [
    {
      name: "Häme University of Applied Sciences (Computer Applications)",
      image: hameUniversityImage, // Image for Häme University
      completed: "2024",
    },
    {
      name: "Al-Yarmouk University College (Computer Engineering)",
      image: yarmoukUniversityImage, // Image for Al-Yarmouk University
      completed: "2014",
    },
  ];

  return (
    <div className="card-container">
      <div className="card-content">
        {educ.map((item, index) => (
          <div className="card-section" key={index}>
            <div className="card-body">
              {/* University name */}
              <div className="education-item">
                <FaUniversity color="black" size={20} className="icon" />{" "}
                <span>{item.name}</span>
              </div>

              {/* Completion year */}
              <div className="completion-year">
                <BsCheckCircle size={18} color="green" className="icon" />
                <span>Completed in {item.completed}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Display the images after all education items */}
        <div className="images-section">
          {educ.map((item, index) => (
            <img
              key={index}
              className={`card-pic-${index}`}
              src={item.image}
              alt={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
