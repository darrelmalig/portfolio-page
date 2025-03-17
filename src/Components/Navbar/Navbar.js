import React from 'react'
import { Dialog } from '@headlessui/react'
import { FiDownloadCloud } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import logo from '../../Assets/Images/Logo-3.png'

const Navbar = ({mobileMenuOpen, setMobileMenuOpen}) => {

    const navigation = [
        { name: 'About', routePath: "/", href:"/#about" , id:1},
        { name: 'Projects', routePath: "/", href:"/#projects" , id:2},
        { name: 'Contact', routePath: "/", href:"/#contact" , id:3}
    ]

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 w-full mx-auto max-w-[2000px]">
        {/*Desktop Nav*/}
        <nav className="flex items-center justify-end p-6 lg:px-8" aria-label="Global">
          {/*Nav Logo*/}
          <div className="hidden lg:flex lg:flex-1">
            <div className="-m-1.5 p-1.5">
              <img src={logo} alt="logo" className="h-14 w-auto text-blue-500 hover:animate-pulse" />
            </div>
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

          {/*Nav Menu Buttons */}
          <div className="hidden lg:flex lg:gap-x-12 font-agency-fb">
            {navigation.map((item) => (
                <a
                  className=' text-2xl py-2 px-3 rounded-lg font-semibold leading-6 text-zinc-700 transition-all duration-200 ease-linear hover:bg-gray-100'
                  href={item.href}
                  key={item.id}
                  onClick={() => setMobileMenuOpen(true)}
                >
                    {item.name.toUpperCase()}
                </a> 
            ))}
          </div>

          {/*Extra Menu Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:align-middle">
            <a href="https://drive.google.com/u/0/uc?id=1GJB7UXpkn5vzb5zNEDl5WaW1Lp5BUcML&export=download" target="_blank" rel="noreferrer" className="Btn bg-none hover:bg-yellow-400 rounded-lg group">
              <div className="sign">
                <FiDownloadCloud className="h-6 w-6 text-blue-500 group-hover:text-zinc-950"/>
              </div>
              <div className="text text-md ">Download my CV</div>
            </a>
          </div>
        </nav>

        {/*Tablet/Movile Nav*/}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white bg-opacity-[97%] px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10  divide-y-[1px]">
                <div className="flex items-center justify-between">
                    <a href="/#home-page" className="-m-1.5 p-1.5">
                      <img src={logo} alt="logo" className="h-10 w-auto text-blue-500 hover:animate-pulse" />
                    </a>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-zinc-700"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <FaXmark className="h-7 w-7" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-5 flow-root">
                <div className="-my-3">
                    <div className="space-y-2 py-6 font-agency-fb">
                    {navigation.map((item) => (      
                        <a
                          className="-mx-3 block py-2 px-3 text-lg rounded-lg font-semibold leading-7 text-zinc-700 transition-all duration-200 ease-linear hover:bg-gray-100"
                          href={item.href}
                          key={item.id}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name.toUpperCase()}
                        </a> 
                    ))}
                    </div>
                </div>
                </div>
            </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}

export default Navbar