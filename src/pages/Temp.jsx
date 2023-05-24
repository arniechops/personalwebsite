import React from 'react'
import Chart from '../components/Chart'
import Pictures from '../components/Pictures'
import SmallBtn from '../components/SmallBtn'
import SchoolComponent from './SchoolComponent'
import ViewsComp from './ViewsComp'

export default function Temp() {
  return (
    <div className='flex items-center justify-center h-screen w-auto bg-slate-200'>
      <div className='p-6 w-[90%] bg-slate-50 rounded-md space-y-5'>
        <div className='flex space-x-4 items-center'>
          <div className='flex flex-col'>
            <p>Jan 19, 2022</p>
            <p className='text-sm text-slate-400'>12:00AM</p>
          </div>
          <div className='flex bg-slate-100 rounded-md p-2 space-x-2'>
            <img src="https://picsum.photos/90/45" alt="" />
            <div className='flex flex-col'>
              <p className='font-bold text-lg tracking-wide'>Applications for Spring 2020 are open!</p>
              <p className='text-sm text-slate-400'>Expires Jan 25, 2022 at 12:00AM</p>
            </div>
          </div>
        </div>
        <div className='flex space-x-10'> {/* second row */}
          <div className='flex flex-col space-y-5'>  
            <ViewsComp/>
            <ViewsComp/>
          </div>
          <div className='flex flex-col space-y-2'>
            <div className='text-xl font-bold'>
              Demographic Breakdown
            </div>
            <div className=''>
              <span className='rounded-full p-1 pl-2 pr-2 bg-red-50 text-slate-800 mr-2'>School</span>
              <span className='rounded-full'>Year</span>
            </div>
            <div className='space-y-2'>
              <SchoolComponent school={"Penn Engineering"}/>
              <SchoolComponent school={"Wharton"}/>
              <SchoolComponent school={"Nursing"}/>
            </div>
          </div>
          <div className='flex items-center justify-center aspect-square h-64'>
            <Chart/>
          </div>
        </div>
      </div>
    </div>
  )
}
