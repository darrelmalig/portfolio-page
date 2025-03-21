import React, {useState} from 'react'
import logo from '../../Assets/Images/Logo-3.png'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const Header = ({aboutRef,projectsRef,contactRef}) => {

  const navigation = [
    { name: 'About',  ref: aboutRef },
    { name: 'Projects',  ref: projectsRef },
    { name: 'Contact',  ref: contactRef }
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 w-full mx-auto max-w-[2000px]">
        {/*Desktop Nav*/}
        <DesktopMenu 
          logo={logo} 
          navigation={navigation} 
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen} 
        />

        {/*Tablet/Movile Nav*/}
        <MobileMenu 
          logo={logo} 
          navigation={navigation} 
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen} 
        />
      </header>
    </>
  )
}

export default Header