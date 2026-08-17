import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Terminal from '../Terminal'
import { playBlip } from '../../utils/audio'

const SocialsPanel = ({activePanel, setActivePanel}) => {
  return (
    <div className="relative flex-1 overflow-hidden font-mono text-xl text-violet-400">

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 h-full overflow-y-auto p-10 flex flex-col gap-7">

        <h1 className="drop-shadow-[0_0_8px_rgba(167,139,250,0.75)]">&gt; getInTouch();</h1>

        <p className="text-lg text-violet-50 max-w-2xl leading-relaxed">
          Channel open. Got a project that needs a developer, an idea that needs
          some code, or simply want to talk tech? Drop a message and let's see
          where the conversation takes us.
        </p>

        <div className="flex flex-wrap gap-8 mt-4">
          <a
            href="#"
            onMouseEnter={playBlip}
            className="flex h-52 w-96 flex-col items-center justify-center gap-3 border border-violet-400/40 bg-[#211b2b]/60 transition-all duration-200 hover:scale-105 hover:border-violet-400 hover:bg-violet-400/10 hover:drop-shadow-[0_0_16px_rgba(167,139,250,0.3)]"
          >
            <FaGithub className="h-16 w-16 text-violet-400" />
            <span className="text-base font-bold text-violet-50">GitHub</span>
            <p className="text-xs text-violet-400/70 tracking-widest uppercase">See how I build.</p>
          </a>

          <a
            href="#"
            onMouseEnter={playBlip}
            className="flex h-52 w-96 flex-col items-center justify-center gap-3 border border-violet-400/40 bg-[#211b2b]/60 transition-all duration-200 hover:scale-105 hover:border-violet-400 hover:bg-violet-400/10 hover:drop-shadow-[0_0_16px_rgba(167,139,250,0.3)]"
          >
            <FaLinkedin className="h-16 w-16 text-violet-400" />
            <span className="text-base font-bold text-violet-50">LinkedIn</span>
            <p className="text-xs text-violet-400/70 tracking-widest uppercase">Let's connect.</p>
          </a>
        </div>

        <p className="text-lg font-bold text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.75)]">
          // To Build Together.
        </p>

        <div className="w-full h-px bg-violet-400/20" />

        <Terminal activePanel={activePanel} setActivePanel={setActivePanel}/>

      </div>
    </div>
  )
}

export default SocialsPanel