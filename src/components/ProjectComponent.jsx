import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaTrophy } from 'react-icons/fa'
import SocialsButton from './SocialsButton'
import '../index.css'
import Tag from './Tag'
import Pictures from './Pictures'

export default function ProjectComponent({width=null, link, date, description, award, name, technologies}) {
  const parse = require('html-react-parser');

  return (
    <div className='h-screen flex items-center snap-start z-50'>
      <div className='flex items-start mt-4 space-x-4 relative'>
        <div className='flex absolute right-[40rem] space-x-4 mr-3'>
          <span className="bg-slate-800 text-white rounded-full pl-3 pr-3 p-1
          w-auto min-w-max z-20 neumorphic-tag">
              {date}
          </span>
          <div className='w-4 h-4 rounded-full bg-slate-700 block mt-2'>
          </div>
        </div>
        <div className={`rounded-md w-[${width ? width : '24rem'}] text-white
        bg-slate-800 p-6 neumorphic-project-card ml-2`}>
          <div className='flex items-center mb-3 justify-between'>
            <div className='text-2xl'>{name}</div>
            <SocialsButton icon={<FaGithub/>} url={link} size={12}/>
          </div>
          <div className='text-slate-400'>
            {parse(description)}
          </div>
          <div className='my-4 flex space-x-3 items-center'>
            <FaTrophy color='gold'/>
            <span>
              {award}
            </span>
          </div>
          <Pictures/>
          <div className='mt-4 space-x-2'>
            {
              technologies.map(t => {
                return <Tag text={t}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
