import React from 'react'
import SidebarButton from './SidebarButton'
import { IoIosPerson, IoMdBook, IoMdBulb, IoMdMail } from 'react-icons/io'

export default function NavBar() {
  return (
    <div className="h-24 sm:w-24 p-5 pl-0 sm:pl-5 sm:fixed w-full sm:h-screen space-x-4 flex justify-left
    sm:flex-col sm:left-0 sm:space-x-0 sm:justify-center sm:items-center sm:space-y-10 z-20">
        <SidebarButton icon={<IoIosPerson color="white"/>} text={"/about"}/>
        <SidebarButton icon={<IoMdBulb color="white"/>} text={"/projects"}/>
    </div>
  )
}
