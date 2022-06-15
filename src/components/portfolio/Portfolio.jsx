import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

//DO NOT USE THE IMAGES IN THE PRODUCTION
const data = [
  {
    id: 1,
    image: IMG1,
    title: "RealEstate Video Ads..SOON!",
    facebook: "https://www.glenntorres.media/",
    demo: "https://www.glenntorres.media/",
  },
  {
    id: 2,
    image: IMG2,
    title: "RealEstate Video Ads.. SOON!",
    facebook: "https://www.glenntorres.media/",
    demo: "https://www.glenntorres.media/",
  },
  {
    id: 3,
    image: IMG3,
    title: "RealEstate Video Content.... SOOON!",
    facebook: "https://www.glenntorres.media/",
    demo: "https://www.glenntorres.media/",
  },
  {
    id: 4,
    image: IMG4,
    title: "YouTube Content .....SOOON!",
    facebook: "https://www.glenntorres.media/",
    demo: "https://www.glenntorres.media/",
  },
  {
    id: 5,
    image: IMG5,
    title: "RealEstate Video Ads...SOON!",
    facebook: "https://www.glenntorres.media/",
    demo: "https://www.glenntorres.media/",
  },
  {
    id: 6,
    image: IMG6,
    title: "YouTube Video Content...SOOO!",
    facebook: "https://facebook.com",
    demo: "https://www.glenntorres.media/",
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
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
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
