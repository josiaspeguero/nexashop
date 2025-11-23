import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/carousel.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="carousel-wrapper">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide one">
          <div className="filter">
            <div className="text">
              <h2>Compra sin límites. Vive sin esperas</h2>
              <p>NexaShope Ecommerce</p>
              <Link to="/">Comprar</Link>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="slide two">
          <div className="filter">
            <div className="text">
              <h2>Más que una tienda, una experiencia.</h2>
              <p>NexaShope Ecommerce</p>
              <Link to="/">Comprar</Link>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="slide three">
          <div className="filter">
            <div className="text">
              <h2>Compras inteligentes, decisiones seguras.</h2>
              <p>NexaShope Ecommerce</p>
              <Link to="/">Comprar</Link>
            </div>
          </div>{" "}
        </SwiperSlide>
        {/* <SwiperSlide className="slide">Slide 2</SwiperSlide>
        <SwiperSlide className="slide">Slide 3</SwiperSlide>
        <SwiperSlide className="slide">Slide 4</SwiperSlide>
        <SwiperSlide className="slide">Slide 5</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
