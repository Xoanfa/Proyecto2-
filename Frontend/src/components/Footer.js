import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="fixed-footer">
        <span>© 2023 TRAVELINK</span>
        <Link to={"/"} className="footer-link-left">
          Legal Warning
        </Link>
        <div className="footer-link-right">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};
