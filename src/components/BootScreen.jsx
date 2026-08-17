import React, { useState, useEffect } from 'react'
import { playType, playSuccess } from '../utils/audio'

const lines = [
  "SWARUP-BIOS v1.4.2",
  "CPU: COFFEE-POWERED BUILDER @ 3.40GHz",
  "RAM: 64MB OK",
  "SYSTEM DIAGNOSTICS: STABLE",
  "CONNECTING TO PORTFOLIO SERVER...",
  "PORTFOLIO LOAD SUCCESS."
]

const BootScreen = ({ onDone }) => {
  const [visibleLines, setVisibleLines] = useState([])
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('lines') // 'lines', 'loading', 'done'
  const [isFadingOut, setIsFadingOut] = useState(false)

  // Print lines one by one
  useEffect(() => {
    if (phase !== 'lines') return

    let currentLineIndex = 0
    const interval = setInterval(() => {
      if (currentLineIndex < lines.length) {
        setVisibleLines(prev => [...prev, lines[currentLineIndex]])
        playType()
        currentLineIndex++
      } else {
        clearInterval(interval)
        setPhase('loading')
      }
    }, 250)

    return () => clearInterval(interval)
  }, [phase])

  // Progress bar ticking
  useEffect(() => {
    if (phase !== 'loading') return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          playType()
          // Increment progress randomly between 10 and 25 to keep loading brief
          const next = Math.min(prev + Math.floor(Math.random() * 15 + 10), 100)
          return next
        } else {
          clearInterval(interval)
          setPhase('done')
          playSuccess()
          
          // Wait 500ms, then trigger fade out, then call onDone after 300ms transition completes
          setTimeout(() => {
            setIsFadingOut(true)
            setTimeout(() => {
              onDone()
            }, 300)
          }, 500)
          return 100
        }
      })
    }, 120)

    return () => clearInterval(interval)
  }, [phase, onDone])

  // Skip booting on click/keypress
  useEffect(() => {
    const handleSkip = () => {
      playSuccess()
      setIsFadingOut(true)
      setTimeout(() => {
        onDone()
      }, 300)
    }
    window.addEventListener('keydown', handleSkip)
    window.addEventListener('click', handleSkip)
    return () => {
      window.removeEventListener('keydown', handleSkip)
      window.removeEventListener('click', handleSkip)
    }
  }, [onDone])

  // Calculate loading bar blocks (20 total slots)
  const totalBlocks = 20
  const filledBlocks = Math.floor((progress / 100) * totalBlocks)
  const barString = '[' + '█'.repeat(filledBlocks) + ' '.repeat(totalBlocks - filledBlocks) + ']'

  return (
    <div className={`fixed inset-0 z-50 flex flex-col justify-between bg-black p-8 font-mono text-xs text-green-500 sm:p-16 select-none cursor-pointer transition-all duration-300 ${
      isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
    }`}>
      <div className="space-y-4">
        {/* Render lines */}
        <div className="space-y-1">
          {visibleLines.map((line, idx) => (
            <p key={idx} className="leading-relaxed">
              &gt; {line}
            </p>
          ))}
        </div>

        {/* Render progress bar */}
        {phase !== 'lines' && (
          <div className="space-y-1">
            <p className="leading-relaxed text-green-600/80">
              &gt; INITIALIZING PORTFOLIO RESOURCE PACKS...
            </p>
            <p className="leading-relaxed text-sm tracking-wider font-bold">
              {barString} {progress}%
            </p>
          </div>
        )}

        {/* Success completion message */}
        {phase === 'done' && (
          <p className="animate-pulse text-sm text-green-400 font-bold mt-2">
            &gt; SYSTEM READY. BOOTING CORE...
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-green-600/60 mt-8 gap-2">
        <p className="animate-pulse text-[10px]">
          [ PRESS ANY KEY OR CLICK TO SKIP BOOT ]
        </p>
        <p className="text-[10px]">
          SESSION_ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
        </p>
      </div>
    </div>
  )
}

export default BootScreen
