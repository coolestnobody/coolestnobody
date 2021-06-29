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
        <img src={logo} className="home-img" alt="logo" />
        {/* <img src="../../resources/pic.jpg" alt="" className="home-img"/> */}
        <div className="home-text-container">
          <p className="home-text">coolestnobody.com coming soon 😳</p>

          <a href="https://www.instagram.com/coolestnobodyart/" target="_blank">
            <i className="fa fa-instagram fa-lg"></i>
          </a>
          <a href="https://twitter.com/3rdlittlebird" target="_blank">
            <i className="fa fa-twitter fa-lg"></i>
          </a>
        </div>
      </div>

      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Home;
