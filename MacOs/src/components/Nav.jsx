import React from 'react'
import appleIcon from  '/navbar-icons/apple.svg'
import wifiIcon from   '/navbar-icons/wifi.svg'
import DateAndTime from './DateAndTime'

const Nav = () => {

  return (
    <div className='fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md text-white px-4 py-1 flex justify-between items-center z-10'>
      <div className='flex gap-3 items-center'>
        <div><img className='w-4 h-4' src={appleIcon} alt="apple icon" /></div>
        <p className='text-sm font-medium'>Zia Ul Islam</p>
        <p className='text-sm font-medium'>Window</p>
        <p className='text-sm font-medium'>Terminal</p>
      </div>
      <div className='flex gap-3 items-center'>
        <div><img className='w-4 h-4' src={wifiIcon} alt="wifi icon" /></div>
        <DateAndTime/>
      </div>
    </div>
  )
}

export default Nav
