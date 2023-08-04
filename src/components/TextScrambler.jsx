import React, { useState, useEffect } from 'react'

const TextScrambler = ({ texts }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [scrambledText, setScrambledText] = useState(texts[currentTextIndex])

  useEffect(() => {
    let intervalId
    const scrambleText = (text) => {
      const words = text.split(' ')
      const scrambledWords = words.map((word) => {
        const scrambledWord = word
          .split('')
          .map((char) => getRandomCharacter())
          .join('')

        return `${scrambledWord} `
      })

      return scrambledWords.join('')
    }
    if (isHovered) {
      intervalId = setInterval(() => {
        setScrambledText(scrambleText(texts[currentTextIndex]))
      }, 30)
    } else {
      clearInterval(intervalId)
      setScrambledText(texts[currentTextIndex])
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [texts, currentTextIndex, isHovered])

  const getRandomCharacter = () => {
    const characters =
      //   'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      '*1+3-4^5>6<7~8=9abcVWXYZ '
    const randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
  }

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-cell"
    >
      {scrambledText}
    </span>
  )
}

export default TextScrambler
