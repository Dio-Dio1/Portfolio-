import React from 'react'
import Portfolio from '../../assets/Portfolio.png'
import Github from '../../assets/Github.png'
import SkillGig from '../../assets/SkillGig.png'
import Terminal from '../Terminal'
import Typewriter from '../Typewriter'
import { playBlip } from '../../utils/audio'

const projects = [
  { 
    title: 'SkillGig — Job Portal Website', 
    image: SkillGig, 
    id: 1, 
    link: 'https://skillgig.vercel.app/'
  },
  { 
    title: 'Github Clone', 
    image: Github, 
    id: 2, 
    link: 'https://github.com/Dio-Dio1/Portfolio-' 
  },
  { 
    title: 'Portfolio Website', 
    image: Portfolio, 
    id: 3, 
    link: 'https://swarupdev.vercel.app/' 
  },
]

const ProjectsPanel = ({ activePanel, setActivePanel }) => {
  return (
    <div className="relative flex-1 overflow-hidden font-mono text-violet-400 bg-bg-base p-4 sm:p-6 retro-grid flex flex-col">
      <div className="flex-1 flex flex-col border border-violet-500/20 bg-bg-panel/85 backdrop-blur-md rounded shadow-[0_0_24px_rgba(139,92,246,0.15)] overflow-hidden">

        <div className="flex justify-between items-center bg-violet-950/40 border-b border-violet-500/20 px-4 py-2.5 text-xs select-none">
          <span className="text-violet-300 font-bold tracking-widest">[ PROJECTS.EXE ]</span>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-950/80" />
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-950/80" />
            <span className="w-2 h-2 rounded-full border border-violet-500/30 bg-violet-500/50 animate-pulse" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">

          <div className="flex items-center gap-3 border-b border-violet-500/10 pb-4">
            <h1 className="text-xl sm:text-2xl text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.4)]">
              &gt; <Typewriter text="Projects();" />
            </h1>
            <span className="w-2 h-4 bg-violet-400 animate-pulse drop-shadow-[0_0_12px_rgba(167,139,250,0.6)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playBlip}
                className="flex flex-col gap-2 border border-violet-500/20 bg-bg-active-btn/30 rounded overflow-hidden transition-all duration-200 hover:border-violet-400 hover:bg-violet-400/5 hover:shadow-[0_0_12px_rgba(139,92,246,0.15)] cursor-pointer group"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                    alt={project.title}
                  />
                </div>
                <span className="px-3 pb-3 text-xs text-violet-300 group-hover:text-white transition-colors duration-150">
                  &gt; {project.title}
                </span>
              </a>
            ))}
            
            <div className="border border-violet-500/15 bg-bg-inner rounded p-4 overflow-y-auto shadow-inner">
              <Terminal activePanel={activePanel} setActivePanel={setActivePanel} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectsPanel