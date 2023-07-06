import React, { useState } from 'react'

const videos = [
  '/momagic2.mp4',
  '/motulip2.mp4',
  '/modinho1.mp4',
  '/motiger3.mp4',
]

const VideoPlayerMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [src, setSrc] = useState(videos[currentIndex])

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % videos.length)
    setSrc(videos[(currentIndex + 1) % videos.length])
  }

  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      onClick={handleClick}
      playsInline
      preload="metadata"
    />
  )
}

export default VideoPlayerMobile
