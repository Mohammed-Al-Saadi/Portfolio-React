import React from "react";
import "./education.css";
import { FaUniversity } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { EducationData, CertificationsData } from "./educationData.js";

export default function Education() {
  const handleOpenCertificate = (certificateUrl) => {
    window.open(certificateUrl, "_blank");
  };

  return (
    <>
      {/* Education Section */}
      <section className="edu-container">
        <div className="edu-main">
          {EducationData.map((item) => (
            <article className="edu-card" key={item.name}>
              <div className="edu-details">
                <br />

                <h3 className="edu-title">
                  <FaUniversity
                    className="icon uni-icon"
                    size={20}
                    color="black"
                  />{" "}
                  {item.name}
                </h3>

                <div className="edu-meta">
                  <span className="year">
                    <FaUserGraduate
                      className="icon grad-icon"
                      size={20}
                      color="black"
                    />{" "}
                    {item.completed}
                  </span>
                  {/* Text to open the certificate */}
                  <span>{item.gpa}</span>
                  <hr></hr>

                  <div className="certificate_logo">
                    <div>
                      {item.certificate && (
                        <p
                          className="view_certificate"
                          onClick={() =>
                            handleOpenCertificate(item.certificate)
                          }
                        >
                          <p> View Certificate</p>
                        </p>
                      )}
                    </div>
                    <div className="edu-logo">
                      <a
                        href={item.uniLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={item.image} alt={`${item.name} logo`} />
                      </a>
                    </div>
                  </div>
                  {/* Display the images after all education items with links */}
                  <div className="education-images-section">
                    {EducationData.map((item, index) => (
                      // eslint-disable-next-line jsx-a11y/anchor-has-content
                      <a
                        href={item.uniLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                      />
                    ))}
                  </div>
                </div>

                {item.courses && item.courses.length > 0 && (
                  <ul className="grades-list">
                    {item.courses.map((course) => (
                      <li key={course.name} className="grades-item">
                        <span className="course-name">{course.name}</span>
                        <span className="course-grade">{course.grade}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="cert-container">
        <div className="cert-main">
          {CertificationsData.map((cert) => (
            <article className="cert-card" key={cert.credentialId}>
              <div className="cert-details">
                {/* Render image or icon */}
                <h3 className="cert-title">{cert.name}</h3>
                <p className="cert-meta">
                  <strong>By: {cert.issuer}</strong>
                  <strong>Date: {cert.issued}</strong>
                </p>
                <hr />
                <div className="certifications_section">
                  <div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      View Certificate
                    </a>
                  </div>

                  <div>
                    {React.isValidElement(cert.image) ? (
                      cert.image
                    ) : (
                      <img
                        src={cert.image}
                        alt={`${cert.name} badge`}
                        width={60}
                        height={60}
                      />
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
