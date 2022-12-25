import React from 'react'
import ProjectComponent from '../components/ProjectComponent'

export default function Projects() {
  return (
    <div className='h-screen bg-slate-900 flex items-center justify-end overflow-clip font-mono'>
      <div className='h-screen w-4/5 bg-slate-900 border-l-[1px] border-white'>
        <ProjectComponent/>
      </div>
    </div>
  )
}
