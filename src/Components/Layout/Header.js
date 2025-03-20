import React, {useState} from 'react'
import { Dialog } from '@headlessui/react'
import { FiDownloadCloud } from "react-icons/fi"
import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import logo from '../../Assets/Images/Logo-3.png'

const Header = () => {

  const navigation = [
    { name: 'About',  href:"/#about" },
    { name: 'Projects',  href:"/#projects"},
    { name: 'Contact',  href:"/#contact" }
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 w-full mx-auto max-w-[2000px]">
        {/*Desktop Nav*/}
        <nav className="flex items-center justify-end lg:grid lg:grid-cols-12 lg:justify-between p-6 lg:px-8" aria-label="Global">
          {/*Nav Logo*/}
          <div className='col-span-3'>
            <img src={logo} alt="logo" className="hidden lg:block h-14 w-auto text-blue-500 hover:animate-pulse" />
          </div>

          {/*Nav Menu Buttons */}
          <div className="col-span-6 hidden lg:flex lg:gap-x-12 font-agency-fb justify-center w-full">
            {navigation.map((nav, index) => (
                <a
                  className="navLinks"
                  href={nav.href}
                  key={index}
                  data-testid={`nav-desktop-${nav.name}`}
                >
                    {nav.name.toUpperCase()}
                </a> 
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
                    {navigation.map((nav, index) => (      
                        <a
                          className="mobileNavLinks"
                          href={nav.href}
                          key={index}
                          data-testid={`nav-mobile-${nav.name}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                            {nav.name.toUpperCase()}
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

export default Header