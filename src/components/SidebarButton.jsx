import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SidebarButton({name=null, icon=null, text}) {

    const navigate = useNavigate();

    const up = `relative flex items-center justify-center
    sm:h-16 sm:w-16 h-12 w-12 sm:space-y-20 space-y-10 sm:mx-auto -rotate-90
    hover:cursor-pointer neumorphic-up sm:group`

    const down = `relative flex items-center justify-center
    sm:h-16 sm:w-16 h-12 w-12 sm:space-y-20 space-y-10 sm:mx-auto -rotate-90
    hover:cursor-pointer neumorphic-down sm:group`

    const [mouseDown, setMouseDown] = useState(false)
  return (
    <div className={mouseDown ? down : up}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseOut={() => {
          setMouseDown(false)
        }}
        onClick={() => navigate(text)}
    >
      <div className='relative'>
        <div className='rotate-90 sm:rotate-0'>
          {icon}
        </div>
        <span className="bg-slate-800 text-white rounded-full pl-3 pr-3 p-1 w-auto min-w-max absolute sm:left-24
          sm:transition-all sm:scale-0 sm:duration-100 sm:position-left sm:group-hover:scale-100 z-20 translate-x-12 -translate-y-6 left-0">
            {text}
        </span>
      </div>
    </div>
  )
}
