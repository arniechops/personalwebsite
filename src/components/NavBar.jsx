import React from 'react'
import SidebarButton from './SidebarButton'
import { IoIosPerson, IoMdBook, IoMdBulb, IoMdMail } from 'react-icons/io'

export default function NavBar() {
  return (
    <div className="h-30 sm:w-30 p-5 sm:fixed w-full sm:h-screen pl-0 space-x-4 flex justify-left sm:flex-column sm:top-0 sm:left-0 sm:justify-center">
        <SidebarButton icon={<IoIosPerson color="white" width/>} text={"/about"}/>
        <SidebarButton icon={<IoMdBulb color="white"/>} text={"/projects"}/>
    </div>
  )
}
