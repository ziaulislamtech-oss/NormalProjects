import { Star } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'


const Card = ({item}) => {

 const navigate = useNavigate()
  
  return (
    <div className='w-64 rounded-xl overflow-hidden bg-gradient-to-b from-[#393f4d] to-[#1d1e22] border border-[#393f4d] hover:border-[#feda6a]/50 hover:shadow-2xl hover:shadow-[#feda6a]/20 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer'>
      <div className='w-full h-48 overflow-hidden relative'>
        <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' src={item.background_image} alt={item.name} />
        <div className='absolute inset-0 bg-gradient-to-t from-[#1d1e22] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
      </div>
      <div className='p-4 space-y-3'>
        <div className='flex justify-between items-start gap-2'>
          <h2 className='font-bold text-white text-lg line-clamp-2 group-hover:text-[#feda6a] transition-colors'>{item.name}</h2>
          <div className='flex items-center gap-1 bg-[#feda6a]/20 px-2 py-1 rounded-lg whitespace-nowrap'>
            <Star size={14} className='text-[#feda6a] fill-[#feda6a]'/>
            <span className='text-[#feda6a] font-semibold text-sm'>4.9</span>
          </div>
        </div>
        <p className='text-[#d4d4dc] text-sm line-clamp-2 leading-relaxed'>Experience amazing gaming with stunning graphics and immersive gameplay</p>
        <button onClick={()=>{
         navigate(`/gamesDetails/${item.id}`)
       }} className='w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#feda6a] to-[#d4d4dc] hover:from-[#feda6a]/90 hover:to-[#d4d4dc]/90 text-[#1d1e22] font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#feda6a]/50 mt-2'>View Details</button>
      </div>
    </div>
  )
}

export default Card