import React, { useState } from 'react'

export default function SocialsButton({icon, url}) {
    const up = `relative flex items-center justify-center
    h-14 w-14 mr-6
    hover:cursor-pointer neumorphic-up-round`

    const down = `relative flex items-center justify-center
    h-14 w-14 mr-6
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
