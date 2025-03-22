import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DataEntryPage.css";

export default function DataEntryPage({ setPortfolioData }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email:"",
        contact_number:"",
        bio: "",
        profilePicture: "",
        skills: "",
        interests: "",
        description: "",
        projects: [{ title: "", description: "", image: "", github: "" }],
        socialLinks: [{ name: "", url: "" }],
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setFormData({ ...formData, profilePicture: imageUrl });
    };

    const handleProjectChange = (index, field, value) => {
        const newProjects = [...formData.projects];
        newProjects[index][field] = value;
        setFormData({ ...formData, projects: newProjects });
    };

    const handleProjectImageUpload = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            const newProjects = [...formData.projects];
            newProjects[index].image = imageUrl;
            setFormData({ ...formData, projects: newProjects });
        }
    };

    const handleSocialMediaChange = (index, field, value) => {
        const newSocialLinks = [...formData.socialLinks];
        newSocialLinks[index][field] = value;
        setFormData({ ...formData, socialLinks: newSocialLinks });
    };

    const addProject = () => {
        setFormData({
            ...formData,
            projects: [...formData.projects, { title: "", description: "", image: "", github: "" }],
        });
    };

    const addSocialMedia = () => {
        setFormData({
            ...formData,
            socialLinks: [...formData.socialLinks, { name: "", url: "" }],
        });
    };

    const handleSubmit = () => {
        setPortfolioData(formData);
        navigate("/portfolio");
    };

    return (
        <div className="container">
            <h2>Personal Information</h2>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="input-field" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input-field" />
            <input type="text" name="contact_number" placeholder="Contact Number" value={formData.contact_number} onChange={handleChange} className="input-field" />
            <textarea name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange} className="textarea-field"></textarea>

            <h2>About Me</h2>
            <input type="text" name="skills" placeholder="Skills (Comma Separated)" value={formData.skills} onChange={handleChange} className="input-field" />
            <input type="text" name="interests" placeholder="Interests (Comma Separated)" value={formData.interests} onChange={handleChange} className="input-field" />
            <textarea name="description" placeholder="Detailed Description" value={formData.description} onChange={handleChange} className="textarea-field"></textarea>

            <label>Profile Picture</label>
            <input type="file" onChange={handleFileUpload} className="file-input" />

            <h2>Project Details</h2>
            {formData.projects.map((project, index) => (
                <div key={index} className="projects">
                    <input type="text" placeholder="Project Title" value={project.title} onChange={(e) => handleProjectChange(index, "title", e.target.value)} className="input-field" />
                    <input type="text" placeholder="Github Link" value={project.github} onChange={(e) => handleProjectChange(index, "github", e.target.value)} className="input-field" />
                    <textarea placeholder="Description" value={project.description} onChange={(e) => handleProjectChange(index, "description", e.target.value)} className="textarea-field"></textarea>
                    <label>Image</label>
                    <input type="file" accept="image/*" onChange={(e) => handleProjectImageUpload(e, index)} className="file-input" />
                </div>
            ))}
            <button onClick={addProject} className="button add-button">Add Project</button>

            <h2>Social Media Links</h2>
            {formData.socialLinks.map((link, index) => (
                <div key={index} >
                    <input type="text" placeholder="Platform" value={link.name} onChange={(e) => handleSocialMediaChange(index, "name", e.target.value)} className="input-field" />
                    <input type="text" placeholder="URL" value={link.url} onChange={(e) => handleSocialMediaChange(index, "url", e.target.value)} className="input-field" />
                </div>
            ))}
            <button onClick={addSocialMedia} className="button add-button">Add Social Media</button>

            <button onClick={handleSubmit} className="button">Generate Portfolio</button>
        </div>
    );
}
