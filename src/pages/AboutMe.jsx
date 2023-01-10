import React, { useState } from 'react'
import '../index.css'
import { FaHandsHelping, FaBox } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function AboutMe() {
  
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='h-screen bg-slate-900 flex items-center justify-center font-mono pl-3 pr-3 lg:p-0'>
        <div className='bg-slate-900 max-w-screen-lg rounded-lg neumorphic-about-me p-10'>

            <div className=''>
                <img src={require('./arnavpic.jpg')} className='h-36 rounded-full mx-auto mt-8'/>
            </div>
            <div className='text-white pt-6 leading-9 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nostrum consequuntur esse ad eveniet atque id? Laboriosam impedit, hic odio nemo rerum pariatur, ducimus vel totam amet perferendis neque debitis!
            </div>
            <div className='flex justify-center sm:space-x-12 sm:space-y-0 sm:flex-row flex-col items-center space-y-4'>
              <button
                className={`rounded-md p-3 pl-4 pr-4 text-slate-300 flex items-center space-x-3 min-w-max sm:width-auto
                ${pressed1 ? 'neumorphic-button-down' : 'neumorphic-button-up'}`}
                onMouseDown={() => setPressed1(true)}
                onMouseUp={() => setPressed1(false)}
              >
                <div>
                  Get in touch
                </div>
                <FaHandsHelping color='cream'/>
              </button>
              <button
                className={`rounded-md bg-white p-3 pl-4 pr-4 text-slate-300 flex items-center space-x-3 min-w-max
                ${pressed2 ? 'neumorphic-button-down' : 'neumorphic-button-up'}`}
                onMouseDown={() => setPressed2(true)}
                onMouseUp={() => setPressed2(false)}
                onClick={() => navigate('/projects')}
              >
                <span>
                  See my projects
                </span>
                <FaBox color='purple'/>
              </button>
            </div>
        </div>
    </div>
  )
}
