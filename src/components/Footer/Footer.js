import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

function Footer(props) {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/donovan.campbell.96"
              target="_blank"
            >
              <i className="fa fa-facebook footer-icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/donovan-campbell-1a9002147/"
              target="_blank"
            >
              <i className="fa fa-linkedin footer-icon"></i>
            </a>
            <a href="https://www.instagram.com/donovancmpbll/" target="_blank">
              <i className="fa fa-instagram footer-icon"></i>
            </a>
          </div>
          {/* footer-icons */}
          <p className="footer-text">&copy; 2021 Company Name</p>
          <p className="footer-text">
            Powered by{" "}
            <a href="https://cloudsurfsoftware.com/" target="_blank">
              Cloudsurf
            </a>{" "}
          </p>
        </div>
        {/* footer-wrapper */}
      </div>
      {/* footer-container */}
    </React.Fragment>
  );
}

export default Footer;
