import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { ImUserTie, ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa6";
import Rights from "../rights/rights";

export default function ContactUs() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !form.current.user_name.value ||
      !form.current.user_email.value ||
      !form.current.message.value
    ) {
      setSuccessMessage("Please fill out all fields.");
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        "service_zy1oqvf",
        "template_rbmt8va",
        form.current,
        "YwJIiLEPe-Xm3FKSC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message sent successfully! 👍"); // Set success message
          setTimeout(() => {
            setSuccessMessage("");
          }, 4000);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="main-container">
      <h1>CONTACT ME</h1>
      <h4>
        Interested in collaborating or learning more? Reach out, and let’s
        connect!
      </h4>
      <div className="container">
        <div className="contactinfo">
          <div className="contactheader">
            <Link to="">
              <RiContactsFill /> &nbsp;Contact Information
            </Link>
          </div>
          <hr />

          <div className="contactheader">
            <Link to="">
              <ImUserTie /> &nbsp;Mohammed Al-Saadi
            </Link>
          </div>
          <hr />
          <div className="contactheader">
            <Link to="">
              <FaAddressBook /> &nbsp;Tampere
            </Link>
          </div>
          <hr />
          <div className="contactheader">
            <Link to="">
              <ImPhone /> &nbsp;+358 442417876
            </Link>
          </div>
          <hr />
          <div className="contactheader">
            <Link to="">
              <MdEmail /> &nbsp;al-saadi.mohammed@outlook.com
            </Link>
          </div>
          <hr />
        </div>

        <div className="container_h">
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}{" "}
          <form id="contact" ref={form} onSubmit={sendEmail}>
            <input
              placeholder="Your name..."
              name="user_name"
              required
              type="text"
            />
            <input
              placeholder="Your Email Address..."
              type="email"
              name="user_email"
              required
            />
            <textarea
              required
              placeholder="Type your message here..."
              name="message"
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
          {/* Display success message */}
        </div>
      </div>
      <Rights />
    </div>
  );
}
