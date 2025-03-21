import React from 'react'
import { FiDownloadCloud } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import useScrollToRef from '../../Hooks/useScrollToRef'

const DesktopMenu = ({logo, navigation,mobileMenuOpen,setMobileMenuOpen}) => {

    const scrollToRef = useScrollToRef(setMobileMenuOpen);

  return (
    <nav className="flex items-center justify-end lg:grid lg:grid-cols-12 lg:justify-between p-6 lg:px-8" aria-label="Global">
        {/*Nav Logo*/}
        <div className='col-span-3'>
        <img src={logo} alt="logo" className="hidden lg:block h-14 w-auto text-blue-500 hover:animate-pulse" />
        </div>

        {/*Nav Menu Buttons */}
        <div className="col-span-6 hidden lg:flex lg:gap-x-12 font-agency-fb justify-center w-full">
        {navigation.map((nav, index) => (
            <button
                className="navLinks"
                key={index}
                onClick={() => scrollToRef(nav.ref) }
                data-testid={`nav-desktop-${nav.name}`}
            >
                {nav.name.toUpperCase()}
            </button> 
        ))}
        </div>

        {/*Extra Menu Button */}
        <div className="col-span-3 hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:align-middle">
        <a href="https://drive.google.com/u/0/uc?id=1GJB7UXpkn5vzb5zNEDl5WaW1Lp5BUcML&export=download" target="_blank" rel="noopener noreferrer" className="Btn bg-yellow-400 hover:bg-yellow-300 rounded-lg group">
            <div className="sign">
            <FiDownloadCloud className="h-6 w-6 text-zinc-950"/>
            </div>
            <div className="text text-md ">Download my CV</div>
        </a>
        </div>

        
        {/*Burger Menu Button */}
        <div className="flex lg:hidden">
        <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 ${mobileMenuOpen ? "text-opacity-0" : "text-opacity-100"}`}
            onClick={() => setMobileMenuOpen(true)}
        >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
        </button>
        </div>
    </nav>
  )
}

export default DesktopMenu