import React, { useEffect } from 'react'
import { api } from '../config/api'
import Buttons from '../components/Buttons'
import Card from '../components/Card'
import { useLoaderData } from 'react-router'


const Home = () => {
 
 const data= useLoaderData()
 console.log(data)
  
  return (
    <div className='w-full min-h-screen text-white px-4 sm:px-8 py-12 bg-gradient-to-br from-[#1d1e22] via-[#393f4d] to-[#1d1e22]'>
      <div className='flex flex-col gap-6 max-w-4xl'>
        <div className='space-y-4'>
          <h1 className='text-6xl sm:text-7xl font-black tracking-tight leading-tight bg-gradient-to-r from-[#feda6a] via-[#d4d4dc] to-[#feda6a] bg-clip-text text-transparent'>Explore the Metaverse</h1>
          <p className='text-lg sm:text-xl text-[#d4d4dc] leading-relaxed max-w-2xl'>Discover your next obsession from our meticulously curated database of the world's most legendary titles.</p>
        </div>
      </div>
      <Buttons/>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12'>
        {data.results.map((item)=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
    
  )
}

export default Home