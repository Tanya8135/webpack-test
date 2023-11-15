import React from 'react';
// Import Swiper React components
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
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

<div className='container'>
      <div className="box">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='rotate_slider'>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide className='rotate_slider'>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide className='rotate_slider'>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide className='rotate_slider'>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide className='rotate_slider'>
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide className='rotate_slider'>
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide className='rotate_slider'>
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide className='rotate_slider'>
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide className='rotate_slider'>
            <img
              src="https://swiperjs.com/demos/images/nature-9.jpg"
              width={100}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
    </>
  );
}
