import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className="header" ref={headerRef}>
      <a href="/">
        <div className="logo">PG.</div>
      </a>
      <nav>
        <ul className={menuOpen ? "open" : ""}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/resume">Resume</a></li>
          <FontAwesomeIcon icon={faTimes} className="iconsCross" onClick={toggleMenu} />
        </ul>
      </nav>
      <FontAwesomeIcon icon={faBars} className="iconsMenu" onClick={toggleMenu} />
    </header>
  );
};

export default Header;
