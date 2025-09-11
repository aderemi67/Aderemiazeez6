import { useState, useEffect } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrolly > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track visible section
    useEffect(() => {
        const sections = document.querySelectorAll("section");
       const options = {
            threshold: 0.6, // 60% of section must be visible
        }; 

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <h1 className="logo">MyPortfolio</h1>
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            {/* Hamburger Icon */}
            <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            {/* Sidebar Navigation Links */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <a
                        href="#home"
                        className={activeSection === "home" ? "active" : ""}
                        onClick={() => setIsOpen(false)}>
                            Home
                            </a>
                    </li>
                <li>
                    <a
                     href="#about" 
                     className={activeSection === "about" ? "active" : ""}
                     onClick={() => setIsOpen(false)}>
                        About
                        </a>
                        </li>
                <li>
                    <a 
                    href="#projects"
                    className={activeSection === "projects" ? "active" : ""}
                     onClick={() => setIsOpen(false)}>
                        Projects
                        </a>
                        </li>
                <li>
                    
                    <a 
                    href="#contact" 
                    className={activeSection === "contact" ? "active" : ""}
                    onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
            </div>

            {/* Overlay (click to close) */}
            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
        </nav>
    );
}
export default Navbar;