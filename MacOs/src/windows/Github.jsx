import React from 'react'
import githubData from '../assets/github.json'
import { Rnd } from 'react-rnd'
import TernimalWindow from './TernimalWindow'

const GithubCard = ({project}) => (
  <div className='space-y-4 text-[#FFFFFF] max-w-80 rounded-2xl bg-[#1C1C1C] p-3 '>
    <img className='rounded-2xl' src={project.image} alt="" />
    <h2 className='text-2xl font-bold '>{project.title}</h2>
    <p className='font-semibold tracking-wide text-balance '>{project.description}</p>
    <div className='flex flex-wrap gap-2'>
     {
         project.tags.map((tag,index)=>{
            return <span key={index} className='bg-[#353735] p-3 rounded-2xl'>{tag}</span>
         })
     }
    </div>
    <div className='flex gap-4'>
      <a href={project.repoLink} target='_blank'  className='text-[#FAFAFA] font-bold underline'>Repository</a>
      <a href={project.demoLink} target='_blank' className='text-[#FAFAFA] font-bold underline'>Demo Link</a>
    </div>
  </div>
)

const Github = () => {
   
  return (
    
     <TernimalWindow width={550} height={400} x={150} y={100} title="ziaulislamtech-oss" windowName ="github" >
       <div className='bg-[#060606] h-full w-full   overflow-auto rounded-lg shadow-lg 
       [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar]:h-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-[#3A3A3A]
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-[#555555]
          active:[&::-webkit-scrollbar-thumb]:bg-[#00ff00]
       '>
        {/* Navigation bar (fixed height) */}
       
        <div className='p-4 flex flex-wrap gap-3  mb-30 justify-center  '>
         {
         githubData.map((project,index)=>{
            return  <GithubCard key={project.id} project={project} />
         })
         
         }
        </div>
      </div>
     </TernimalWindow>
    
  )
}

export default Github
