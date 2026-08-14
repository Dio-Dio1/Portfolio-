import React from 'react'
import { useState } from 'react'

const Terminal = () => {
  const [terminalPanel, setterminalPanel] = useState(true)

  const handleInput = (e) => {
    if(e.key === 'Enter'){
        const value = e.target.value;
    if(value == 'help'){
        setterminalPanel(false);
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
        color theme: To view color
        <br />
        color theme: To view color
        <br />
        color theme: To view color
        <br />
        color theme: To view color

        <div className="text-violet-50 mt-10">
          arrival@swarupOS:- $
          <input placeholder="Type a command..." className='outline-none'/>
        </div>
      </div>
    )
  )
}

export default Terminal