import React from 'react'
import { Rnd } from 'react-rnd'
import TernimalWindow from './TernimalWindow'

const Resume = () => {
  return (

    <TernimalWindow width={450} height={420} x={170} y={110} title="zia@portfolio:~" windowName ="resume" >
      <div className='w-[80%] h-full   flex flex-col  '>
        
        <iframe className='flex-1 ' src="/resume.pdf" frameborder="0"></iframe>
      </div>
    </TernimalWindow>

  )
}

export default Resume
