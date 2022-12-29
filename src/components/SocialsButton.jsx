import React, { useState } from 'react'

export default function SocialsButton({icon, url, size}) {
    const up = `relative flex items-center justify-center
    h-${size} w-${size} p-4 space-x-4
    hover:cursor-pointer neumorphic-up-round`

    const down = `relative flex items-center justify-center
    h-${size} w-${size} p-4 space-x-4
    hover:cursor-pointer neumorphic-down-round`

    const [mouseDown, setMouseDown] = useState(false)
  return (
    <div className={mouseDown ? down : up}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseOut={() => setMouseDown(false)}
        onClick={() => window.open(url)}
    >
        {icon}
    </div>
  )
}
