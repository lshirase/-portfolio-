import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function AboutHover({ imageList, text, link }) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    let interval

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length)
      }, 500) // Change image every 1 second (adjust as needed)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isHovered, imageList])

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  const handleClick = () => {
    setIsHovered(false)
  }
  const handleHoverOut = () => {
    setIsHovered(false)
  }

  const imageStyle = {
    position: 'fixed',
    right: 0,
    top: 0,
    display: isHovered ? 'block' : 'none',
    zIndex: 1000,
  }

  return (
    <Link
      href={link}
      passHref
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      onClick={handleClick}
      className="font-ft-italic text-xs hover:text-green"
    >
      {text}
      {isHovered && (
        <Image
          src={imageList[currentImageIndex]}
          alt="case study image"
          style={imageStyle}
          className="w-72"
        />
      )}
    </Link>
  )
}
