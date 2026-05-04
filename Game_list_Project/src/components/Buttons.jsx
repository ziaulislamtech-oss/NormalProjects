import React from 'react'

const Buttons = () => {
    const title = [
        "All titles","Trending Now","New Releases","RPG","Action"
    ]
  return (
    <div className='mt-10 flex gap-3 m-4 flex-wrap'>
      {title.map((items,idx)=>(
        <button key={idx} className='px-6 py-2 rounded-full bg-gradient-to-r from-[#393f4d] to-[#1d1e22] text-white font-medium transition-all duration-300 hover:from-[#feda6a] hover:to-[#d4d4dc] hover:shadow-lg hover:shadow-[#feda6a]/30 active:scale-95 border border-[#393f4d] hover:border-[#feda6a] text-[#d4d4dc] hover:text-[#1d1e22]'>{items}</button>  
      ))}
    </div>
  )
}

export default Buttons