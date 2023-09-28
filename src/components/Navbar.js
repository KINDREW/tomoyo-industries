import "./Navbar.css";
import { Link as ScrollLink, Element } from "react-scroll";
import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrolling2, setScrolling2] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // navbarClassName = "navbar";

  const [navbarClassName, setNavbarClassName] = useState("navbar");

  const handleScroll = () => {
    if (window.scrollY > 570 && window.scrollY < 1350) {
      setScrolling(true);
      setScrolling2(false);
      setNavbarClassName("navbar scrolled");
    } else if (window.scrollY > 1350 && window.scrollY < 2090) {
      setScrolling(false);
      setScrolling2(true);
      setNavbarClassName("navbar scrolled2");
    } else if (window.scrollY > 2091 && window.scrollY < 3090) {
      setScrolling(true);
      setScrolling2(false);
      setNavbarClassName("navbar scrolled");
    } else {
      setScrolling(false);
      setScrolling2(false);
      setNavbarClassName("navbar");
    }
  };

  return (
    <nav className={navbarClassName}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
