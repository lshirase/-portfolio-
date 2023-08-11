import React from 'react'
import SwiperCore from 'swiper'
import { Mousewheel, FreeMode } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import CarouselItem from './CarouselItem'

import tulip from '@/images/graphics/1/tulipfull.jpg'
import cherub from '@/images/graphics/1/cherubv2.jpg'
import sign from '@/images/graphics/1/sign.jpg'
import sabina from '@/images/graphics/1/card.jpg'

import melissacard from '@/images/graphics/2/bluecard.jpg'

SwiperCore.use([Mousewheel, FreeMode])
const millcrossMerch = [tulip, sabina, cherub, sign]
const melissa = [melissacard]

const HorizontalScroll = ({ items }) => {
  return (
    <Swiper
      direction="horizontal"
      slidesPerView={1}
      spaceBetween={5}
      mousewheel
      freeMode
      centeredSlides={false}
      // style={{ height: '100%', width: 'auto' }}
      breakpoints={{
        768: {
          slidesPerView: 'auto',
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: '2.2',
        },
        1280: {
          slidesPerView: '3.2',
          spaceBetween: 10,
        },
        1536: {
          slidesPerView: '4.2',
          spaceBetween: 10,
        },
      }}
    >
      {/* {items.map((item, index) => ( */}
      <SwiperSlide>
        <CarouselItem
          title="Millcross, Various Designs"
          content="Your content here"
          images={millcrossMerch}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem title="Business Card" images={melissa} />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          images={millcrossMerch}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          images={millcrossMerch}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          images={millcrossMerch}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          images={millcrossMerch}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default HorizontalScroll
