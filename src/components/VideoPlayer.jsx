import React, { useState, useEffect } from 'react'

const videos = ['/magic2.webm', '/tulip2.webm', '/dinho1.webm', '/tiger3.webm']

const VideoPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * 4)
  )
  const [isLoaded, setIsLoaded] = useState(false)
  const src = videos[currentIndex]

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  useEffect(() => {
    const nextVideo = document.createElement('video')
    nextVideo.src = videos[(currentIndex + 1) % videos.length]
    nextVideo.preload = 'auto'

    nextVideo.addEventListener('canplaythrough', () => {
      setIsLoaded(true)
      nextVideo.remove()
    })

    document.body.appendChild(nextVideo)

    return () => {
      nextVideo.remove()
    }
  }, [currentIndex])

  return (
    <div className="w-full pt-4 sm:w-1/2 md:w-1/2 lg:w-1/4">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onClick={handleClick}
        type="video/webm"
      />
    </div>
  )
}

export default VideoPlayer
