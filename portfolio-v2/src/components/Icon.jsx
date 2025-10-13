import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const brandColors = {
  github: "#333",
  linkedin: "#0A66C2",
  twitter: "#1DA1F2",
  instagram: "#E1306C",
};

export default function Icon({ type, size = 24, href }) {
  if (!brandColors[type]) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-300 text-gray-300 hover:text-current"
      style={{ color: "gray" }}
      onMouseEnter={(e) => e.currentTarget.style.color = brandColors[type]}
      onMouseLeave={(e) => e.currentTarget.style.color = "gray"}
    >
      {type === "github" && <FaGithub size={size} />}
      {type === "linkedin" && <FaLinkedin size={size} />}
      {type === "twitter" && <FaTwitter size={size} />}
      {type === "instagram" && <FaInstagram size={size} />}
    </a>
  );
}
