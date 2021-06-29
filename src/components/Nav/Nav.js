import React, { useState } from "react";
import "./Nav.css";
import "./hamburgers.css";
// import cloudSurfLogo from "../../resources/logos/cloud-logo-black.svg";

const Nav = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(pageURI);
  };

  const responsive = menuOpen ? " responsive" : "";

  const borderRadius = menuOpen ? " topnav-border-radius" : "";

  const hamburgerType = menuOpen ? " is-active" : "";

  const pageURI = window.location.pathname + window.location.search;

  return (
    <React.Fragment>
      <div className={"topnav" + responsive} id="myTopnav">
        <a href="/" className="top-nav-brand">
          {/* <img className="topnav-logo" src={cloudSurfLogo} alt="" /> */}
          <span className="topnav-company-name">
            <b>Cloud</b>Surf Software
          </span>
        </a>
        {/* <div className="mobile-nav-spacer"></div> */}

        <a
          href="/"
          className={pageURI == "/" ? "topnav-item active" : "topnav-item"}
        >
          Home
        </a>
        <a
          href="/projects"
          className={
            pageURI == "/projects" ? "topnav-item active" : "topnav-item"
          }
        >
          Projects
        </a>
        <a
          href="/services"
          className={
            pageURI == "/services" ? "topnav-item active" : "topnav-item"
          }
        >
          Services
        </a>
        <a
          href="/contact"
          className={
            pageURI == "/contact" ? "topnav-item active" : "topnav-item"
          }
        >
          Contact
        </a>

        {/* <Footer /> */}
        <button
          className={
            " hamburger hamburger--spin no-bs-border hamburger-icon" +
            hamburgerType
          }
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Nav;
