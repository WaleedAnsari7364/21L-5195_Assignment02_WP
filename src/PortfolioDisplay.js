import React from "react";
import "./PortfolioDisplay.css";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";

export default function PortfolioDisplayPage({ portfolioData }) {

    if (!portfolioData || Object.keys(portfolioData).length === 0) {
        return (
            <div className="no-data-container">
                <h2>No Portfolio Data Available</h2>
                <p>Please fill out the form to generate your portfolio.</p>
                <Link to="/" className="fill-form-link">Go to Data Entry Page</Link>
            </div>
        );
    }
    const skillsArray = portfolioData.skills ? portfolioData.skills.split(",").map(skill => skill.trim()) : [];
    const interestsArray = portfolioData.interests ? portfolioData.interests.split(",").map(interest => interest.trim()) : [];
    return (
        <div>
        <HeroSection name={portfolioData?.name} bio={portfolioData?.bio} />
        <div className="portfolio-container">
            <h1 className="portfolio-heading">Portfolio</h1>
            <h2>Personal Details</h2>
            <div className="profile-section">
            
                {portfolioData.profilePicture && <img src={portfolioData.profilePicture} alt="Profile" className="profile-picture" />}
                <h1>{portfolioData.name}</h1>
                <p className="bio">{portfolioData.bio}</p>
            </div>

            <div className="about-section">
                <h2>About Me</h2>
                <p><strong>Skills:</strong></p>
                <div className="skills-container">
                    {skillsArray.map((skill, index) => (
                        <span key={index} className="skill-badge">{skill}</span>
                    ))}
                </div>
                <p><strong>Interests:</strong></p>
                <div className="interests-container">
                    {interestsArray.map((interest, index) => (
                        <span key={index} className="interest-badge">{interest}</span>
                    ))}
                </div>
                <p><strong>Description:</strong> {portfolioData.description}</p>
            </div>

            <div className="projects-section_portfolio_display">
                <h2>Projects</h2>
                {portfolioData.projects.map((project, index) => (
                    <div key={index} className=".project-card_portfolio_display">
                        {project.image && <img src={project.image} alt={project.title} className="project-image" />}
                        <h3><strong>Title:</strong> {project.title}</h3>
                        <p><strong>Description:</strong> {project.description}</p>
                        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Link</a>}
                    </div>
                ))}
            </div>

            <div className="social-media-section">
                <h2>Social Media</h2>
                {portfolioData.socialLinks.length > 0 ? (
                    portfolioData.socialLinks.map((link, index) => (
                        <p key={index}>
                            <strong>{link.name}: </strong>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                        </p>
                    ))
                ) : (
                    <p>No social media links added yet.</p>
                )}
            </div>
        </div>
        </div>
    );
}
