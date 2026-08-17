import React, { useState, useEffect } from 'react'
import { playType } from '../utils/audio'

const Typewriter = ({ text, delay = 35 }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    setDisplayedText('')
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        const char = text.charAt(index)
        setDisplayedText(prev => prev + char)
        // Play audio only for non-space characters
        if (char !== ' ') {
          playType()
        }
        index++
      } else {
        clearInterval(timer)
      }
    }, delay)

    return () => clearInterval(timer)
  }, [text, delay])

  return <span>{displayedText}</span>
}

export default Typewriter
