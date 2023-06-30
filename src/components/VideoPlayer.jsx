import React, { useState, useEffect } from 'react'

const videos = ['/magic2.webm', '/tulip2.webm', '/dinho1.webm', '/tiger3.webm']

const VideoPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * 4)
  )
  const [src, setSrc] = useState(videos[currentIndex])
  const nextIndex = (currentIndex + 1) % videos.length
  const nextSrc = videos[nextIndex]

  const handleClick = () => {
    setCurrentIndex(nextIndex)
  }

  useEffect(() => {
    const nextVideo = document.createElement('video')
    nextVideo.src = nextSrc
    nextVideo.preload = 'auto'

    nextVideo.addEventListener('loadeddata', () => {
      nextVideo.remove()
      setSrc(nextSrc)
    })

    document.body.appendChild(nextVideo)

    return () => {
      nextVideo.remove()
    }
  }, [nextSrc])

  return (
    <div className="w-full pt-4 sm:w-1/2 md:w-1/2 lg:w-1/4">
      <video src={src} autoPlay muted loop onClick={handleClick} playsInline />
    </div>
  )
}

export default VideoPlayer
