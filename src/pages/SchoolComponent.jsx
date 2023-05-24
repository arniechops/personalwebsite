import React from 'react'

export default function SchoolComponent({school}) {
  return (
    <div className='flex space-x-2 items-center'>
        <div className='rounded-md bg-red-400 w-4 h-4'>
        </div>
        <div>
            {school}
        </div>
    </div>
  )
}
