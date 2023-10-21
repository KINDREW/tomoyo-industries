import "./Navbar.css";
import { Link as ScrollLink, Element } from "react-scroll";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
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

  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);

  const [isOpen, setIsOpen] = useState(true);

  const sideMenu = () => {
    const navbar = targetRef.current;
    const bar = targetRef2.current;
    const webpage = targetRef3.current;
    const logo = targetRef4.current;

    if (navbar) {
      if (navbar.classList.contains("appear")) {
        navbar.classList.remove("appear");
        bar.classList.remove("change");
        webpage.classList.remove("overlay");
        logo.classList.add("remove");
      } else {
        navbar.classList.add("appear");
        bar.classList.add("change");
        webpage.classList.add("overlay");
        logo.classList.add("remove");
      }
    }
  };

  return (
    <nav className={navbarClassName} ref={targetRef3}>
      <ul className="navmenu" ref={targetRef}>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset as needed
          duration={500}
        >
          <li>Home</li>
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset as needed
          duration={500}
        >
          <li>About</li>
        </ScrollLink>
        <ScrollLink
          to="services"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset as needed
          duration={500}
        >
          <li>Service</li>
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70} // Adjust this offset as needed
          duration={500}
        >
          <li>Contact</li>
        </ScrollLink>
      </ul>
      <div class="bar" onClick={sideMenu} ref={targetRef2}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
