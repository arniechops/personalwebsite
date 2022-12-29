import React, { useState } from 'react'
import '../index.css'
import { FaHandsHelping, FaBox } from 'react-icons/fa'

export default function AboutMe() {
  
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);

  return (
    <div className='h-screen bg-slate-900 flex items-center justify-center overflow-clip font-mono'>
        <div className='h-1/2 bg-slate-900 max-w-screen-lg rounded-lg neumorphic-about-me'>

            <div className=''>
                <img src={require('./arnavpic.jpg')} className='h-36 rounded-full mx-auto mt-8'/>
            </div>
            <div className='text-white p-12 pt-6 leading-9'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nostrum consequuntur esse ad eveniet atque id? Laboriosam impedit, hic odio nemo rerum pariatur, ducimus vel totam amet perferendis neque debitis!
            </div>
            <div className='w-full flex justify-center space-x-12'>
              <button
                className={`rounded-md bg-white p-3 pl-4 pr-4 text-slate-300 flex items-center space-x-3
                ${pressed1 ? 'neumorphic-button-down' : 'neumorphic-button-up'}`}
                onMouseDown={() => setPressed1(true)}
                onMouseUp={() => setPressed1(false)}
              >
                <span>
                  Get in touch
                </span>
                <FaHandsHelping color='cream'/>
              </button>
              <button
                className={`rounded-md bg-white p-3 pl-4 pr-4 text-slate-300 flex items-center space-x-3
                ${pressed2 ? 'neumorphic-button-down' : 'neumorphic-button-up'}`}
                onMouseDown={() => setPressed2(true)}
                onMouseUp={() => setPressed2(false)}
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
