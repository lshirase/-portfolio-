import React from 'react'
import SwiperCore from 'swiper'
import { Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import CarouselItem from './CarouselItem'
import cat from '@/images/about/cat.jpg'
import hold from '@/images/about/climbing2.jpg'
import clyde1 from '@/images/about/clyde1.jpg'
import clyde2 from '@/images/about/clyde2.jpg'
import me1 from '@/images/about/me1.jpg'
import me2 from '@/images/about/me2.jpg'
import me3 from '@/images/about/me3.jpg'
import me4 from '@/images/about/me4.jpg'
import red1 from '@/images/about/red1.jpg'
import red2 from '@/images/about/red2.jpg'
import tulip from '@/images/graphics/1/tulipfull.jpg'

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel])
const imageList = [me1, clyde1, me2, hold, red1, me3, cat, red2, me4, clyde2]
const image = [tulip]

const HorizontalScroll = ({ items }) => {
  return (
    <Swiper
      direction="horizontal"
      slidesPerView={1}
      spaceBetween={5}
      mousewheel
      freeMode
      centeredSlides={false}
      style={{ height: 'auto' }}
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
          slidesPerView: '3.2',
          spaceBetween: 10,
        },
      }}
    >
      {/* {items.map((item, index) => ( */}
      <SwiperSlide>
        <CarouselItem
          title="Millcross, Various Designs"
          content="Your content here"
          images={image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          images={imageList}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          images={imageList}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          images={imageList}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          images={imageList}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          images={imageList}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default HorizontalScroll
