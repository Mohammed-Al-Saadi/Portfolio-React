import React, { useRef, useState } from "react";
import "./Contact.css";
import { ImUserTie, ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa6";
import Rights from "../rightsComponent/rights";
import { sendEmail } from "./emailUtils";

export default function ContactUs() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailSend = (e) => {
    e.preventDefault();
    sendEmail(form, setLoading, setSuccessMessage);
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
          )}
          <form id="contact" ref={form} onSubmit={handleEmailSend}>
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
        </div>
      </div>
      <Rights />
    </div>
  );
}
