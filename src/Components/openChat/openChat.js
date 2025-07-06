// MainView.jsx
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./openChat.css";

export default function MainView({ phoneNumber = "+358442417876" }) {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => {
    const normalized = phoneNumber.replace(/\D/g, "");
    if (!normalized) {
      console.error("Invalid phone number provided to MainVChatiew");
      return;
    }
    const waUrl = `https://wa.me/${normalized}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="mainview-container">
      {/* Floating WhatsApp Icon */}
      <button
        className="whatsapp-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp Chat Popover"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </button>

      {/* Chat Popover positioned above the icon */}
      {isOpen && (
        <div className="chat-popover" onClick={() => setIsOpen(false)}>
          <div
            className="chat-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="chat-modal-header">Start a Chat</h2>
            {phoneNumber ? (
              <p className="chat-modal-text">
                Chat with <strong>{phoneNumber}</strong> on WhatsApp.
              </p>
            ) : (
              <p className="chat-modal-error">No phone number provided.</p>
            )}
            <button
              className="chat-button"
              onClick={openChat}
              disabled={!phoneNumber}
            >
              Say hi!
            </button>
            <button className="cancel-button" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
