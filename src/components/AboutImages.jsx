import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export function AboutImages({ imageList }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length)
  }

  return (
    <Image
      src={imageList[currentImageIndex]}
      alt="image from list"
      onClick={handleImageClick}
    />
  )
}
