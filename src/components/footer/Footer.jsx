/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer_logo">
        GTMEDIA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#testimonials">TESTIMONIALS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/glenntorres34">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/gt_video_editor/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/glenn-torres/">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; glennrtorresmedia. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
