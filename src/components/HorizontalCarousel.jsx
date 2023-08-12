import React, { useState, useEffect } from 'react'
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

import bbposter from '@/images/graphics/bbposter.jpg'

import bbillustration from '@/images/graphics/bbill.jpg'

import mc1 from '@/images/graphics/3/mc1.jpg'
import mc2 from '@/images/graphics/3/mc2.jpg'
import mc3 from '@/images/graphics/3/mc3.jpg'
import mc4 from '@/images/graphics/3/mc4.jpg'
import mc5 from '@/images/graphics/3/mc5.jpg'
import mc6 from '@/images/graphics/3/mc6.jpg'

SwiperCore.use([Mousewheel, FreeMode])
const millcrossMerch = [tulip, sabina, cherub, sign]
const melissa = [melissacard]
const bbp = [bbposter]
const bbi = [bbillustration]
const mc = [mc1, mc2, mc3, mc4, mc5, mc6]

const HorizontalScroll = () => {
  const [isFreeMode, setIsFreeMode] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsFreeMode(window.innerWidth >= 768) // Set freeMode to false on mobile
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <Swiper
      direction="horizontal"
      slidesPerView={1}
      spaceBetween={5}
      mousewheel
      freeMode={isFreeMode}
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
          slidesPerView: '2.8',
          spaceBetween: 10,
        },
        1536: {
          slidesPerView: '3.6',
          spaceBetween: 10,
        },
      }}
    >
      {/* {items.map((item, index) => ( */}
      <SwiperSlide>
        <CarouselItem
          title="MillCross, Various Designs"
          content="A series of designs for MillCross to be used on shirts, tote bags,
          etc."
          images={millcrossMerch}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem title="Business Card" images={melissa} />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="MillCross, Coffee Bag Stickers"
          content="A series of coffee bag stickers for MillCross, to be used across their wide range of coffee offerings."
          images={mc}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem title="Beyond Baroque, Illustration" images={bbi} />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="Beyond Baroque, Poster"
          images={bbp}
          content={
            <>
              A poster for a talk at Beyond Baroque.
              <br />
              <br />
              Event description: To help further this moment of collective
              action for justice, we ask that you gather with us for a community
              talk and vigil addressing racism and police violence in the United
              States. On the west lawn of Beyond Baroque’s community garden,
              scholars, poets, and artists, including Dr. Bob Myers (UCLA), and
              Doctoral Candidate @thabisilegriffin (UCLA) will speak on the
              histories that led to this current movement, and tackle the
              pressing tasks of abolishing police and building a just new world.
              @zilcraft and @penttigram will present unique protest art
              illustrating those ideas. Water and sunscreen will be provided on
              site for all who attend. To ensure safety, we ask that you wear
              masks, and social distancing is encouraged.
            </>
          }
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default HorizontalScroll
