import React from 'react';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function App() {
  return (
    <>
      <h1 className="text">fsdfsdf</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="slider_box"
      >
        <SwiperSlide className="slider">
          <article className="article">
            <img
              src="./images/naturale.jpg"
              alt=""
              width={300}
              className="img"
            />
            <div>
              <p className="text_p">price</p>
              <p className="text_p">description</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <article className="article">
            <img
              src="./images/naturale.jpg"
              alt=""
              width={300}
              className="img"
            />
            <div>
              <p className="text_p">price</p>
              <p className="text_p">description</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <article className="article">
            <img
              src="./images/naturale.jpg"
              alt=""
              width={300}
              className="img"
            />
            <div>
              <p className="text_p">price</p>
              <p className="text_p">description</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <article className="article">
            <img
              src="./images/naturale.jpg"
              alt=""
              width={300}
              className="img"
            />
            <div>
              <p className="text_p">price</p>
              <p className="text_p">description</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <article className="article">
            <img
              src="./images/naturale.jpg"
              alt=""
              width={300}
              className="img"
            />
            <div>
              <p className="text_p">price</p>
              <p className="text_p">description</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <article className="article">
            <img
              src="./images/naturale.jpg"
              alt=""
              width={300}
              className="img"
            />
            <div>
              <p className="text_p">price</p>
              <p className="text_p">description</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <article className="article">
            <img
              src="./images/naturale.jpg"
              alt=""
              width={300}
              className="img"
            />
            <div>
              <p className="text_p">price</p>
              <p className="text_p">description</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <article className="article">
            <img
              src="./images/naturale.jpg"
              alt=""
              width={300}
              className="img"
            />
            <div>
              <p className="text_p">price</p>
              <p className="text_p">description</p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <article className="article">
            <img
              src="./images/naturale.jpg"
              alt=""
              width={300}
              className="img"
            />
            <div>
              <p className="text_p">price</p>
              <p className="text_p">description</p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
