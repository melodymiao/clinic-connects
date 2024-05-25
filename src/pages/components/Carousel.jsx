import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css';

// ACTION REQUIRED - Change the images to the images you want to insert accordingly!
import image1 from '../../assets/carousel1.jpeg'
import image2 from '../../assets/carousel2.jpeg'
import image3 from '../../assets/carousel3.jpeg'


export default function App() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={image1} alt="image1" className="slide-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="image2" className="slide-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="image3" className="slide-image" />
      </SwiperSlide>
    </Swiper>
  );
}