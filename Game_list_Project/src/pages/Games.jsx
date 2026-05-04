import React from 'react'

const Games = () => {

  return (
    <div className='w-full min-h-screen text-white px-8 py-12 bg-gradient-to-br from-[#1d1e22] via-[#393f4d] to-[#1d1e22]'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-5xl font-bold bg-gradient-to-r from-[#feda6a] to-[#d4d4dc] bg-clip-text text-transparent mb-4'>All Games</h1>
        <p className='text-[#d4d4dc] text-lg mb-12'>Browse through our complete collection of games</p>
        <div className='bg-gradient-to-br from-[#393f4d] to-[#1d1e22] border border-[#393f4d] rounded-2xl p-12 text-center'>
          <p className='text-[#d4d4dc] text-xl'>Game library coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default Games