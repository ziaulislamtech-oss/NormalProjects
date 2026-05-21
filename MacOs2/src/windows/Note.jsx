import React, { useEffect, useState } from 'react'
/* Removed unused Rnd import — drag/resize is handled by TernimalWindow */
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './Note.css'
import TernimalWindow from './TernimalWindow'

const Note = () => {

    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, [])
    return (
    

           <TernimalWindow width={500} height={300} x={250} y={130} title="Zia Notes" windowName ="note" >
             <div className='bg-[#060606] h-full w-full   overflow-auto rounded-lg shadow-lg text-white
             [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar]:h-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-[#3A3A3A]
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-[#555555]
          active:[&::-webkit-scrollbar-thumb]:bg-[#00ff00]
             '>
                
                <div className='p-5 rounded'>
                    <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter>
                </div>

            </div>
           </TernimalWindow>
        
    )
}

export default Note
