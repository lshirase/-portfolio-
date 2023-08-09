import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import tulip from '@/images/tulip.png'
import Image from 'next/image'
import Flickity from 'react-flickity-component'

function HorizontalCarousel() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Set to true when component mounts on the client side
  }, [])

  const flickityOptions = {
    wrapAround: true, // For infinite loop
    pageDots: false, // Hide default page dots
    autoPlay: 1000, // Delay between slides
    contain: true, // Fit images within the container
    prevNextButtons: false, // Hide default prev/next buttons
    dragThreshold: 15, // Increase drag sensitivity
    mouseWheel: true, // Enable mousewheel scrolling
    freeScroll: true, // Allow free scrolling
    freeScrollFriction: 0.03,
    imagesLoaded: true,
    setGallerySize: false,
  }

  return (
    <Flickity
      className={'h-96'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <Image src={tulip} alt="image from list" className="h-96 w-auto" />
      <Image src={tulip} alt="image from list" className="h-96 w-auto" />
      <Image src={tulip} alt="image from list" className="h-96 w-auto" />
      <Image src={tulip} alt="image from list" className="h-96 w-auto" />
      <Image src={tulip} alt="image from list" className="h-96 w-auto" />

      <Image src={tulip} alt="image from list" className="h-96 w-auto" />

      <Image src={tulip} alt="image from list" className="h-96 w-auto" />

      <Image src={tulip} alt="image from list" className="h-96 w-auto" />
    </Flickity>
  )
}

export default HorizontalCarousel
