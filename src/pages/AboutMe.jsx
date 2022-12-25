import React from 'react'

export default function AboutMe() {
  return (
    <div className='h-screen bg-slate-900 flex items-center justify-center overflow-clip font-mono'>
        <div className='h-1/2 bg-slate-800 w-2/3 rounded-lg'>

            <div className=''>
                <img src={require('./arnavpic.jpg')} className='h-40 rounded-full mx-auto mt-8'/>
                <h3 className='text-white text-center mt-2 font-semibold text-lg'>Arnav Chopra</h3>
            </div>
            <div className='text-white p-12 pt-6 leading-9'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nostrum consequuntur esse ad eveniet atque id? Laboriosam impedit, hic odio nemo rerum pariatur, ducimus vel totam amet perferendis neque debitis!
            </div>
        </div>
    </div>
  )
}
