import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

//DO NOT USE THE IMAGES IN THE PRODUCTION
const data = [
  {
    id: 1,
    image: IMG1,
    title: "RealEstate Video Ads for Glenn Torres",
    facebook: "https://facebook.com",
    demo: "https://www.facebook.com/glenntorres34",
  },
  {
    id: 2,
    image: IMG2,
    title: "RealEstate Video Ads for Rosebud Puzon",
    facebook: "https://facebook.com",
    demo: "https://www.facebook.com/glenntorres34",
  },
  {
    id: 3,
    image: IMG3,
    title: "RealEstate Video Ads for Faith Puzon",
    facebook: "https://facebook.com",
    demo: "https://www.facebook.com/glenntorres34",
  },
  {
    id: 4,
    image: IMG4,
    title: "RealEstate Video Ads for Katherine Torres",
    facebook: "https://facebook.com",
    demo: "https://www.facebook.com/glenntorres34",
  },
  {
    id: 5,
    image: IMG5,
    title: "RealEstate Video Ads for Ken Torres",
    facebook: "https://facebook.com",
    demo: "https://www.facebook.com/glenntorres34",
  },
  {
    id: 6,
    image: IMG6,
    title: "RealEstate Video Ads for Aisa Torres",
    facebook: "https://facebook.com",
    demo: "https://www.facebook.com/glenntorres34",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, facebook, demo }) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={facebook}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
