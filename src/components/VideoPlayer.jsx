// import React, { useState } from 'react'

// const videos = ['/magic2.webm', '/tulip2.webm', '/dinho1.webm', '/tiger3.webm']

// const VideoPlayer = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [src, setSrc] = useState(videos[currentIndex])

//   const handleClick = () => {
//     setCurrentIndex((currentIndex + 1) % videos.length)
//     setSrc(videos[(currentIndex + 1) % videos.length])
//   }

//   return (
//     <video src={src} autoPlay muted loop onClick={handleClick} preload="auto" />
//   )
// }

// export default VideoPlayer

import React, { useState, useEffect } from 'react'

const videos = ['/magic2.webm', '/tulip2.webm', '/dinho1.webm', '/tiger3.webm']

const VideoPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [src, setSrc] = useState(videos[currentIndex])
  const [isLoading, setIsLoading] = useState(false)
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
    <div>
      <video src={src} autoPlay muted loop onClick={handleClick} width="400" height="400"/>
    </div>
  )
}

export default VideoPlayer
