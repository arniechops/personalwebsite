import React from 'react'
import '../index.css'

export default function Tag({text}) {
  return (
    <span className='text-sky-500 bg-sky-400/10 p-1 pl-3 pr-3 rounded-full'>
        {text}
    </span>
  )
}
