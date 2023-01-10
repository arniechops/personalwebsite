import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SidebarButton({name=null, icon=null, text}) {

    const navigate = useNavigate();

    const up = `relative flex items-center justify-center
    sm:h-16 sm:w-16 h-12 w-12 sm:space-y-20 space-y-10
    hover:cursor-pointer neumorphic-up group bg-red-100 relative`

    const down = `relative flex items-center justify-center
    sm:h-16 sm:w-16 h-12 w-12 sm:space-y-20 space-y-10
    hover:cursor-pointer neumorphic-down group`

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
        {icon}
        <span className="bg-slate-800 text-white rounded-full pl-3 pr-3 p-1 min-w-max absolute left-24
          transition-all scale-0 duration-100 group-hover:scale-100 hidden sm:block bottom-4">
            {text}
        </span>
        <span className="bg-slate-800 text-white rounded-full pl-3 pr-3 p-1 min-w-max absolute
          sm:hidden
          -rotate-90 origin-left translate-x-1/2 -translate-y-16">
            {text}
        </span>
    </div>
  )
}
