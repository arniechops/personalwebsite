import SidebarButton from "../components/SidebarButton";
import { FaGmai, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosPerson, IoMdBook, IoMdBulb, IoMdMail } from 'react-icons/io'
import { SiGmail } from 'react-icons/si'
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect'
import SocialsButton from "../components/SocialsButton";
import { useNavigate } from 'react-router-dom'


export default function Home() {

  return (
    <div className="flex font-mono">
      <div className="w-30 p-5 fixed h-screen flex flex-col top-0 left-0 justify-center">
        <SidebarButton icon={<IoIosPerson color="white" width/>} text={"/about"}/>
        <SidebarButton icon={<IoMdBulb color="white"/>} text={"/projects"}/>
      </div>
      <div className="bg-slate-900 h-screen w-screen pl-36 p-5 flex-col">
        <div className=" ">
          <span className="text-white relative  h-auto text-2xl capitalize tracking-[0.3em] after:border-b-2
          after:content-[''] after:w-16 after:absolute after:border-slate-600 after:left-0 after:top-full
          after:mt-2">ARNAV<br/>CHOPRA</span>
        </div>
        <div className="flex flex-col justify-center h-[95%]">
          <div className="w-full">
            <p className="text-2xl text-white">I am a</p>
              <div id='heading' className="text-white text-[6em] tracking-[0.2em]">
                <Typewriter
                  options={{
                    strings: ['Software Developer', 'Student', 'Artist'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
          </div>
          <div className="flex flex-row flex-none align-top space-x-6">
            <div className="group relative">
              <SocialsButton size={14} icon={<SiGmail color='#dc2626'/>}/>
              <span className="bg-slate-800 text-white rounded-full pl-3 pr-3 p-1 w-auto min-w-max absolute -bottom-12
                transition-all scale-0 duration-100 group-hover:scale-100 z-20">
                  arnav.chopra@gmail.com
              </span>
            </div>
            <SocialsButton size={14} icon={<FaGithub color='#fffbeb'/>} url={'https://github.com/arniechops'} />
            <SocialsButton size={14} icon={<FaLinkedin color='#0369a1'/>} url={'https://www.linkedin.com/in/arnav-chopra-857472210/'}/>
          </div>
        </div>
      </div>
    </div>
  );
}