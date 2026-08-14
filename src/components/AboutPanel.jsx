import React from 'react'
import matrix from '../assets/matrix.jpg'

const glow = 'drop-shadow-[0_0_8px_rgba(167,139,250,0.75)]'
const strongGlow = 'drop-shadow-[0_0_12px_rgba(167,139,250,0.9)]'

const AboutPanel = () => {
  return (
    <div className="relative flex-1 w-[76%] h-screen overflow-hidden font-mono text-xl text-violet-400">

      <img
        src={matrix}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.10]"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-[60%] p-10 space-y-7">

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

          <div className="space-y-1 text-base">
            <p>
              &gt; <span className="text-violet-50">link github</span>{' '}
              <a
                href="#"
                className="hover:text-violet-50 hover:drop-shadow-[0_0_10px_rgba(167,139,250,1)] transition-all"
              >
                --open
              </a>
            </p>

            <p>
              &gt; <span className="text-violet-50">link linkedin</span>{' '}
              <a
                href="#"
                className="hover:text-violet-50 hover:drop-shadow-[0_0_10px_rgba(167,139,250,1)] transition-all"
              >
                --connect
              </a>
            </p>

            <p>
              &gt; <span className="text-violet-50">link resume</span>{' '}
              <a
                href="#"
                className="hover:text-violet-50 hover:drop-shadow-[0_0_10px_rgba(167,139,250,1)] transition-all"
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

      </div>

    </div>
  )
}

export default AboutPanel