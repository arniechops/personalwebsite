import React, { useState } from 'react'

export default function ChartSector({start, end, color, first=false}) {

    const [hover, setHover] = useState(false);

    const style = {
        background: `repeating-conic-gradient(
            from 0deg,
            transparent 0deg ${start}deg,
            ${color} ${start}deg ${end}deg,
            transparent ${end}deg 360deg
        `,
        position: 'absolute',
        top: 0,
        left: 0
    }

    const Card = () => {
        return (
            <div className='h-12 w-24 bg-red-100'>
                {color}
            </div>
        )
    }
  return (
    <div
        className='w-60 h-60 rounded-full'
        style={style}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
    >
        {hover && <Card/>}
    </div>
  )
}
