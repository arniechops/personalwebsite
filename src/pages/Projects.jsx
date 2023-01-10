import React from 'react'
import ProjectComponent from '../components/ProjectComponent'
import '../index.css'
import { projects } from '../projects'

export default function Projects() {
  return (
    <><div className='hidden lg:block absolute z-20 top-0 bottom-0 left-1/3 border-l border-slate-700'></div><div className='flex font-mono bg-slate-900 justify-end snap-y snap-mandatory overflow-auto h-screen'>
      <div className='lg:w-2/3 bg-slate-900 w-full'>
        {projects.map(p => {
          return <ProjectComponent key={p.name} {...p} />
        })}
      </div>
    </div></>
  )
}
