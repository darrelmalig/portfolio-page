import React from 'react'
import useScrollToRef from '../../Hooks/useScrollToRef'
import { Dialog } from '@headlessui/react'
import { FaXmark } from "react-icons/fa6"

const MobileMenu = ({logo, navigation,mobileMenuOpen,setMobileMenuOpen}) => {

    const scrollToRef = useScrollToRef(setMobileMenuOpen);

  return (
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
                    <button
                        className="mobileNavLinks"
                        onClick={() => scrollToRef(nav.ref) }
                        key={index}
                        data-testid={`nav-mobile-${nav.name}`}
                    >
                        {nav.name.toUpperCase()}
                    </button> 
                ))}
                </div>
            </div>
            </div>
        </Dialog.Panel>
    </Dialog>
  )
}

export default MobileMenu