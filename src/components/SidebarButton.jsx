import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SidebarButton({name=null, icon=null, text}) {

    const navigate = useNavigate();

    const up = `relative flex items-center justify-center
    h-16 w-16 mt-10 mb-4 mx-auto
    hover:cursor-pointer neumorphic-up group`

    const down = `relative flex items-center justify-center
    h-16 w-16 mt-10 mb-4 mx-auto
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
        <span className="bg-slate-800 text-white rounded-full pl-3 pr-3 p-1 w-auto min-w-max absolute left-24
          transition-all scale-0 duration-100 position-left group-hover:scale-100 z-20">
            {text}
        </span>
    </div>
  )
}
