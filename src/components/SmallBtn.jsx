import React from 'react'

export default function SmallBtn({text}) {
  return (
      <div className='h-16 w-16 bg-red-200 relative'>
        <span className='bg-red-500 absolute text-white
         top-0 left-0 -rotate-90
         rounded-full p-2 pl-4 pr-4 min-w-max origin-top-left translate-x-2'>
            {text}
        </span>
      </div>
      )
}
