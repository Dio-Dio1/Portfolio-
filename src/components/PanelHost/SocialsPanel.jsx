import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Terminal from '../Terminal'
import Typewriter from '../Typewriter'
import { playBlip } from '../../utils/audio'

const SocialsPanel = ({ activePanel, setActivePanel }) => {
  return (
    <div className="relative flex-1 overflow-hidden font-mono text-violet-400 bg-[#0c0813] p-4 sm:p-6 retro-grid flex flex-col">
      <div className="flex-1 flex flex-col border border-violet-500/20 bg-[#181224]/85 backdrop-blur-md rounded shadow-[0_0_24px_rgba(139,92,246,0.15)] overflow-hidden">


        <div className="flex justify-between items-center bg-violet-950/40 border-b border-violet-500/20 px-4 py-2.5 text-xs select-none">
          <span className="text-violet-300 font-bold tracking-widest">[ SOCIALS.EXE ]</span>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-950/80" />
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-950/80" />
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-500/50 animate-pulse" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">

          <div className="flex items-center gap-3 border-b border-violet-500/10 pb-4">
            <h1 className="text-xl sm:text-2xl text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.4)]">
              &gt; <Typewriter text="getInTouch();" />
            </h1>
            <span className="w-2 h-4 bg-violet-400 animate-pulse drop-shadow-[0_0_12px_rgba(167,139,250,0.6)]" />
          </div>

          <div className="border-l-2 border-violet-500/30 pl-4">
            <p className="text-sm sm:text-base text-violet-50 leading-relaxed max-w-2xl">
              Channel open. Got a project that needs a developer, an idea that needs
              some code, or simply want to talk tech? Drop a message and let's see
              where the conversation takes us.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="#"
              onMouseEnter={playBlip}
              className="flex flex-col items-center justify-center gap-3 border border-violet-500/20 bg-[#1f1630]/40 rounded px-10 py-8 transition-all duration-200 hover:border-violet-400 hover:bg-violet-400/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:scale-105 group"
            >
              <FaGithub className="h-12 w-12 text-violet-400 group-hover:text-violet-200 transition-colors duration-200" />
              <span className="text-sm font-bold text-violet-100 tracking-widest">GITHUB</span>
              <p className="text-[10px] text-violet-400/60 uppercase tracking-widest">See how I build.</p>
            </a>

            <a
              href="#"
              onMouseEnter={playBlip}
              className="flex flex-col items-center justify-center gap-3 border border-violet-500/20 bg-[#1f1630]/40 rounded px-10 py-8 transition-all duration-200 hover:border-violet-400 hover:bg-violet-400/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:scale-105 group"
            >
              <FaLinkedin className="h-12 w-12 text-violet-400 group-hover:text-violet-200 transition-colors duration-200" />
              <span className="text-sm font-bold text-violet-100 tracking-widest">LINKEDIN</span>
              <p className="text-[10px] text-violet-400/60 uppercase tracking-widest">Let's connect.</p>
            </a>
          </div>

          <p className="text-sm font-bold text-violet-400/60 tracking-widest">
            // To Build Together.
          </p>

          <div className="pt-4 border-t border-violet-500/10">
            <div className="bg-[#0f0a1c] border border-violet-500/15 p-4 rounded shadow-inner">
              <Terminal activePanel={activePanel} setActivePanel={setActivePanel} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SocialsPanel