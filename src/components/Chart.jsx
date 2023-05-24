import React from 'react'
import ChartSector from './ChartSector'

export default function Chart({values}) {
  return (
    <div className='relative h-60 w-60 flex items-center justify-center'>
        <ChartSector start={0} end={30} color={'red'}/>
        <ChartSector start={30} end={330} color={'blue'}/>
        <ChartSector start={330} end={360} color={'pink'}/>
        <div className='h-40 w-40 bg-white rounded-full z-20 flex items-center justify-center'>
            <div>
                <div className=' text-4xl text-slate-900 text-center'>
                    42
                </div>
                <div className=' text-md text-slate-500'>
                    unique views
                </div>
            </div>
        </div>
    </div>
  )
}
