import React from 'react'
import { BiLogoLinkedin, BiLogoFacebook, BiLogoGmail } from "react-icons/bi"
import logo from '../../Assets/Images/Logo-3.png'

const Footer = () => {
  return (
      <footer className="min-h-fit w-full bg-white flex flex-col justify-center items-center align-middle py-10 pt-20 px-5 md:px-10 lg:px-5  ">
          <div className="flex flex-col gap-y-3 py-5 px-5 pt-10 justify-center align-middle items-center">
              {/*<img src={logo} className="w-20 h-20" />*/}
              <img src={logo} alt="logo" className="w-12 h-auto text-blue-600 hover:animate-pulse " />
              <p className=" text-md font-semibold text-center max-w-md text-zinc-950">Living, learning, & leveling up<br/> one day at a time.</p>
              <div className="flex flex-row gap-x-3 justify-center items-center align-middle text-white py-2">
                  <a href="https://www.facebook.com/darrelmalig00/" target="_blank" rel="noreferrer" className="flex justify-center items-center align-middle text-white bg-slate-900 p-1.5 rounded-full transition-all ease-in-out duration-200 hover:scale-105 hover:bg-yellow-500 hover:text-zinc-900 hover:animate-pulse"><BiLogoFacebook /></a>

                  <a href="https://www.linkedin.com/in/darrelmaligjr/" target="_blank" rel="noreferrer" className="flex justify-center items-center align-middle text-white bg-slate-900 p-1.5 rounded-full transition-all ease-in-out duration-200 hover:scale-105 hover:bg-yellow-500 hover:text-zinc-900 hover:animate-pulse"><BiLogoLinkedin /></a>

                  <a href="mailto:darrelmalig19@gmail.com" target="_blank" rel="noreferrer" className="flex justify-center items-center align-middle text-white bg-slate-900 p-1.5 rounded-full transition-all ease-in-out duration-200 hover:scale-105 hover:bg-yellow-500 hover:text-zinc-900 hover:animate-pulse"><BiLogoGmail /></a>
              </div>
              <p className=" text-xs text-center max-w-xs text-zinc-700  uppercase">D.Malig &copy; 2025</p>
          </div>
      </footer> 
  )
}

export default Footer