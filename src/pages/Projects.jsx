import React from 'react'
import ProjectComponent from '../components/ProjectComponent'
import '../index.css'
import { projects } from '../projects'

export default function Projects() {
  return (
    <div className='flex font-mono bg-slate-900 justify-end snap-y snap-mandatory overflow-auto h-screen'>
      <div className='w-1/3 h-screen border-r-[1px] border-r-slate-700 fixed left-0 top-0'>
      </div>
      <div className='w-2/3 bg-slate-900 z-10'>
        {
          projects.map(p => {
            return <ProjectComponent key={p.name} {...p}/>
          })
        }
      </div>
    </div>
  )
}
