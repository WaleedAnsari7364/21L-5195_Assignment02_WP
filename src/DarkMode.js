import React, { useState, useEffect } from "react";
import "./DarkMode.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default DarkModeToggle;
