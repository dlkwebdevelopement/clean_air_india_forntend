import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./MailButton.css";

function MailButton() {
  const emailAddress = "ravi@cleanairindia.com"; // ✅ change to your email
  
  // Proper mailto link with subject and body (optional)
  const mailtoLink = `mailto:${emailAddress}?subject=Contact%20Request&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.`;

  return (
    <a
      href={mailtoLink}
      className="mail-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send email"
    >
      <FaEnvelope size={24} />
    </a>
  );
}

export default MailButton;