import React, { useState } from 'react'
import Image from 'next/image'

const CarouselItem = ({ title, content, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showInfo, setShowInfo] = useState(false)

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
    console.log(showInfo)
  }

  const imageSrc = images[currentIndex]

  return (
    <div className="swiper-slide relative flex h-full w-full md:w-auto">
      <div className="flex justify-between font-ft-serif text-xs">
        <div className="flex space-x-2">
          <div className="font-ft-bold">{title}</div>
          <div>{`${currentIndex + 1} of ${images.length}`}</div>
        </div>
        {content && (
          <div onClick={toggleInfo} className="">
            {showInfo ? 'Images' : 'Info'}
          </div>
        )}
      </div>
      {showInfo ? (
        <div className="h-full bg-blue">yo</div>
      ) : (
        <div onClick={handleNext}>
          <Image src={imageSrc} alt="Image from list" className="" />
        </div>
      )}
    </div>
  )
}

export default CarouselItem
