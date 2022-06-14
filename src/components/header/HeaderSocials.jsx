import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://Instagram" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
      <a href="https://Facebook.com" target="_blank" rel="noopener noreferrer">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
