import React from 'react'
import TopBar from './components/TopBar'
import scanlines from './assets/scanlines.png'
import Sidebar from './components/Sidebar'
import AboutPanel from './components/PanelHost/AboutPanel'
import ProjectsPanel from './components/PanelHost/ProjectsPanel'
import { useState, useEffect, useRef } from 'react'
import SocialsPanel from './components/PanelHost/SocialsPanel'
import { playSelect } from './utils/audio'
import BootScreen from './components/BootScreen'

const App = () => {
  const [isBooting, setIsBooting] = useState(() => {
    return sessionStorage.getItem('portfolio-booted') !== 'true'
  })
  const [activePanel, setActivePanel] = useState('about')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('retro-portfolio-theme') || 'violet'
  })
  const isFirstMount = useRef(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('retro-portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    playSelect();
  }, [activePanel]);

  const handleBootDone = () => {
    sessionStorage.setItem('portfolio-booted', 'true')
    setIsBooting(false)
  }

  if (isBooting) {
    return <BootScreen onDone={handleBootDone} theme={theme} />
  }

  return (
    <div className="relative h-screen overflow-hidden bg-bg-base flex flex-col transition-colors duration-300">
      <img
        src={scanlines}
        className="fixed inset-0 w-full h-full object-cover pointer-events-none z-50 opacity-25"
        alt=""
      />

      <TopBar />
      <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
        <Sidebar 
          activePanel={activePanel} 
          setActivePanel={setActivePanel} 
          theme={theme} 
          setTheme={setTheme} 
        />
        <div key={activePanel} className="flex flex-1 min-w-0 h-full md:h-full animate-panel-in">
          {activePanel == 'about' ? <AboutPanel activePanel={activePanel} setActivePanel={setActivePanel} /> :
            activePanel === 'projects' ? (

              <ProjectsPanel activePanel={activePanel} setActivePanel={setActivePanel} />) :
              activePanel === 'socials' ? (
                <SocialsPanel activePanel={activePanel} setActivePanel={setActivePanel} />
              ) : null
          }
        </div>
      </div>


    </div>
  )
}

export default App