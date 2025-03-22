import React, { useState, useEffect } from "react";
import "./Contact.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScOTY4LlDb8UIPw3rg__IVE64LxZfsHjHs1DIZOSbpsUskJwA/formResponse";

    const formDataToSend = new FormData();
    formDataToSend.append("entry.1020304916", formData.name);
    formDataToSend.append("entry.1586652027", formData.email);
    formDataToSend.append("entry.1354062815", formData.message);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      });

      setSuccessMessage("Your message has been sent successfully!");

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p><strong>Name:</strong></p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
