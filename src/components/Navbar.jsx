import React, { useEffect, useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect which section is currently visible
  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Check the active section when the page first loads
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle navigation click
  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <a
        href="#home"
        className="logo"
        onClick={() => handleNavClick("home")}
      >
        Kaushalya
      </a>


      {/* Navigation */}
      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={() => handleNavClick("home")}
        >
          Home
        </a>

        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={() => handleNavClick("about")}
        >
          About
        </a>

        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => handleNavClick("skills")}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => handleNavClick("projects")}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => handleNavClick("contact")}
        >
          Contact
        </a>

      </nav>

      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>


    </header>
  );
}

export default Navbar;

