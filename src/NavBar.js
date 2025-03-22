import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">Portfolio Generator</h1>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/project" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
