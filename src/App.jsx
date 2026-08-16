import React from 'react'
import TopBar from './components/TopBar'
import scanlines from './assets/scanlines.png'
import  Sidebar  from './components/Sidebar'
import AboutPanel from './components/AboutPanel'
import ProjectsPanel from './components/PanelHost/ProjectsPanel'


const App = () => {
  return (
    <div className="relative min-h-screen bg-neutral-900 overflow-x-hidden">
      <img 
        src={scanlines} 
        className="fixed inset-0 w-full h-full object-cover pointer-events-none z-50 opacity-25" 
        alt=""
      />
      
      <TopBar />
      <div className='flex h-screen'>
        <Sidebar />
        {/* <AboutPanel /> */}
        <ProjectsPanel />
      </div>
      
      
    </div>
  )
}

export default App