/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Image from 'next/image'
const CarouselItem = ({ title, content, images, onNextSlide, isMobile }) => {
  const [showInfo, setShowInfo] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [tappedLastImage, setTappedLastImage] = useState(false)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  const handleNext = () => {
    if (images.length === 1) {
      onNextSlide()
    }
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
    if (!isMobile) return
    if (nextIndex === images.length - 1 && !tappedLastImage) {
      setTappedLastImage(true)
    } else if (nextIndex === 0 && tappedLastImage) {
      onNextSlide()
      setTappedLastImage(false)
    }
  }
  const currentImage = images[currentIndex]

  const cloudinaryBaseUrl = 'https://res.cloudinary.com/dkso10gnx/image/upload/'
  const transformationParams = 'q_auto'

  // Generate srcset and sizes attributes
  const srcsetSizes = [
    { width: 320, size: '320w' },
    { width: 480, size: '480w' },
    { width: 640, size: '640w' },
    { width: 800, size: '800w' },
  ]

  const imagePublicId = currentImage.split('/').pop().replace('.jpg', '')

  const imageSrcset = srcsetSizes
    .map(
      (size) =>
        `${cloudinaryBaseUrl}/${transformationParams},w_${size.width}/portfolio/${imagePublicId}.jpg ${size.size}`
    )
    .join(', ')
  return (
    <div className="swiper-slide flex">
      <div className="hidden justify-between font-ft-serif text-xs sm:flex">
        <div className="flex space-x-2 ">
          <div className="font-ft-bold">{title}</div>
          <div>{`${currentIndex + 1} of ${images.length}`}</div>
        </div>
        {content && (
          <div onClick={toggleInfo} className="cursor-pointer font-ft-italic">
            {showInfo ? 'Images' : 'Info'}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between font-ft-serif text-xs sm:hidden">
        <div className="font-ft-bold">{title}</div>

        <div className="flex flex-row justify-between space-x-2 ">
          <div>{`${currentIndex + 1} of ${images.length}`}</div>
          {content && (
            <div onClick={toggleInfo} className="cursor-pointer font-ft-italic">
              {showInfo ? 'Images' : 'Info'}
            </div>
          )}
        </div>
      </div>
      <div className="cursor-pointer" onClick={handleNext}>
        {showInfo ? (
          <div className="h-full max-w-full pt-4 font-ft-serif text-[0.75rem] sm:text-base lg:text-lg">
            {content}
          </div>
        ) : (
          <img
            srcSet={imageSrcset}
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
            src={`${cloudinaryBaseUrl}/${transformationParams}/${imagePublicId}.jpg`}
            alt="Image from list"
            loading="eager"
          />
        )}
      </div>
    </div>
  )
}

export default CarouselItem
