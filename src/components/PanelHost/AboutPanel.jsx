import React from 'react'
import matrix from '../../assets/matrix.jpg'
import Terminal from '../Terminal'
import { playBlip } from '../../utils/audio'

const glow = 'drop-shadow-[0_0_8px_rgba(167,139,250,0.75)]'
const strongGlow = 'drop-shadow-[0_0_12px_rgba(167,139,250,0.9)]'

const AboutPanel = ({activePanel, setActivePanel}) => {
  return (
    <div className="relative flex-1 overflow-hidden font-mono text-xl text-violet-400">


      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full overflow-y-auto p-10 space-y-7">

        <div className="flex items-center gap-3">
          <h1 className={`text-violet-400 ${glow}`}>
            &gt; hello_world("print");
          </h1>

          <span
            className={`w-2 h-2 bg-violet-400 animate-pulse ${strongGlow}`}
          />
        </div>

        <div className="max-w-4xl text-violet-50 leading-relaxed">
          <p>
            I’m{' '}
            <span className={`font-bold text-violet-400 ${strongGlow}`}>
              Swarup Shakya
            </span>{' '}
            — I turn caffeine, curiosity, and messy ideas into clean code
            and digital experiences that hit different.
          </p>

          <p className={`mt-2 text-violet-400 ${glow}`}>
            Full-stack by craft, builder by nature.
          </p>
        </div>

        <div>
          <h2 className={`mb-3 ${glow}`}>
            [CONNECT]
          </h2>

          <div className="space-y-2 text-base">
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
          <h2 className={`mb-3 ${glow}`}>
            [CORE_INTERESTS]
          </h2>

          <p className="max-w-4xl text-base leading-relaxed text-violet-50">
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

        <div className="w-full h-px bg-violet-400/20" />


        <Terminal activePanel = {activePanel} setActivePanel = {setActivePanel}/>
      </div>


    </div>

  )
}

export default AboutPanel