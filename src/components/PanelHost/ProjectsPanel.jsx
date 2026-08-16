import React from 'react'
import  Portfolio from '../../assets/Portfolio.png'
import  Github from '../../assets/Github.png'
import  SkillGig from '../../assets/SkillGig.png'
import Terminal from '../Terminal'
import matrix from '../../assets/matrix.jpg'

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
    <div className="border-violet-400/20 text-violet-400 relative flex-1 p-10 text-xl">
    <h1>&gt; Projects();</h1>

    <div className="grid grid-cols-2 gap-6 mt-6">
        {projects.map((project) => (
        <div key={project.id} className="flex flex-col gap-3">
        <img
          src={project.image}
          className="w-full transition-transform duration-300 ease-in-out hover:scale-102 hover:border-2"
          alt={project.title}
        />

        <a href='#' className='cursor-pointer text-violet-50'>{project.title}</a>
    </div>
        ))}
        <div className='border border-violet-400 rounded-lg bg-[#0a0f0d] p-4 max-h-45 overflow-y-auto relative'>
            <Terminal activePanel = {activePanel} setActivePanel = {setActivePanel}/>
        </div>
        
  </div>
</div>
  )
}

export default ProjectsPanel