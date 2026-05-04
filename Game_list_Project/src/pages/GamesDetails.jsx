import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { GamesDataContext } from '../context/GamesContext'


const GamesDetails = () => {
  
    const { data }= useLoaderData()
    
   const {addToFav,favourite} =   useContext(GamesDataContext)
  
    
  return (
   <div className="text-slate-100 min-h-screen bg-gradient-to-br from-[#1d1e22] via-[#393f4d] to-[#1d1e22]">
      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] mb-12 group">
          <img
            src={data.background_image}
            alt="game"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1e22] via-[#1d1e22]/50 to-transparent"></div>

          <div className="absolute bottom-0 p-8 text-white w-full">
            <h1 className="text-5xl md:text-7xl font-black mb-3 leading-tight">
              {data.name}
            </h1>
            <p className="text-[#d4d4dc] mb-6 text-lg">
              Popular Game • Check Store for Details
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-gradient-to-r from-[#feda6a] to-[#d4d4dc] hover:from-[#feda6a]/90 hover:to-[#d4d4dc]/90 px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#feda6a]/50 text-[#1d1e22]">
                Buy Now
              </button>
              <button onClick={()=>addToFav(data)} className="border-2 border-[#feda6a] hover:bg-[#feda6a]/10 px-8 py-3 rounded-lg font-bold transition-all duration-300 text-white hover:border-[#d4d4dc]">
                Add to Favorites
              </button>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* ABOUT */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#feda6a] to-[#d4d4dc] bg-clip-text text-transparent">About the Game</h2>
              <p className="text-[#d4d4dc] leading-relaxed text-lg">
                {data.description_raw || "Discover an amazing gaming experience with stunning visuals and immersive gameplay."}
              </p>
            </section>

            {/* MEDIA */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#feda6a] to-[#d4d4dc] bg-clip-text text-transparent">Media</h2>
              <div className="grid grid-cols-2 gap-4">
                <img className="rounded-xl hover:scale-105 transition-transform duration-300 border border-[#393f4d]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs219nkxpn_xE_ErEwP6hNNwko4pk2hwcux9BgaPdzwR_fiM81wnGQuernGjQh5K0dxkYRKKMb6v_DFNITCzoQhg0Yf9bqfUoJ2frw5hZm7JSJvmhhALrGYRbpgtSTyhVWALM3ILDxX3XV65MKsaVG_kju1nB6ihs0GZDcLNCEcVY7IjhniNqglLniHxc5F1-l5qx8UIKWQX6hE1epKjo1iRHuSy4ulQf7yqz_G9_X7mrkq8L_fma51859_ch-GfJ2Wu3k51stxpA" alt="game screenshot" />
                <img className="rounded-xl hover:scale-105 transition-transform duration-300 border border-[#393f4d]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK4JhvPyAvMGavxCNy_HrdD6zzWgsCNDD6sWssW0olUZjXraGkA660qnqYcuGTNwS2AMiE4ypkWgjHqUPIZpnHCYzPZkfDPRcZJEyDbsJLAB_sELDaJDLtkkQhe3DNlNaGjosj6n1tP-gp69j9HnXyGwlyhulj8uWddMfse_zWhkyFLEIG8fgq00BtuI2HwOHOQS89VFpZFWilz1nCZLzO0ng_lIxCAlKPber_vT13Izh8bNMhZHRi5jFVI3dg5DXZlgNXdNM9v2LA" alt="game screenshot" />
              </div>
            </section>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-[#393f4d] to-[#1d1e22] border border-[#393f4d] rounded-xl hover:border-[#feda6a]/50 transition-colors">
              <h3 className="font-bold mb-4 text-lg text-[#d4d4dc]">Player Reviews</h3>
              <div className="flex items-baseline gap-2">
                <p className="text-5xl font-black bg-gradient-to-r from-[#feda6a] to-[#d4d4dc] bg-clip-text text-transparent">4.9</p>
                <span className="text-[#d4d4dc] text-sm">/ 5.0</span>
              </div>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-[#feda6a] rounded-full"></div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#393f4d] to-[#1d1e22] border border-[#393f4d] rounded-xl hover:border-[#feda6a]/50 transition-colors">
              <h3 className="font-bold mb-4 text-lg text-[#d4d4dc]">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["RPG", "Sci-fi", "Open World"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gradient-to-r from-[#feda6a]/20 to-[#d4d4dc]/20 border border-[#feda6a]/30 rounded-lg text-sm text-[#feda6a] hover:bg-[#feda6a]/30 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default GamesDetails