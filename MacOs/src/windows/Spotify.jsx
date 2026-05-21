import React from 'react'
import { Rnd } from 'react-rnd'
import TernimalWindow from './TernimalWindow'

const Spotify = () => {
  return (

    <TernimalWindow windowName ="spotify"  >
      <div className='w-full h-[100%] bg-[#060606] rounded-xl overflow-hidden shadow-lg flex flex-col'>




        {/* Spotify Iframe */}
        <iframe
          data-testid="embed-iframe"
          className="w-full min-h-full  flex-grow border-0"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0"
          frameBorder="0" // Aapka ye code bilkul perfect hai!
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

      </div>
    </TernimalWindow>

  )
}

export default Spotify