import React from 'react'
import  Portfolio from '../../assets/Portfolio.png'
import  Github from '../../assets/Github.png'
import  SkillGig from '../../assets/SkillGig.png'
import Terminal from '../Terminal'
import matrix from '../../assets/matrix.jpg'
import { playBlip } from '../../utils/audio'

const ProjectsPanel = ({activePanel, setActivePanel}) => {

    const projects = 
        [{
            title: 'SkillGig - A Job Portal Website',
            image: SkillGig,
            id:1
        },

            {
                title:'Github Clone',
                image: Github,
                id:2
            },

            {
                title: 'Portfolio Website',
                image: Portfolio,
                id:3
            },
        ]
  return (
    <div className="relative flex-1 overflow-hidden font-mono text-xl text-violet-400">

      <img
        src={matrix}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.07]"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full overflow-y-auto p-10">
        <h1 className="drop-shadow-[0_0_8px_rgba(167,139,250,0.75)]">&gt; Projects();</h1>

        <div className="grid grid-cols-2 gap-6 mt-6">
          {projects.map((project) => (
            <div key={project.id} onMouseEnter={playBlip} className="flex flex-col gap-3 border border-violet-400/20 bg-[#181818]/60 p-3 transition-all duration-200 hover:border-violet-400/60 hover:bg-[#181818]/80 cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
                  alt={project.title}
                />
              </div>
              <a href='#' onMouseEnter={playBlip} className='cursor-pointer text-sm text-violet-50 hover:text-violet-300 transition-colors duration-150'>
                &gt; {project.title}
              </a>
            </div>
          ))}

          <div className='border border-violet-400/30 bg-[#0a0f0d]/80 p-4 overflow-y-auto'>
            <Terminal activePanel={activePanel} setActivePanel={setActivePanel}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectsPanel