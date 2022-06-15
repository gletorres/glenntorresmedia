import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="aboutImage" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward classname="about_icon" />
              <h5>Experience</h5>
              <small>1+Years Working</small>
            </article>
            <article className="about_card">
              <FaUsers classname="about_icon" />
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary classname="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I help Real Estate BUSINESSES/YouTubers get more leads and
            conversions and increase audience retention through VIDEO EDITING.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
