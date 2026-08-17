import React, { useState, useEffect } from 'react'
import { getSoundEnabled, setSoundEnabled, subscribeSound, playBlip } from '../utils/audio'

const TopBar = () => {
  const [soundOn, setSoundOn] = useState(getSoundEnabled())

  useEffect(() => {
    return subscribeSound((enabled) => {
      setSoundOn(enabled)
    })
  }, [])

  const handleToggle = () => {
    const nextVal = !soundOn
    setSoundEnabled(nextVal)
    if (nextVal) {
      setTimeout(() => {
        playBlip()
      }, 50)
    }
  }

  return (
    <header className="w-full border-b border-violet-400/20 bg-[#211b2b] text-violet-100 font-mono select-none">
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

        <div className="flex items-center gap-3 text-sm sm:text-base">
          <span className="text-violet-400">$</span>

          <span className="font-semibold text-violet-50">
            portfolio<span className="text-violet-400">.v1</span>
          </span>

          <span className="hidden text-violet-700 sm:inline">
            //
          </span>

          <span className="hidden text-violet-300/70 sm:inline">
            visitor_mode
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>

            <span className="text-violet-200">
              connection
            </span>

            <span className="hidden text-violet-700 sm:inline">
              :::
            </span>

            <span className="hidden text-violet-300/60 sm:inline">
              encrypted
            </span>
          </div>

          <span className="text-violet-700">
            :::
          </span>

          <button
            onClick={handleToggle}
            className={`cursor-pointer px-2 py-0.5 border text-[10px] tracking-wider uppercase transition-all duration-150 ${
              soundOn
                ? 'border-violet-400 bg-violet-400/20 text-violet-300 font-bold hover:bg-violet-400/30'
                : 'border-violet-950 bg-violet-950/20 text-violet-600/70 hover:border-violet-900 hover:text-violet-500'
            }`}
          >
            {soundOn ? '[ SOUND: ON ]' : '[ SOUND: OFF ]'}
          </button>
        </div>

      </div>
    </header>
  )
}

export default TopBar