import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// Import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Install modules
SwiperCore.use([Navigation, Pagination]);

const Swip = () => {
  return <div>Swiper</div>;
};

export default Swip;
