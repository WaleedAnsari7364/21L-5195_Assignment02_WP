import React from 'react'
import "./Footer.css";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
      <p>Portfolio Generator By Waleed Imran</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/waleed-imran-0b18642b8/" target="_blank" rel="noreferrer">
          <FaLinkedin className="icon" /> LinkedIn
        </a>
        <a href="https://github.com/WaleedAnsari7364" target="_blank" rel="noreferrer">
          <FaGithub className="icon" /> GitHub
        </a>
        <a href="https://x.com/" target="_blank" rel="noreferrer">
          <FaTwitter className="icon" /> Twitter
        </a>
        <a href="https://www.facebook.com/waleed.ansari.77" target="_blank" rel="noreferrer">
          <FaFacebook className="icon" /> Facebook
        </a>
        <a href="https://www.instagram.com/waleedimran_8/" target="_blank" rel="noreferrer">
          <FaInstagram className="icon" /> Instagram
        </a>
      </div>
    </footer>
    </div>
  )
}
