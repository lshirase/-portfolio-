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

SwiperCore.use([Navigation, Pagination, Scrollbar, Mousewheel])
const imageList = [me1, clyde1, me2, hold, red1, me3, cat, red2, me4, clyde2]

const HorizontalScroll = ({ items }) => {
  return (
    <Swiper
      direction="horizontal"
      slidesPerView={2}
      spaceBetween={0}
      mousewheel
      navigation
      style={{ height: '100%' }}
      loop
    >
      {/* {items.map((item, index) => ( */}
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          img={imageList[1]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          img={imageList[2]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          img={imageList[3]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          img={imageList[4]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          img={imageList[1]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          img={imageList[2]}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="The Brand Identity Posters"
          content="Your content here"
          img={imageList[3]}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default HorizontalScroll
