import React from 'react'
import { BiLogoLinkedin, BiLogoFacebook, BiLogoGmail,BiLogoGithub  } from "react-icons/bi"
import logo from '../../Assets/Images/Logo-3.png'

const Footer = () => {

    const socialLinks = [
        {
            socialName: "Facebook",
            socialLink: "https://www.facebook.com/darrelmalig00/",
            socialIcon: <BiLogoFacebook />
        },
        {
            socialName: "LinkedIn",
            socialLink: "https://www.linkedin.com/in/darrelmaligjr/",
            socialIcon: <BiLogoLinkedin />
        },
        {
            socialName: "Email",
            socialLink: "mailto:darrelmalig19@gmail.com",
            socialIcon: <BiLogoGmail />
        },
        {
            socialName: "Github",
            socialLink: "https://github.com/darrelmalig",
            socialIcon: <BiLogoGithub />
        },
    ];

  return (
      <footer className="min-h-fit w-full bg-white flex flex-col justify-center items-center align-middle py-10 pt-20 px-5 md:px-10 lg:px-5  ">
          <div className="flex flex-col gap-y-3 py-5 px-5 pt-10 justify-center align-middle items-center">
              {/*<img src={logo} className="w-20 h-20" />*/}
              <img src={logo} alt="logo" className="w-12 h-auto text-blue-600 hover:animate-pulse " />
              <p className=" text-md font-semibold text-center max-w-md text-zinc-950">Living, learning, & leveling up<br/> one day at a time.</p>
              <div className="flex flex-row gap-x-3 justify-center items-center align-middle text-white py-2">
                {
                    socialLinks.map((item) => (
                        <a key={item.socialName} href={item.socialLink} target="_blank" rel="noreferrer" className="socialBtnFooter">{item.socialIcon}</a>
                    ) )
                }
              </div>
              <p className=" text-xs text-center max-w-xs text-zinc-700  uppercase">D.Malig &copy; 2025</p>
          </div>
      </footer> 
  )
}

export default Footer