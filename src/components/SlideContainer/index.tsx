import { Section } from "./styles"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { A11y, Navigation, Pagination } from "swiper";

export const SliderContiner = () => {

  return (
    <Section>
      <Swiper className="carousel"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log}
      >
        <SwiperSlide className="image">
          <img src="./image/sliderr-logo.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="image">
          <img src="./image/sliderr-logo.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="image">
          <img src="./image/sliderr-logo.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="image">
          <img src="./image/sliderr-logo.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="image">
          <img src="./image/sliderr-logo.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="image">
          <img src="./image/sliderr-logo.svg" alt="" />
        </SwiperSlide>

      </Swiper>

    </Section>
  )
}