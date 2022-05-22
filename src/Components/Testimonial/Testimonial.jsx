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
        "I was born in Zagreb, Croatia, and I have been calling Copenhagen my home for the last two and a half years. Along with Multimedia design, I also attend a Danish language school. Rødgrød med fløde.",
    },
    {
      img: Work,
      review:
        "Of the relevant jobs, I have 6 years of work experience in sales of IT and telecommunications services to Small and medium-sized enterprises (SMEs). I worked independently, but as part of a team.",
    },
    {
      img: Education,
      review:
        "I am also educated in Crisis Management, a bachelor's degree. Some of the subjects are relevant like “Data Security” and “Computer Science” and some like “Terrorism” and “Weapons of Mass Destruction” are not.",
    },
    {
      img: Fun,
      review:
        "In my free time I like to travel, read comics and books, cook and do barbecues. Good humor is very important to me because all the other things I love do not make sense without it. And I love beer.",
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
