import React, { useContext, useState } from 'react'
import Docks from './components/Docks'
import backgroundImg from '../public/background-img/macoswallpaper.jpg'
import Nav from './components/Nav'
import TernimalWindow from './windows/TernimalWindow'
import Github from './windows/Github'
import Note from './windows/Note'
import Resume from './windows/Resume'
import Spotify from './windows/Spotify'
import Cli from './windows/Cli'
import { Context } from './WindowContext'


const App = () => {
 


  const {windowState}=useContext(Context)

  return (
    <div className='w-screen h-screen bg-[url(/background-img/riverhome.jpg)] bg-cover bg-center relative'>
      <Nav/>
      {windowState.cli && <Cli/>}
      {windowState.github && <Github/>}
      {windowState.note && <Note/>}
      {windowState.resume && <Resume/>}
      {windowState.spotify &&<Spotify/>}
      <Docks/>
    </div>
  )
}

export default App
