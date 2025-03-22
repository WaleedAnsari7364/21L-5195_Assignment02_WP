import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = ({ name, bio }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">Hero Section</h1>
        <h1>{name || "Your Name"}</h1>
        <p>{bio || "A short bio about yourself goes here."}</p>
        <Link to="/project" className="cta-button">My Projects</Link>
        <br />
        <Link to="/contact" className="cta-button">Contact</Link>
      </div>
    </section>
  );
};

export default HeroSection;
