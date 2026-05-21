import React, { useContext } from 'react'
import { Rnd } from 'react-rnd'
import WindowContext, { Context } from '../WindowContext'

/* TERMINAL WINDOW WRAPPER: Provides draggable/resizable window with
   macOS-style traffic light buttons, z-index stacking, and open animation.
   - Traffic lights now show X / - / expand symbols on hover (like real macOS)
   - Z-index is managed via WindowContext so clicking brings window to front
   - Window opens with a smooth scale+fade animation */
const TernimalWindow = ({ children, width = 320, height = 250, x = 200, y = 100, title = "Zia Ul Islam" ,windowName }) => {
  const {toggleWindow, closeWindow, bringToFront, getZIndex}=useContext(Context)

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
      /* Z-INDEX: Each window gets its stacking order from context.
         Clicking the window calls bringToFront to raise it above others. */
      style={{ zIndex: getZIndex(windowName) }}
      onMouseDown={() => bringToFront(windowName)}
    >
      {/* Main Layout Container with window-open animation class */}
      <div className='bg-[#222222] h-full flex flex-col overflow-hidden rounded-lg shadow-2xl border border-[#353735] window-open'>

        {/* Navigation bar (Drag Handle) */}
        <nav className='drag-handle hover:cursor-grab active:cursor-grabbing flex items-center gap-2 bg-[#060606] text-[#A8A8A8] px-3 py-2 shrink-0 select-none'>
          {/* TRAFFIC LIGHT BUTTONS: macOS-style close (red), minimize (yellow), maximize (green).
             On hover, they reveal their symbols — X, −, and + — just like real macOS. */}
          <div className='flex items-center gap-2 group/buttons'>
            {/* Close button — shows X on hover */}
            <div
              className='w-3 h-3 bg-red-500 rounded-full hover:cursor-auto flex items-center justify-center group-hover/btn-close:bg-red-500'
              onClick={() => closeWindow(windowName)}
            >
              <svg className='w-2 h-2 opacity-0 group-hover/buttons:opacity-100 text-red-900' viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="2" y1="2" x2="10" y2="10" />
                <line x1="10" y1="2" x2="2" y2="10" />
              </svg>
            </div>
            {/* Minimize button — shows − on hover */}
            <div className='w-3 h-3 bg-[#F7F751] rounded-full flex items-center justify-center'>
              <svg className='w-2 h-2 opacity-0 group-hover/buttons:opacity-100 text-yellow-900' viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="2" y1="6" x2="10" y2="6" />
              </svg>
            </div>
            {/* Maximize button — shows + on hover */}
            <div className='w-3 h-3 bg-[#6EE40F] rounded-full flex items-center justify-center'>
              <svg className='w-2 h-2 opacity-0 group-hover/buttons:opacity-100 text-green-900' viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="6" y1="2" x2="6" y2="10" />
                <line x1="2" y1="6" x2="10" y2="6" />
              </svg>
            </div>
          </div>
          <p className='ml-2 text-xs font-mono'>{title}</p>
          {/* Removed "Drage from here" — the drag handle is the entire nav bar, no label needed */}
        </nav>

        {/* Content area: children are inside this scrollable div */}
        <div className='flex-1 overflow-hidden text-[#FFFFFF] w-full h-full p-0'>
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default TernimalWindow