import React from 'react'

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-[28%] flex-col gap-10 bg-[#211b2b] p-8">


      <section>
        <h1 className="mb-4 font-mono text-lg font-bold uppercase tracking-widest text-violet-400">
          activity
        </h1>

        <div className="flex h-[140px] w-full items-end justify-center gap-[8px] overflow-hidden rounded-xl bg-[#181818] px-4 pt-6">

          <span
            className="bar w-[30px] bg-violet-400"
            style={{
              animationDelay: '0s',
              animationDuration: '0.9s',
            }}
          />

          <span
            className="bar w-[30px] bg-violet-400"
            style={{
              animationDelay: '-0.1s',
              animationDuration: '0.8s',
            }}
          />

          <span
            className="bar w-[30px] bg-violet-400"
            style={{
              animationDelay: '-0.2s',
              animationDuration: '0.9s',
            }}
          />

          <span
            className="bar w-[30px] bg-violet-400"
            style={{
              animationDelay: '-0.3s',
              animationDuration: '0.8s',
            }}
          />

          <span
            className="bar w-[30px] bg-violet-400"
            style={{
              animationDelay: '-0.4s',
              animationDuration: '0.83s',
            }}
          />

          <span
            className="bar w-[30px] bg-violet-400"
            style={{
              animationDelay: '-0.5s',
              animationDuration: '0.94s',
            }}
          />

          <span
            className="bar w-[30px] bg-violet-400"
            style={{
              animationDelay: '-0.6s',
              animationDuration: '0.67s',
            }}
          />

          <span
            className="bar w-[30px] bg-violet-400"
            style={{
              animationDelay: '-0.7s',
              animationDuration: '0.85s',
            }}
          />

        </div>
      </section>


      <section>
        <h1 className="mb-5 font-mono text-lg font-bold uppercase tracking-widest text-violet-400">
          skills
        </h1>

        <div className="flex flex-col gap-5">

          {/* JavaScript */}
          <div>
            <div className="mb-2 flex justify-between font-mono text-sm">
              <span className="text-violet-50">JavaScript</span>
              <span className="text-violet-400">Lv. 84</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-violet-950">
              <div className="h-full w-[84%] rounded-full bg-violet-400" />
            </div>
          </div>


          {/* React */}
          <div>
            <div className="mb-2 flex justify-between font-mono text-sm">
              <span className="text-violet-50">React</span>
              <span className="text-violet-400">Lv. 76</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-violet-950">
              <div className="h-full w-[76%] rounded-full bg-violet-400" />
            </div>
          </div>


          {/* CSS */}
          <div>
            <div className="mb-2 flex justify-between font-mono text-sm">
              <span className="text-violet-50">CSS</span>
              <span className="text-violet-400">Lv. 85</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-violet-950">
              <div className="h-full w-[85%] rounded-full bg-violet-400" />
            </div>
          </div>

        </div>
      </section>

      <div className='bg-violet-400  flex items-center justify-center rounded absolute bottom-40 left-35 cursor-pointer p-3 text-2xl text-violet-50 tracking-tight font-semibold'>
        <h1>Say Hello!</h1>
      </div>

    </aside>
  )
}

export default Sidebar