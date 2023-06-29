import React, { useState } from 'react'

const videos = ['/magic1.webm', '/tulip.webm', '/dinho.webm', '/tiger.webm']

const VideoPlayer = () => {
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
      preload="metadata"
    />
  )
}

export default VideoPlayer
