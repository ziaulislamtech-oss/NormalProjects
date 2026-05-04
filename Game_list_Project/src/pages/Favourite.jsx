import React, { useContext, useEffect } from 'react'
import { GamesDataContext } from '../context/GamesContext'
import Card from '../components/Card'

const Favourite = () => {

  const { favourite } = useContext(GamesDataContext)

  useEffect(() => {
    console.log(favourite)
  }, [])

  if (favourite.length == 0) {
    return (
      <div className='w-full min-h-screen text-white px-8 py-12 flex items-center justify-center bg-gradient-to-br from-[#1d1e22] via-[#393f4d] to-[#1d1e22]'>
        <div className='text-center space-y-4'>
          <h1 className='text-4xl font-bold text-[#d4d4dc]'>No Favorites Yet</h1>
          <p className='text-[#d4d4dc]/70 text-lg'>Start adding games to your favorites to see them here!</p>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full min-h-screen text-white px-8 py-12 bg-gradient-to-br from-[#1d1e22] via-[#393f4d] to-[#1d1e22]'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-5xl font-bold bg-gradient-to-r from-[#feda6a] to-[#d4d4dc] bg-clip-text text-transparent mb-4'>My Favorites</h1>
        <p className='text-[#d4d4dc] text-lg mb-12'>You have {favourite.length} game{favourite.length > 1 ? 's' : ''} in your favorites</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {favourite.map((fav) => (
            <Card item={fav} key={fav.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favourite