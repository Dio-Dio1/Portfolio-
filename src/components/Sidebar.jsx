import React from 'react'

const skills = [
  ['JavaScript', 84],
  ['React', 76],
  ['CSS', 85],
  ['Node', 71],
]

const bars = [35, 70, 45, 85, 55, 95, 65, 80, 50, 90, 60, 75]

const Sidebar = () => {
  return (

    <aside className="relative flex h-screen w-[24%] flex-col gap-8 overflow-hidden bg-[#211b2b] p-6 font-mono">
      <header className="border-b border-violet-400/20 pb-4">
        <p className="text-[10px] tracking-[0.3em] text-violet-400/50">
          SYSTEM://PORTFOLIO
        </p>

        <p className="mt-2 text-sm text-violet-50">
          root@portfolio:~<span className="animate-pulse">_</span>
        </p>
      </header>

      
      <section>
        <div className="mb-3 flex justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-400">
            [ activity ]
          </h2>

          <span className="text-[9px] text-violet-400/50">
            LIVE
          </span>
        </div>

        <div className="flex h-[130px] items-end gap-1 overflow-hidden border border-violet-400/20 bg-[#181818] p-4">
          {bars.map((height, i) => (
            <span
              key={i}
              className="w-full bg-violet-400"
              style={{
                height: `${height}%`,
                animation: `pulse 1s ease-in-out ${i * -0.1}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </section>

      
      <section>
        <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-violet-400">
          [ skills ]
        </h2>

        <div className="space-y-4 border border-violet-400/20 bg-[#181818] p-4">
          {skills.map(([name, level]) => (
            <div key={name}>
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-violet-50">
                  &gt; {name}
                </span>

                <span className="text-violet-400">
                  Lv.{level}
                </span>
              </div>

              <div className="flex gap-[2px]">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 flex-1 ${
                      i < level / 5
                        ? 'bg-violet-400'
                        : 'bg-violet-950'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom */}
      <div className="mt-5 border-t border-violet-400/20 pt-5">

        <div className="mb-4 text-[10px] text-violet-400/50">
          STATUS: <span className="text-violet-400">ONLINE</span>
          <br />
          MODE: <span className="text-violet-400">CREATIVE</span>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 border border-violet-400/40 bg-violet-400/10 p-2 text-xs text-violet-400 transition hover:bg-violet-400 hover:text-[#211b2b]">
            $ hello
          </button>

          <button className="flex-1 border border-violet-400/40 bg-violet-400/10 p-2 text-xs text-violet-400 transition hover:bg-violet-400 hover:text-[#211b2b]">
            $ projects
          </button>
        </div>

        
      </div>

    </aside>
  )
}

export default Sidebar