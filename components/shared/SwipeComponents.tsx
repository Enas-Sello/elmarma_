'use client';
// import Link from 'next/link';
import React from 'react';
import { Navigation, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider: any[] = [{}, {}, {}];

const SwipeComponents = () => {
  return (
    <Swiper
      className="bg-mainDark text-white mySwiper"
      spaceBetween={10}
      navigation={true}
      modules={[Navigation, A11y]}
      breakpoints={{
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1000: {
          slidesPerView: 3
        },
        1500: {
          slidesPerView: 4
        }
      }}>
      {Slider.map(slide => (
        <SwiperSlide key={slide.id}>
          <div className="d-flex justify-content-between align-items-center position-relative sliderAfter px-5 py-3">
            <div className="d-flex  align-items-center ">
              <div className="d-flex flex-column align-items-center m-0 text-center  ">
                {/* <img
              className="first_image"
              src={slide?.first_image || (!isRTL && slide?.teams?.away?.logo)}
              alt=""
              width={'30px'}
            /> */}
                <small>slide?.first_team</small>
                <small>!isRTL && slide?.teams?.away?.name</small>
              </div>
            </div>

            <div className="d-flex  align-items-center ">
              <div>lide?.second_result !isRTL && slide?.goals?.away</div>

              <div className="d-flex flex-column  justify-content-center align-items-center ">
                <h6 className="titel-match text-center">
                  slide?.championship_type !isRTL && slide?.league?.round
                </h6>

                <div className="text-center w-100 rounded-pill mx-4">
                  slide?.match_status
                </div>

                <div
                  style={{
                    transform: 'translateY(13px)',
                    color: '#A7A7A7'
                  }}
                  className="game_time">
                  slide?.game_time
                </div>
              </div>

              <div className="m-0  ">
                slide?.first_result !isRTL && slide?.goals?.home
              </div>
            </div>

            <div className="d-flex  align-items-center">
              <div className="d-flex flex-column align-items-center ">
                {/* <img
              className="second_image"
              src={slide?.second_image || (!isRTL && slide?.teams?.home?.logo)}
              alt=""
              width={'30px'}
            /> */}
                <small>slide?.second_team</small>
                <small>!isRTL && slide?.teams?.home?.name</small>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeComponents;
