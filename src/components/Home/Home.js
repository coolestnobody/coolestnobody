import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import { BrowserRouter } from "react-router-dom";
import logo from "../../resources/pic.jpg";
// import Footer from "../Footer/";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="home-container">

        <nav className="navbar">
          <div className="socials">
            <a href="https://www.instagram.com/coolestnobodyart/" target="_blank">
              <i className="fa fa-instagram fa-lg"></i>
            </a>
            <a href="https://twitter.com/3rdlittlebird" target="_blank">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
          </div>

          <ul className="nav-list">
            <li>
              <a id="welcome-section">About</a>
            </li>
            <li>
              <a id="projects">Work</a>
            </li>
            <li>
              <a id="contact">Contact</a>
              </li>
          </ul>
        </nav>


        <section id="welcome-section" className="welcome-section">
          {/* <img src={logo} className="home-img" alt="logo" /> */}
          <h1>i am coolestnobody.</h1>
          <p>cogito, ergo sum.</p>
        </section>

        <section id="projects" className="projects-section">
          <h2>These are some of my projects</h2>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <h2>Let's work together...</h2>
            <p>Contact me!</p>
          </div>
        </section>



      </div>

      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Home;
