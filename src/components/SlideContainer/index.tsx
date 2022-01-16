import { Section } from "./styles"
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from "next/image"
import logoteste from "../../../public/image/sliderr-logo.svg"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { A11y, Navigation, Pagination } from "swiper";
import Link from "next/link";

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
          <Link href="#">
            <a target="_blank">
              <Image src={logoteste} alt="" />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="image">
          <Link href="#">
            <a target="_blank">
              <Image src={logoteste} alt="" />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="image">
          <Link href="#">
            <a target="_blank">
              <Image src={logoteste} alt="" />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="image">
          <Link href="#">
            <a target="_blank">
              <Image src={logoteste} alt="" />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="image">
          <Link href="#">
            <a target="_blank">
              <Image src={logoteste} alt="" />
            </a>
          </Link>
        </SwiperSlide>


      </Swiper>

    </Section>
  )
}