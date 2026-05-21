import React, { useContext } from 'react'
import { Rnd } from 'react-rnd'
import WindowContext, { Context } from '../WindowContext'

// Props ko lowercase kiya taake koi confusion na ho
const TernimalWindow = ({ children, width = 320, height = 250, x = 200, y = 100, title = "Zia Ul Islam" ,windowName }) => {
  const {toggleWindow,closeWindow}=useContext(Context)

  return (
    <Rnd
      default={{
        x: x,
        y: y,
        width: width,
        height: height,
      }}
      minWidth={200}
      minHeight={150}
      bounds="window"
      dragHandleClassName="drag-handle"
    >
      {/* Main Layout Container */}
      <div className='bg-[#222222] h-full flex flex-col overflow-hidden rounded-lg shadow-xl border border-[#353735]'>

        {/* Navigation bar (Drag Handle) */}
        <nav className='drag-handle hover:cursor-grab active:cursor-grabbing flex items-center gap-2 bg-[#060606] text-[#A8A8A8] p-2 shrink-0 select-none'>
          <div className='w-3 h-3 bg-red-500 rounded-full hover:cursor-auto' onClick={()=> closeWindow(windowName)} ></div>
          <div className='w-3 h-3 bg-[#F7F751] rounded-full'></div>
          <div className='w-3 h-3 bg-[#6EE40F] rounded-full'></div>
          <p className='ml-2 text-xs font-mono'>{title}</p>
          <p className='ml-auto text-xs'>Drage from here</p>
        </nav>

        {/* FIX: Children ab is content div ke ANDAR hain, ab scrollbar 100% kaam karega */}
        <div className='flex-1 overflow-hidden text-[#FFFFFF] w-full h-full p-0'>
          
          {children}
          
        </div>
      </div>
    </Rnd>
  )
}

export default TernimalWindow