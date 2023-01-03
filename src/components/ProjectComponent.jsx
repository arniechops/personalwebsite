import React, { useEffect, useRef, useState } from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaTrophy } from 'react-icons/fa'
import SocialsButton from './SocialsButton'
import '../index.css'
import Tag from './Tag'
import Pictures from './Pictures'

export default function ProjectComponent({width=null, link, date, description, award, name, technologies}) {
  const parse = require('html-react-parser');

  return (
    <div className='h-screen flex items-center snap-start'>
      <div className='flex items-start mt-4 relative'>
        <span className={`bg-slate-800 text-white rounded-full pl-3 pr-3 p-1
        w-auto min-w-max neumorphic-tag project-date
        -ml-[6rem] mr-10`}>
            {date}
        </span>
        <div className={`rounded-md w-[40rem] text-white
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
