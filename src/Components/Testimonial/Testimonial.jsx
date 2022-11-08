import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Home from "../../img/home.png";
import Work from "../../img/work.png";
import Education from "../../img/education.png";
import Fun from "../../img/fun.png";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: Home,
      review:
        "I was born in Zagreb, Croatia, and I have been calling Copenhagen my home for the last two and a half years. Along with Production technology, I also finished a fifth module at Danish language school. Rødgrød med fløde.",
    },
    {
      img: Work,
      review:
        "Of the relevant jobs, I worked as a public relations specialist and journalist. In Denmark along with my education, I also work as a floral assistant in the flower shop, and occasionally in a small coffee shop.",
    },
    {
      img: Education,
      review:
        "From my previous education, I have a Master's degree in Industrial Design from the Faculty of Textile Technology Zagreb. I was awarded with prize for the best innovation in sport and recreation at INOVA 2018.",
    },
    {
      img: Fun,
      review:
        "In my free time, I like to relax with painting and art crafting. I use Danish rainless days for cycling or walks by the sea, and the rainy ones for reading books, Netflix and solving sudoku.",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>MORE</span>
        <span>ABOUT ME</span>
        <div className="blur t-blur1" style={{ background: "#ADD8E5" }}></div>
        <div className="blur t-blur2" style={{ background: "#ADD8E5" }}></div>
      </div>
      {/*Swipper */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial" id="Testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
