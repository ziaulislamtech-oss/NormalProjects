import React, { useContext, useState } from 'react'
import Docks from './components/Docks'
import Nav from './components/Nav'
import Github from './windows/Github'
import Note from './windows/Note'
import Resume from './windows/Resume'
import Spotify from './windows/Spotify'
import Cli from './windows/Cli'
import { Context } from './WindowContext'

/* MAIN APP: macOS desktop layout.
   - Removed unused imports (backgroundImg, TernimalWindow)
   - The dock 'pdf' icon maps to the 'resume' window in WindowContext.
     Since dock uses 'pdf' as the name but window state uses 'resume',
     we map the pdf toggle to resume in the Docks component's isOpen check. */
const App = () => {

  const {windowState}=useContext(Context)

  return (
    <div className='w-screen h-screen bg-[url(/background-img/macos1.jpg)] bg-cover bg-center relative overflow-hidden'>
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
