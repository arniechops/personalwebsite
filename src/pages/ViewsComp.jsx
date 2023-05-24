import React from 'react'

export default function ViewsComp() {
  return (
    <div className='flex flex-col'>
            <div className='flex border-2 border-slate-200 rounded-md relative w-80'>
                  {/* center line  */}
              <div className='absolute top-1/2 left-1/2 h-20 bg-slate-200 w-0.5 -translate-x-1/2 -translate-y-1/2'/>
              <div className='flex flex-col w-1/2 p-6'>
                <p className='text-5xl'>
                  32
                </p>
                <p className=' text-slate-400'>total views</p>
              </div>
              <div className='flex flex-col w-1/2 p-6'>
                <p className='text-5xl'>
                  10
                </p>
                <p className=' text-slate-400'>unique views</p>
              </div>
            </div>
          </div>
  )
}
