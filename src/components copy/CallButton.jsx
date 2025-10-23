import React from "react";
import { FaPhone } from "react-icons/fa";
import "./WhatsAppButton.css";

function CallButton() {
  return (
    <a
      href="tel:+919841074504" // ✅ your phone number
      className="call-float"
    >
      <FaPhone size={24} />
    </a>
  );
}

export default CallButton;
