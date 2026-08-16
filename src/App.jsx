import React from 'react'
import TopBar from './components/TopBar'
import scanlines from './assets/scanlines.png'
import  Sidebar  from './components/Sidebar'
import AboutPanel from './components/PanelHost/AboutPanel'
import ProjectsPanel from './components/PanelHost/ProjectsPanel'
import { useState } from 'react'
import SocialsPanel from './components/PanelHost/SocialsPanel'

const App = () => {
  const [activePanel, setActivePanel] = useState('about');
  return (
    <div className="relative min-h-screen bg-neutral-900 overflow-x-hidden">
      <img 
        src={scanlines} 
        className="fixed inset-0 w-full h-full object-cover pointer-events-none z-50 opacity-25" 
        alt=""
      />
      
      <TopBar />
      <div className='flex h-screen'>
        <Sidebar  activePanel = {activePanel} setActivePanel = {setActivePanel}/>
        {activePanel == 'about'? <AboutPanel activePanel = {activePanel} setActivePanel = {setActivePanel}/>: 
        activePanel === 'projects'?(
        
        <ProjectsPanel activePanel = {activePanel} setActivePanel = {setActivePanel} />): 
        activePanel === 'socials'?(
          <SocialsPanel activePanel = {activePanel} setActivePanel = {setActivePanel}/>
        ): null
        
        
        }
        
        
      </div>
      
      
    </div>
  )
}

export default App