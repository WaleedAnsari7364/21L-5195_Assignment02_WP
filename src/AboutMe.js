import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";

const AboutMePage = ({ profile_picture,skills,interests,desc,name,bio }) => {
  const hasData = profile_picture || skills || interests || desc || name !== "N/A" || bio !== "N/A";
   if (!hasData) {
          return (
              <div className="no-data-container">
                  <h2>No About Me Available</h2>
                  <p>Please fill out the form to generate your portfolio.</p>
                  <Link to="/" className="fill-form-link">Go to Data Entry Page</Link>
              </div>
          );
      }

  const skillsArray = skills
    ? skills.split(",").map(skill => skill.trim())
    : [];
  const interestsArray = interests
    ? interests.split(",").map(interest => interest.trim())
    : [];

  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <div className="about-me-content">
        {profile_picture && (
          <img src={profile_picture} alt="Profile" className="profile-picture" />
        )}
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Bio:</strong> {bio}</p>

        <h2>Skills</h2>
        <div className="skills-container">
          {skillsArray.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>

        <h2>Interests</h2>
        <div className="interests-container">
          {interestsArray.map((interest, index) => (
            <span key={index} className="interest-badge">{interest}</span>
          ))}
        </div>

        <h2>Description</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default AboutMePage;
