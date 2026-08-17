import React, { useState, useEffect } from 'react'
import { playType, playSuccess } from '../utils/audio'

const lines = [
  "SWARUP-OS v2.0.4 [RETRO-KERNEL]",
  "INIT HARDWARE: GPU VIOLET-GLOW ENGINE",
  "LOADING CORE MODULES: ABOUT, PROJECTS, SOCIALS",
  "SYSTEM DIAGNOSTICS: 100% STABLE",
  "ESTABLISHING HIGH-BEAM RETRO CONNECTION...",
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
    }, 220)

    return () => clearInterval(interval)
  }, [phase])

  // Progress bar ticking
  useEffect(() => {
    if (phase !== 'loading') return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          playType()
          const next = Math.min(prev + Math.floor(Math.random() * 15 + 10), 100)
          return next
        } else {
          clearInterval(interval)
          setPhase('done')
          playSuccess()
          
          setTimeout(() => {
            setIsFadingOut(true)
            setTimeout(() => {
              onDone()
            }, 300)
          }, 500)
          return 100
        }
      })
    }, 100)

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

  const totalBlocks = 20
  const filledBlocks = Math.floor((progress / 100) * totalBlocks)
  const barString = '[' + '█'.repeat(filledBlocks) + ' '.repeat(totalBlocks - filledBlocks) + ']'

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center bg-[#0c0813] p-4 sm:p-8 font-mono text-xs text-violet-400 retro-grid select-none cursor-pointer transition-all duration-300 ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Centered Window Box to match UI */}
      <div className="w-full max-w-2xl border border-violet-500/20 bg-[#181224]/90 backdrop-blur-md rounded shadow-[0_0_30px_rgba(139,92,246,0.25)] overflow-hidden flex flex-col">
        
        {/* Title Bar */}
        <div className="flex justify-between items-center bg-violet-950/50 border-b border-violet-500/20 px-4 py-2.5 text-xs">
          <span className="text-violet-300 font-bold tracking-widest">[ SYSTEM_INITIALIZE.EXE ]</span>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-950/80" />
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-950/80" />
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-500/60 animate-pulse" />
          </div>
        </div>

        {/* Boot Terminal Output */}
        <div className="p-6 space-y-4">
          <div className="space-y-1.5">
            {visibleLines.map((line, idx) => (
              <p key={idx} className="leading-relaxed text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.3)]">
                &gt; {line}
              </p>
            ))}
          </div>

          {/* Progress Bar Container */}
          {phase !== 'lines' && (
            <div className="space-y-2 pt-2 border-t border-violet-500/10">
              <p className="leading-relaxed text-violet-400/70">
                &gt; MOUNTING VIOLET UI INTERFACE...
              </p>
              <p className="leading-relaxed text-sm tracking-widest font-bold text-violet-200 drop-shadow-[0_0_10px_rgba(167,139,250,0.8)]">
                {barString} {progress}%
              </p>
            </div>
          )}

          {/* Success Status */}
          {phase === 'done' && (
            <p className="animate-pulse text-sm text-violet-300 font-bold mt-3 tracking-widest drop-shadow-[0_0_12px_rgba(167,139,250,0.9)]">
              &gt; ACCESS GRANTED. LAUNCHING WORKSPACE...
            </p>
          )}
        </div>

        {/* Footer info inside window */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#0f0a1c] border-t border-violet-500/15 px-4 py-2 text-violet-400/60 text-[10px] gap-2">
          <span className="animate-pulse tracking-wider">
            [ CLICK OR PRESS ANY KEY TO SKIP BOOT ]
          </span>
          <span className="tracking-widest">
            SESSION_ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
          </span>
        </div>

      </div>
    </div>
  )
}

export default BootScreen