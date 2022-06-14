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
      <a href="#" className="footer_logo">
        glenntorres
      </a>

      <ul className="permalinks">
        <li>
          <a href="#"></a>Home
        </li>
        <li>
          <a href="#about"></a>About
        </li>
        <li>
          <a href="#experience"></a>Experience
        </li>
        <li>
          <a href="#services"></a>Service
        </li>
        <li>
          <a href="#portfolio"></a>Portfolio
        </li>
        <li>
          <a href="#testimonials"></a>Testimonials
        </li>
        <li>
          <a href="#contact"></a>Contact
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
