import React from 'react'
import Terminal from '../Terminal'
import Typewriter from '../Typewriter'
import { playBlip } from '../../utils/audio'

const glow = 'drop-shadow-[0_0_8px_rgba(167,139,250,0.75)]'
const strongGlow = 'drop-shadow-[0_0_12px_rgba(167,139,250,0.9)]'

const AboutPanel = ({ activePanel, setActivePanel }) => {
  return (
    <div className="relative flex-1 overflow-hidden font-mono text-violet-400 bg-[#0c0813] p-4 sm:p-6 retro-grid flex flex-col">
      <div className="flex-1 flex flex-col border border-violet-500/20 bg-[#181224]/85 backdrop-blur-md rounded shadow-[0_0_24px_rgba(139,92,246,0.15)] overflow-hidden">
        
        <div className="flex justify-between items-center bg-violet-950/40 border-b border-violet-500/20 px-4 py-2.5 text-xs select-none">
          <span className="text-violet-300 font-bold tracking-widest">[ ABOUT.EXE ]</span>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-950/80" />
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-950/80" />
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-500/50 animate-pulse" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          <div className="flex items-center gap-3 border-b border-violet-500/10 pb-4">
            <h1 className={`text-xl sm:text-2xl text-violet-300 ${glow}`}>
              &gt; <Typewriter text='hello_world("print");' />
            </h1>
            <span className={`w-2 h-4 bg-violet-400 animate-pulse ${strongGlow}`} />
          </div>

          <div className="border-l-2 border-violet-500/30 pl-4 max-w-4xl text-violet-50 text-sm sm:text-base leading-relaxed space-y-2">
            <p>
              I’m{' '}
              <span className={`font-bold text-violet-400 ${strongGlow}`}>
                Swarup Shakya
              </span>{' '}
              — I turn caffeine, curiosity, and messy ideas into clean code
              and digital experiences that hit different.
            </p>
            <p className={`text-violet-400 ${glow}`}>
              Full-stack by craft, builder by nature.
            </p>
          </div>

          <div>
            <h2 className={`text-sm sm:text-base font-bold mb-3 tracking-widest ${glow}`}>
              [CONNECT]
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p className="group">
                &gt; <span className="text-violet-50">link github</span>{' '}
                <a
                  href="#"
                  onMouseEnter={playBlip}
                  className="text-violet-400 underline-offset-4 transition-all duration-150 group-hover:text-violet-200 group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,1)] hover:underline"
                >
                  --open
                </a>
              </p>

              <p className="group">
                &gt; <span className="text-violet-50">link linkedin</span>{' '}
                <a
                  href="#"
                  onMouseEnter={playBlip}
                  className="text-violet-400 underline-offset-4 transition-all duration-150 group-hover:text-violet-200 group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,1)] hover:underline"
                >
                  --connect
                </a>
              </p>

              <p className="group">
                &gt; <span className="text-violet-50">link resume</span>{' '}
                <a
                  href="#"
                  onMouseEnter={playBlip}
                  className="text-violet-400 underline-offset-4 transition-all duration-150 group-hover:text-violet-200 group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,1)] hover:underline"
                >
                  --checkout
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className={`text-sm sm:text-base font-bold mb-3 tracking-widest ${glow}`}>
              [CORE_INTERESTS]
            </h2>
            <p className="max-w-4xl text-sm sm:text-base leading-relaxed text-violet-50">
              <span className="text-violet-400">
                Full-Stack Architecture
              </span>
              , Distributed Systems,{' '}
              <span className="text-violet-400">
                Web Performance
              </span>
              , Developer Tooling, and{' '}
              <span className="text-violet-400">
                Creative Coding
              </span>
              .
            </p>
          </div>

          {/* Terminal Container */}
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

export default AboutPanel