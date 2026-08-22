import React from 'react'
import { playBlip } from '../utils/audio'

const skills = [
  ['JavaScript', 84],
  ['React', 76],
  ['CSS', 85],
  ['Node', 71],
]

const bars = [35, 70, 45, 85, 55, 95, 65, 80, 50, 90, 60, 75]

const themes = [
  { id: 'violet', name: 'PINK / VIOLET' },
  { id: 'green', name: 'GREEN' },
  { id: 'amber', name: 'AMBER' },
  { id: 'cyan', name: 'SILVER / CYAN' }
]

const Sidebar = ({ activePanel, setActivePanel, theme, setTheme }) => {
  return (
    <aside className="relative flex w-full md:w-[24%] flex-col gap-4 md:gap-6 overflow-hidden bg-bg-base p-3 md:p-4 font-mono border-b md:border-b-0 md:border-r border-violet-500/20 retro-grid flex-shrink-0">
      
      {/* Outer Glow Container */}
      <div className="flex-grow flex flex-col gap-4 md:gap-6 border border-violet-500/20 bg-bg-panel/85 backdrop-blur-md rounded shadow-[0_0_24px_rgba(139,92,246,0.15)] p-3 md:p-4 overflow-y-auto">
        
        {/* Header section */}
        <header className="border-b border-violet-500/20 pb-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-[0.3em] text-violet-400/60 uppercase">
              SYSTEM://PORTFOLIO
            </p>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full border border-violet-500/30 bg-violet-950/80" />
              <span className="w-1.5 h-1.5 rounded-full border border-violet-500/30 bg-violet-500/50 animate-pulse" />
            </div>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-violet-50 font-bold tracking-wide">
            root@portfolio:~<span className="animate-pulse text-violet-400">_</span>
          </p>
        </header>

        {/* Activity Monitor Section */}
        <section className="hidden md:block">
          <div className="mb-2.5 flex justify-between items-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.4)]">
              [ ACTIVITY ]
            </h2>

            <span className="flex items-center gap-1.5 text-[9px] text-violet-300 tracking-wider">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
              </span>
              LIVE
            </span>
          </div>

          <div className="flex h-[110px] items-end gap-1 overflow-hidden border border-violet-500/15 bg-bg-inner p-3 rounded shadow-inner">
            {bars.map((height, i) => (
              <span
                key={i}
                className="w-full bg-violet-400/80 rounded-t-sm drop-shadow-[0_0_6px_rgba(167,139,250,0.5)]"
                style={{
                  height: `${height}%`,
                  animation: `pulse 1s ease-in-out ${i * -0.1}s infinite alternate`,
                }}
              />
            ))}
          </div>
        </section>

        {/* Skills Level Section */}
        <section className="hidden md:block">
          <h2 className="mb-2.5 text-xs font-bold uppercase tracking-widest text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.4)]">
            [ SKILLS ]
          </h2>

          <div className="space-y-3.5 border border-violet-500/15 bg-bg-inner p-3.5 rounded shadow-inner">
            {skills.map(([name, level]) => (
              <div key={name}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-violet-50">
                    &gt; {name}
                  </span>

                  <span className="text-violet-400 font-bold">
                    Lv.{level}
                  </span>
                </div>

                <div className="flex gap-[2px]">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 flex-1 rounded-xs transition-colors duration-200 ${
                        i < level / 5
                          ? 'bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.6)]'
                          : 'bg-violet-950/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CRT COLOR THEME SECTION */}
        <section className="hidden md:block border-t border-violet-500/20 pt-4">
          <h2 className="mb-2.5 text-xs font-bold uppercase tracking-widest text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.4)]">
            CRT COLOR THEME
          </h2>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  playBlip();
                }}
                className={`flex items-center gap-1.5 py-1 text-left cursor-pointer uppercase font-bold tracking-wider ${
                  theme === t.id
                    ? 'text-violet-300 drop-shadow-[0_0_6px_rgba(167,139,250,0.8)]'
                    : 'text-violet-400/50 hover:text-violet-300/80'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${theme === t.id ? 'bg-violet-400 animate-ping' : 'bg-violet-950 border border-violet-500/30'}`} />
                {t.name}
              </button>
            ))}
          </div>
        </section>

        {/* Controls & Status Footer */}
        <div className="mt-0 md:mt-auto border-t border-violet-500/20 pt-3 md:pt-4">

          <div className="mb-3 text-[10px] text-violet-400/60 leading-relaxed uppercase tracking-widest hidden md:block">
            STATUS:{' '}
            <span className="text-violet-300 font-bold drop-shadow-[0_0_6px_rgba(167,139,250,0.6)]">
              ONLINE
            </span>
            <br />
            MODE:{' '}
            <span className="text-violet-300 font-bold">
              CREATIVE
            </span>
          </div>

          {/* Theme Selector for Mobile */}
          <div className="md:hidden flex items-center justify-between mb-3 border-b border-violet-500/20 pb-3">
            <span className="text-[10px] uppercase font-bold text-violet-400/60 tracking-wider">THEME:</span>
            <div className="flex gap-2 flex-wrap justify-end">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    playBlip();
                  }}
                  className={`text-[10px] uppercase font-bold px-2.5 py-1 border rounded cursor-pointer transition-all duration-150 ${
                    theme === t.id
                      ? 'border-violet-400 bg-violet-400 text-bg-base shadow-[0_0_10px_rgba(139,92,246,0.4)] font-extrabold'
                      : 'border-violet-500/30 bg-violet-950/20 text-violet-400/70 hover:border-violet-400/50 hover:text-violet-300'
                  }`}
                >
                  {t.id}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-1 gap-2">

            <button
              onClick={() => setActivePanel('about')}
              onMouseEnter={playBlip}
              className={`w-full border px-3 py-2 text-xs transition-all duration-200 cursor-pointer rounded ${
                activePanel === 'about'
                  ? 'border-violet-400 bg-violet-400 text-bg-base font-bold shadow-[0_0_14px_rgba(139,92,246,0.5)]'
                  : 'border-violet-500/30 bg-bg-active-btn/30 text-violet-300 hover:border-violet-400 hover:bg-violet-400/10 hover:shadow-[0_0_12px_rgba(139,92,246,0.2)]'
              }`}
            >
              $ hello
            </button>

            <button
              onClick={() => setActivePanel('projects')}
              onMouseEnter={playBlip}
              className={`w-full border px-3 py-2 text-xs transition-all duration-200 cursor-pointer rounded ${
                activePanel === 'projects'
                  ? 'border-violet-400 bg-violet-400 text-bg-base font-bold shadow-[0_0_14px_rgba(139,92,246,0.5)]'
                  : 'border-violet-500/30 bg-bg-active-btn/30 text-violet-300 hover:border-violet-400 hover:bg-violet-400/10 hover:shadow-[0_0_12px_rgba(139,92,246,0.2)]'
              }`}
            >
              $ work
            </button>

            <button
              onClick={() => setActivePanel('socials')}
              onMouseEnter={playBlip}
              className={`w-full border px-3 py-2 text-xs transition-all duration-200 cursor-pointer rounded ${
                activePanel === 'socials'
                  ? 'border-violet-400 bg-violet-400 text-bg-base font-bold shadow-[0_0_14px_rgba(139,92,246,0.5)]'
                  : 'border-violet-500/30 bg-bg-active-btn/30 text-violet-300 hover:border-violet-400 hover:bg-violet-400/10 hover:shadow-[0_0_12px_rgba(139,92,246,0.2)]'
              }`}
            >
              $ reach
            </button>

          </div>

        </div>

      </div>
    </aside>
  )
}

export default Sidebar