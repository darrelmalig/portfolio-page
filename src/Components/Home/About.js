import React from 'react'
import { FiDownloadCloud } from "react-icons/fi"

const About = ({aboutMeImage, skillLists}) => {
  return (
    <section className="bg-blue-600 magicpattern flex justify-center align-middle items-center w-full min-h-[800px]">
        <div id="about" className="flex flex-col gap-5 gap-y-10 px-4 py-12  h-full w-full justify-center items-center align-middle max-w-[2000px] mx-auto lg:flex-row lg:py-32">
          <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-sine" className="flex w-full justify-center items-center align-middle px-10 lg:px-1 lg:max-w-3xl lg:w-1/3">
            <img src={aboutMeImage} alt="about-me" className=" drop-shadow-xl drop rounded-xl w-full max-w-sm lg:max-w-lg" />
          </div>

          <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-sine" className="flex flex-col w-full p-3 justify-center items-center align-middle max-w-3xl lg:items-start lg:px-8 lg:w-2/3">
            <h3 className="text-4xl text-white font-bold text-center lg:text-left">Nice to meet you!</h3>
            <p className="text-lg text-white py-3 pt-8 max-w-3xl text-center lg:max-w-none lg:text-left">I started my career as a Web Designer more than 3 years ago, I've worked on a range of projects (including landing pages, microsites, email templates, social cards, and others) and collaborated with wonderful people to create digital goods for both commercial and consumer use. I'm quiet confident, innately curious, and constantly seeking ways on improving my creativity and programming skills.</p>
            
            <div className="bg-slate-900 flex flex-col w-full max-w-3xl rounded-t-xl mt-3">
                <div className=" bg-slate-50  py-2 pl-5 pr-6 rounded-br-xl rounded-tl-xl w-fit font-bold uppercase">
                    Technical Skills
                </div>
                <ul className="flex flex-row flex-wrap gap-x-7 gap-y-3 sm:gap-y-5  justify-center items-center px-4 md:px-6 py-1 min-h-max h-auto w-full max-w-2xl mx-auto text-white rounded-xl mt-6 mb-1 ">
                {
                    skillLists.map((skills, index) => (
                        <li key={index} className="flex flex-col w-fit justify-center">
                            <div className="flex flex-row lg:text-md font-normal text-white gap-x-1 items-center justify-start">
                                {skills.skillBadge}
                                {skills.skillName}
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
            
            <div className="flex justify-end w-full rounded-b-xl bg-[#0F172A]">
              <a href="https://drive.google.com/u/0/uc?id=1GJB7UXpkn5vzb5zNEDl5WaW1Lp5BUcML&export=download" target="_blank" rel="noreferrer" className="Btn bg-yellow-400 rounded-xl rounded-tr-none rounded-bl-none transition-all ease-in-out duration-150  group">
                <div className="sign">
                  <FiDownloadCloud className="h-6 w-6"/>
                </div>
                <div className="text text-md ">Download my CV</div>
              </a>
            </div>
            
          </div>
        </div>
      </section>
  )
}

export default About