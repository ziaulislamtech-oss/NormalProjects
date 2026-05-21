import React from 'react'
import TernimalWindow from './TernimalWindow'

/* RESUME WINDOW: Displays the PDF resume inside a macOS-style window.
   - Removed unused Rnd import (drag/resize is handled by TernimalWindow)
   - Fixed iframe width from 80% to 100% so PDF fills the entire window area */
const Resume = () => {
  return (

    <TernimalWindow width={450} height={420} x={170} y={110} title="zia@portfolio:~" windowName ="resume" >
      {/* Changed w-[80%] to w-full — the PDF should fill the entire window */}
      <div className='w-full h-full flex flex-col'>
        <iframe className='flex-1' src="/resume.pdf" frameborder="0"></iframe>
      </div>
    </TernimalWindow>

  )
}

export default Resume
