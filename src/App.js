import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataEntryPage from "./DataEntryPage";
import PortfolioDisplay from "./PortfolioDisplay";
import Navbar from "./NavBar";
import AboutMePage from "./AboutMe";
import ContactSection from "./Contact";
import Footer from "./Footer";
import "./App.css"
import Project from "./Project";
import DarkModeToggle from "./DarkMode";


const App = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  return (
    <Router>
    <div id="root">
      <DarkModeToggle/>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<DataEntryPage setPortfolioData={setPortfolioData} />} />
          <Route path="/portfolio" element={<PortfolioDisplay portfolioData={portfolioData} />} />
          <Route path="/about" element={
              <AboutMePage 
                profile_picture={portfolioData?.profilePicture || ""}
                skills={portfolioData?.skills || ""}
                interests={portfolioData?.interests || ""}
                desc={portfolioData?.description || ""}
                name={portfolioData?.name || "N/A"}
                bio={portfolioData?.bio || "N/A"}
              />
          } />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
};

export default App;
