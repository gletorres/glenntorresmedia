import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Video Ads</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Facebook Ads</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Youtube Ads</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Instagram Ads</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>TikTok</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>LinkedIn Ads</p>
            </li>
          </ul>
        </article>
        {/* END OF FACEBOOK ADS */}

        <article className="service">
          <div className="service_head">
            <h3>Video Content Editing</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Facebook Content</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Youtube Content</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Instagram Content</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>TikTok</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>LinkedIn Content</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
