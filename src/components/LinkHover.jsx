import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function LinkHover({ link, imageSrc, text }) {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const img = imageSrc
  console.log(img)

  const handleHover = () => {
    setIsHovered(!isHovered)

    if (!isHovered) {
      const x = Math.random() * (window.innerWidth - 500)
      const y = Math.random() * (window.innerHeight - 500)
      setPosition({ x, y })
    }
  }

  const imageStyle = {
    position: 'absolute',
    left: position.x,
    top: position.y,
    display: isHovered ? 'block' : 'none',
    zIndex: 0,
  }

  return (
    <>
      <Link
        href={link}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        passHref
        className=""
      >
        <li>{text}</li>
      </Link>
      {isHovered && imageSrc && (
        <Image src={imageSrc} alt="case study image" style={imageStyle} />
      )}
    </>
  )
}
