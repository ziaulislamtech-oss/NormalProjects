import React, { useEffect, useState } from 'react'
import { Gamepad, Search, User } from 'lucide-react';
import { NavLink, useSearchParams } from 'react-router';

const NavBar = () => {

  const [value, setvalue] = useState('')
  const [searchParams, setsearchparams] = useSearchParams()

  useEffect(() => {

    const timer = setTimeout(() => {
      setsearchparams(prev => {
        const params = new URLSearchParams(prev)

        if (value) {
          params.set("search", value)
        }
        else {
          params.delete("search")
        }

        params.set("page", 1)
        return params
      })
    }, 500);

    return clearTimeout('timer')

  }, [value])

  return (
    <div>
      <div className='w-full flex items-center justify-between px-8 py-4 text-white backdrop-blur-sm bg-[#1d1e22]/80 border-b border-[#393f4d]/50'>
        <div className='flex items-center gap-3 group cursor-pointer'>
          <div className='p-2 rounded-lg bg-gradient-to-br from-[#feda6a] to-[#d4d4dc] group-hover:from-[#feda6a]/90 group-hover:to-[#d4d4dc]/90 transition-all'>
            <Gamepad size={24} className='text-[#1d1e22]' />
          </div>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-[#feda6a] to-[#d4d4dc] bg-clip-text text-transparent'>Gamelist</h1>
        </div>
        <div className='flex items-center gap-8'>
          <NavLink className={({isActive}) => `text-lg font-semibold transition-all duration-300 hover:text-[#feda6a] pb-2 border-b-2 ${ isActive ? 'border-[#feda6a] text-[#feda6a]' : 'border-transparent'}`} to='/'>Home</NavLink>
          <NavLink className={({isActive}) => `text-lg font-semibold transition-all duration-300 hover:text-[#feda6a] pb-2 border-b-2 ${ isActive ? 'border-[#feda6a] text-[#feda6a]' : 'border-transparent'}`} to='/games'>Games</NavLink>
          <NavLink className={({isActive}) => `text-lg font-semibold transition-all duration-300 hover:text-[#feda6a] pb-2 border-b-2 ${ isActive ? 'border-[#feda6a] text-[#feda6a]' : 'border-transparent'}`} to='/favrouite'>Favorites</NavLink>
        </div>
        <div className='flex items-center gap-3'>
          <div className='bg-gradient-to-r from-[#393f4d] to-[#1d1e22] flex rounded-lg px-4 py-2 w-64 items-center gap-3 border border-[#393f4d] hover:border-[#feda6a]/50 transition-colors'>
            <Search size={18} className='text-[#d4d4dc]' />
            <input
              value={value}
              type="text"
              placeholder="Search games..."
              onChange={(e) => setvalue(e.target.value)}
              className='bg-transparent outline-none flex-1 text-white placeholder-[#d4d4dc]/60'
            />
          </div>
          <button className='p-2 rounded-lg hover:bg-[#393f4d] transition-colors'><User size={20} className='text-[#d4d4dc]' /></button>
        </div>
      </div>
      <div className='w-full border-[1px] mt-2 border-[#393f4d]  '></div>
    </div>
  )
}

export default NavBar