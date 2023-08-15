import React, { useState, useEffect } from 'react'
import SwiperCore from 'swiper'
import { Mousewheel, FreeMode } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import CarouselItem from './CarouselItem'

// import tulip from '@/images/graphics/1/tulipfull.jpg'
// import cherub from '@/images/graphics/1/cherubv2.jpg'
// import sign from '@/images/graphics/1/sign.jpg'
// import sabina from '@/images/graphics/1/card.jpg'

// import melissacard from '@/images/graphics/2/bluecard.jpg'

// import bbposter from '@/images/graphics/bbposter.jpg'

// import bbillustration from '@/images/graphics/bbill.jpg'

// import mc1 from '@/images/graphics/3/mc1.jpg'
// import mc2 from '@/images/graphics/3/mc2.jpg'
// import mc3 from '@/images/graphics/3/mc3.jpg'
// import mc4 from '@/images/graphics/3/mc4.jpg'
// import mc5 from '@/images/graphics/3/mc5.jpg'
// import mc6 from '@/images/graphics/3/mc6.jpg'

SwiperCore.use([Mousewheel, FreeMode])
// const millcrossMerch = [tulip, sabina, cherub, sign]
// const melissa = [melissacard]
// const bbp = [bbposter]
// const bbi = [bbillustration]
// const mc = [mc1, mc2, mc3, mc4, mc5, mc6]

const millcrossMerch = [
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801116/portfolio/tulipfull_qsubhd.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801116/portfolio/card_ozmgfc.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801116/portfolio/cherubv2_czphz2.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801116/portfolio/sign_eivln1.jpg',
]
const melissa = [
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801109/portfolio/bluecard_r1fgpw.jpg',
]
const bbp = [
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801092/portfolio/bbposter_pfv8cw.jpg',
]
const bbi = [
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801092/portfolio/bbill_cghero.jpg',
]
const mc = [
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801103/portfolio/mc1_qdmubh.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801103/portfolio/mc2_wqou5v.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801103/portfolio/mc4_ahhbju.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801103/portfolio/mc6_plge2c.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801103/portfolio/mc3_i15vaa.jpg',
  'https://res.cloudinary.com/dkso10gnx/image/upload/v1691801103/portfolio/mc5_f3th8v.jpg',
]



const HorizontalScroll = () => {
  const [isFreeMode, setIsFreeMode] = useState(true)
  const [swiper, setSwiper] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsFreeMode(window.innerWidth >= 768)
      // setIsMobile(window.innerWidth <= 769)
    }

    handleResize()
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
      // onSlideChange={handleSlideChange}
      onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
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
          onNextSlide={() => {
            if (swiper) {
              swiper.slideNext()
            }
          }}
          isMobile={isMobile}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="Business Card"
          images={melissa}
          onNextSlide={() => {
            if (swiper) {
              swiper.slideNext()
            }
          }}
          isMobile={isMobile}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="MillCross, Coffee Bag Stickers"
          content="A series of coffee bag stickers for MillCross, to be used across their wide range of coffee offerings."
          images={mc}
          onNextSlide={() => {
            if (swiper) {
              swiper.slideNext()
            }
          }}
          isMobile={isMobile}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          title="Beyond Baroque, Illustration"
          images={bbi}
          onNextSlide={() => {
            if (swiper) {
              swiper.slideNext()
            }
          }}
          isMobile={isMobile}
        />
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
              illustrating those ideas.
            </>
          }
          onNextSlide={() => {
            if (swiper) {
              swiper.slideNext()
            }
          }}
          isMobile={isMobile}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default HorizontalScroll
