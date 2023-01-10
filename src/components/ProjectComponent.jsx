import React, { useEffect, useRef, useState } from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaTrophy } from 'react-icons/fa'
import SocialsButton from './SocialsButton'
import '../index.css'
import Tag from './Tag'
import Pictures from './Pictures'

export default function ProjectComponent({width=null, link, date, description, award, name, technologies}) {
  const parse = require('html-react-parser');

  return (
    <div className='h-screen flex items-center snap-start mt-2 sm:mt-0'>
      <div className='flex items-start sm:mt-4 relative p-4 sm:p-0 mx-auto lg:mx-0'>
        <span className={`bg-slate-800 text-white rounded-full pl-3 pr-3 p-1
        w-auto min-w-max neumorphic-tag project-date
        -ml-[6rem] mr-10 lg:block hidden`}>
            {date}
        </span>
        <div className={`rounded-md sm:w-[40rem] w-full text-white
        bg-slate-800 p-6 neumorphic-project-card sm:ml-2 ml-0`}>
          <div className='mb-2'>
            <span className={`bg-slate-800 text-white rounded-full pl-3 pr-3 p-1
            neumorphic-tag lg:hidden mb-2`}>
                {date}
            </span>
          </div>
          <div className='flex items-center mb-3 justify-between'>
            <div className='text-2xl'>{name}</div>
            <SocialsButton icon={<FaGithub/>} url={link} size={12}/>
          </div>
          <div className='text-slate-400 text-sm sm:text-md'>
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
