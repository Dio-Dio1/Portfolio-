import React from 'react'
import { useState } from 'react'

const Terminal = ({activePanel, setActivePanel}) => {
  const [terminalPanel, setterminalPanel] = useState(true)

  const handleInput = (e) => {
    if(e.key === 'Enter'){
        const value = e.target.value;
    if(value == 'help'){
        setterminalPanel(false);
    }if(value == 'about'){
      setActivePanel('about')
    }if(value == 'projects'){
      setActivePanel('projects')
    }if(value == 'socials'){
      setActivePanel('socials')
    }
    }
    
  }

  return (
    terminalPanel ? (
      <div className="text-lg font-mono text-gray-400">
        Welcome to the utopia:
        <br />
        Input "help" for command guidance.

        <div className="text-violet-50 mt-10">
          arrival@swarupOS:- $
          <input placeholder="Type a command..." className='outline-none' onKeyDown={handleInput}/>
        </div>
      </div>
    ) : (
      <div className="text-sm text-violet-50">
        socials: View the social command
        <br />
        projects: View projects made
        <br />
        about: Read me 
        <br />
        journey: Walk along my journey.
        <br />

        <div className="text-violet-50 mt-10">
          arrival@swarupOS:- $
          <input placeholder="Type a command..." className='outline-none' onKeyDown={handleInput}/>
        </div>
      </div>
    )
  )
}

export default Terminal