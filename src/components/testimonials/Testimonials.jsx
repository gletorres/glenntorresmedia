import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.png";
import AVTR4 from "../../assets/avatar4.png";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Tooltool",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste inventore quidem id. Quam obcaecati tenetur, voluptatum id tempore esse quasi delectus voluptatem quaerat iusto soluta voluptas cum, nulla vero facere",
  },
  {
    avatar: AVTR2,
    name: "Glenn Torres",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste inventore quidem id. Quam obcaecati tenetur, voluptatum id tempore esse quasi delectus voluptatem quaerat iusto soluta voluptas cum, nulla vero facere",
  },
  {
    avatar: AVTR3,
    name: "Torres Glenn P",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste inventore quidem id. Quam obcaecati tenetur, voluptatum id tempore esse quasi delectus voluptatem quaerat iusto soluta voluptas cum, nulla vero facere",
  },
  {
    avatar: AVTR4,
    name: "Aisa Torres",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste inventore quidem id. Quam obcaecati tenetur, voluptatum id tempore esse quasi delectus voluptatem quaerat iusto soluta voluptas cum, nulla vero facere",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ el: ".swiper-pagination", clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="myavatar" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
