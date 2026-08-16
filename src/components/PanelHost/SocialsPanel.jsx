import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Terminal from '../Terminal'

const SocialsPanel = ({activePanel, setActivePanel}) => {
  return (
    <div className="relative flex-1 space-y-4 border-violet-400/20 p-10 text-xl text-violet-400">
      <h1>&gt; getInTouch();</h1>

      <p className="mt-10 text-lg text-violet-50">
        Channel open. Got a project that needs a developer, an idea that needs
        some code, or simply want to talk tech? Drop a message and let’s see
        where the conversation takes us.
      </p>

      <div className="mt-20 flex flex-col items-center gap-10">

        <div className="flex flex-wrap justify-center gap-10">
          <a
            href="#"
            className="flex h-55 w-100 flex-col items-center justify-center gap-1 rounded-2xl border border-violet-400/40 py-1 transition hover:scale-102 hover:border-violet-400 hover:bg-violet-400/5"
          >
            <FaGithub className="h-25 w-25 text-violet-400" />

            <span className="text-violet-50">
              GitHub
            </span>

            <p className="text-sm text-gray-400">
              See how I build.
            </p>
          </a>

          <a
            href="#"
            className="flex h-55 w-100 flex-col items-center justify-center gap-1 rounded-2xl border border-violet-400/40 py-1 transition hover:scale-102 hover:border-violet-400 hover:bg-violet-400/5"
          >
            <FaLinkedin className="h-25 w-25 text-violet-400" />

            <span className="text-violet-50">
              LinkedIn
            </span>

            <p className="text-sm text-gray-400">
              Let’s connect.
            </p>
          </a>
        </div>

        <p className="text-center text-2xl font-bold text-violet-400">
          To Build Together.
        </p>
        
      </div>
      <div className="w-full h-px bg-violet-400/20" />
      <Terminal activePanel = {activePanel} setActivePanel = {setActivePanel}/>
    </div>
  )
}

export default SocialsPanel