import React from 'react'
import { useState, useRef } from 'react'
import { playType, playSuccess, playBlip } from '../utils/audio'

const Terminal = ({activePanel, setActivePanel}) => {
  const [showHelp, setShowHelp] = useState(false)
  const inputRef = useRef(null)

  const handleInput = (e) => {
    if (e.key !== 'Enter' && e.key !== 'Shift' && e.key !== 'Control' && e.key !== 'Alt') {
      playType()
    }

    if (e.key === 'Enter') {
      const value = e.target.value.trim().toLowerCase()
      const validCommands = ['help', 'about', 'projects', 'socials']

      if (validCommands.includes(value)) {
        playSuccess()
      } else if (value !== '') {
        playBlip()
      }

      if (value === 'help') {
        setShowHelp(true)
      } else if (value === 'about') {
        setActivePanel('about')
        setShowHelp(false)
      } else if (value === 'projects') {
        setActivePanel('projects')
        setShowHelp(false)
      } else if (value === 'socials') {
        setActivePanel('socials')
        setShowHelp(false)
      }

      e.target.value = ''
    }
  }

  return (
    <div className="font-mono text-sm">
      {!showHelp ? (
        <p className="text-violet-400/60">
          Welcome to the utopia — type{' '}
          <span className="text-violet-400">"help"</span> for commands.
        </p>
      ) : (
        <div className="space-y-1 text-violet-300/80">
          <p><span className="text-violet-400">about</span>     — read me</p>
          <p><span className="text-violet-400">projects</span>  — view my work</p>
          <p><span className="text-violet-400">socials</span>   — get in touch</p>
        </div>
      )}

      <div className="mt-4 flex items-center gap-2 text-violet-50">
        <span className="text-violet-400/70 text-xs">arrival@swarupOS:~$</span>
        <input
          ref={inputRef}
          placeholder="type a command..."
          className="flex-1 bg-transparent outline-none placeholder-violet-400/30 text-violet-50 caret-violet-400 text-sm"
          onKeyDown={handleInput}
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    </div>
  )
}

export default Terminal