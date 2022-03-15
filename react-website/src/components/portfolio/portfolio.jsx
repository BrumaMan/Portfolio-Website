import React from "react";
import "./portfolio.css";
import IMG1 from "../../images/Discord-bot.png";
import IMG2 from "../../images/Bank-sys.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Price Checking Discord Bot.",
    github: "https://github.com/BrumaMan/Discord-Bots",
    demo: null,
  },
  {
    id: 2,
    image: IMG2,
    title: "Banking system I made as my final assignment.",
    github: "https://github.com/BrumaMan/Banking-System",
    demo: null,
  },
  // {
  //   id: 3,
  //   image: IMG1,
  //   title: "Crypto Currency Price Checking Discord Bot",
  //   github: "https://github.com/BrumaMan/Discord-Bots",
  //   demo: null,
  // },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container portfolio__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <SwiperSlide key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {/* <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default portfolio;
