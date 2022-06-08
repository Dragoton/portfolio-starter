import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Tasja from "../../img/tasja.png";
import Carbon from "../../img/carbon.png";
import LastProject from "../../img/lastproject.png";
import Louisiana from "../../img/louisiana.png";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span>RECENT PROJECTS</span>
      <span>PORTFOLIO</span>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://asgaard-fest.netlify.app/">
            <img src={LastProject} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://dragoon.dk/tasja/">
            <img src={Tasja} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://carbonfreeprojectforuni.netlify.app/">
            <img src={Carbon} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://louisianamuseum.netlify.app">
            <img src={Louisiana} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
