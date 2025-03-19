import React from 'react'
import { FiDownloadCloud } from "react-icons/fi"
import { DiHtml5, DiJavascript1, DiCss3, DiGit, DiReact, DiWordpress } from "react-icons/di"
import { SiStoryblok, SiTailwindcss, SiMongodb  } from "react-icons/si"
import { FaVuejs, FaNodeJs  } from "react-icons/fa";
import IconSkill from '../common/IconSkill';
import aboutMeImage from '../../Assets/Images/Portfolio-Body-Image.png'


  const skillLists = 
  [
    {
      name:"HTML5",
      icon: <DiHtml5 className="text-orange-500 w-7 sm:w-8 lg:w-8 h-auto" />,
    },
    {
      name:"CSS3",
      icon: <DiCss3 className="text-blue-500 w-7 sm:w-8 lg:w-8 h-auto" />,
    },
    {
      name:"Javascript",
      icon: <DiJavascript1 className="text-yellow-500 w-7 sm:w-8 lg:w-9 h-auto" />,
    },
    {
      name:"React.js",
      icon: <DiReact className=" text-cyan-400 w-8 sm:w-9 lg:w-10 h-auto" />,
    },
    {
      name:"Tailwind",
      icon: <SiTailwindcss className=" text-sky-400 w-7 sm:w-8 lg:w-8 h-auto" />,
    },
    {
      name:"Git",
      icon: <DiGit className=" text-red-500 w-8 sm:w-9 lg:w-10 h-auto" />,
    },
    {
      name:<div className='font-medium text-xl'>ZUSTAND</div>,
      icon: "",
    },
    {
      name:"Node.js",
      icon: <FaNodeJs className=" text-green-400 w-6 sm:w-7 lg:w-8 h-auto" />,
    },
    {
      name:"MongoDB",
      icon: <SiMongodb  className=" text-green-300 w-6 sm:w-7 lg:w-8 h-auto" />,
    },
    {
      name:"Vue.js",
      icon: <FaVuejs className=" text-green-600 w-6 sm:w-7 lg:w-8 h-auto" />,
    },
    {
      name:"Storyblok",
      icon: <SiStoryblok className=" text-gray-300 w-5 sm:w-6 lg:w-7 h-auto" />,
    },
    {
      name:"Wordpress",
      icon: <DiWordpress className=" text-sky-500 w-7 sm:w-8 lg:w-9 h-auto" />,
    },
  ];

  const bioContent = "I am a Front-end Web Developer with a strong focus on creating dynamic web applications. I streamline development by building reusable components, crafting responsive interfaces, and implementing SEO best practices. My experience includes developing and maintaining websites, designing responsive email templates, and creating engaging visual assets. I strive to improve user interactions and optimize the performance of websites."

const About = () => {
  return (
    <section className="bg-blue-600 magicpattern flex justify-center align-middle items-center w-full min-h-[800px]">
        <div id="about" className="flex flex-col gap-5 gap-y-10 px-4 py-12  h-full w-full justify-center items-center align-middle max-w-[2000px] mx-auto lg:flex-row lg:py-32">
          <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-sine" className="flex w-full justify-center items-center align-middle px-10 lg:px-1 lg:max-w-3xl lg:w-1/3">
            <img src={aboutMeImage} alt="about-me" className=" drop-shadow-xl drop rounded-xl w-full max-w-sm lg:max-w-lg" />
          </div>

          <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-sine" className="flex flex-col w-full p-3 justify-center items-center align-middle max-w-3xl lg:items-start lg:px-8 lg:w-2/3">
            <h3 className="text-4xl text-white font-bold text-center lg:text-left">Get to Know Me</h3>
            <p className="text-lg text-white py-3 pt-8 max-w-3xl text-center lg:max-w-none lg:text-left">{bioContent}</p>
            
            <div className="bg-slate-900 flex flex-col w-full max-w-3xl rounded-t-xl mt-3">
                <div className=" bg-slate-50  py-2 pl-5 pr-6 rounded-br-xl rounded-tl-xl w-fit font-bold uppercase">
                    Technical Skills
                </div>
                <ul className="flex flex-row flex-wrap gap-x-7 gap-y-3 sm:gap-y-5  justify-center items-center px-4 md:px-6 py-1 min-h-max h-auto w-full max-w-2xl mx-auto text-white rounded-xl mt-6 mb-1 ">
                {
                    skillLists.map((skill, index) => (
                        <IconSkill key={index} skill={skill} />
                    ))
                }
                </ul>
            </div>
            
            <div className="flex justify-end w-full rounded-b-xl bg-[#0F172A]">
              <a href="https://drive.google.com/u/0/uc?id=1GJB7UXpkn5vzb5zNEDl5WaW1Lp5BUcML&export=download" target="_blank" rel="noreferrer" className="Btn bg-yellow-400 hover:bg-yellow-300 rounded-xl rounded-tr-none rounded-bl-none transition-all ease-in-out duration-300  group">
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