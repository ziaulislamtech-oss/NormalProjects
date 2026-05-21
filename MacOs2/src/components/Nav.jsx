import React from 'react'
import appleIcon from  '/navbar-icons/apple.svg'
import wifiIcon from   '/navbar-icons/wifi.svg'
import DateAndTime from './DateAndTime'

/* MACOS NAVBAR: Top bar mimicking the macOS menu bar.
   - Left side: Apple logo, app name, and menu items (hoverable like real macOS)
   - Right side: System tray icons (wifi, battery, control center) + date/time
   - Items have subtle hover backgrounds to feel clickable
   - Added battery SVG and control center indicator for realism */
const Nav = () => {

  return (
    <div className='fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-xl text-white px-4 py-1 flex justify-between items-center z-50'>
      {/* LEFT SIDE: Apple logo + app menus */}
      <div className='flex gap-2 items-center'>
        <div className='hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer'>
          <img className='w-4 h-4' src={appleIcon} alt="apple icon" />
        </div>
        {/* Active app name in bold (macOS shows the focused app name bolded) */}
        <p className='text-sm font-semibold hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer'>Zia Ul Islam</p>
        <p className='text-sm font-medium text-white/80 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer'>File</p>
        <p className='text-sm font-medium text-white/80 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer'>Edit</p>
        <p className='text-sm font-medium text-white/80 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer'>View</p>
        <p className='text-sm font-medium text-white/80 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer'>Window</p>
        <p className='text-sm font-medium text-white/80 hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer'>Help</p>
      </div>
      {/* RIGHT SIDE: System tray icons + date/time */}
      <div className='flex gap-2 items-center'>
        <div className='hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer'>
          <img className='w-4 h-4' src={wifiIcon} alt="wifi icon" />
        </div>
        {/* BATTERY ICON: Simple SVG battery indicator — macOS always shows this */}
        <div className='hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer flex items-center gap-1'>
          <svg className='w-5 h-4 text-white/90' viewBox="0 0 28 14" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="0.5" y="0.5" width="23" height="13" rx="2.5" />
            <rect x="2" y="2" width="18" height="10" rx="1" fill="currentColor" opacity="0.8" />
            <path d="M25 4.5V9.5C26 9 26.5 8 26.5 7C26.5 6 26 5 25 4.5Z" fill="currentColor" opacity="0.5" />
          </svg>
        </div>
        {/* CONTROL CENTER ICON: The toggle rows icon — added in macOS Big Sur */}
        <div className='hover:bg-white/10 px-1.5 py-0.5 rounded cursor-pointer'>
          <svg className='w-4 h-4 text-white/80' viewBox="0 0 16 16" fill="currentColor">
            <circle cx="4" cy="4" r="1.5" />
            <circle cx="8" cy="4" r="1.5" />
            <circle cx="12" cy="4" r="1.5" />
            <circle cx="4" cy="8" r="1.5" />
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="12" cy="8" r="1.5" />
            <circle cx="4" cy="12" r="1.5" />
            <circle cx="8" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
          </svg>
        </div>
        <DateAndTime/>
      </div>
    </div>
  )
}

export default Nav
