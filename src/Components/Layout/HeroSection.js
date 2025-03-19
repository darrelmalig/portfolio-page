import React from 'react'
import Tooltip from '../common/Tooltip'
import headerHero from '../../Assets/Images/Portfolio-Hero-Image.png'
import { DiHtml5, DiJavascript1, DiCss3, DiGit, DiGithubBadge, DiReact } from "react-icons/di"
import { SiTailwindcss  } from "react-icons/si"

const techStackItems = [
    {
      icon: <DiHtml5 className="techIcon" />,
      name: 'HTML5',
    },
    {
      icon: <DiCss3 className="techIcon" />,
      name: 'CSS3',
    },
    {
      icon: <DiJavascript1 className="techIcon" />,
      name: 'JavaScript',
    },
    {
      icon: <DiReact className="techIcon" />,
      name: 'React',
    },
    {
      icon: <SiTailwindcss className="techIcon" />,
      name: 'Tailwind',
    },
    {
      icon: <DiGit className="techIcon" />,
      name: 'Git',
    },
    {
      icon: <DiGithubBadge className="techIcon" />,
      name: 'GitHub',
    },
  ];

const HeroSection = () => {
  return (
    <section className="flex mx-auto w-full max-w-[2000px] min-h-[950px] md:px-6 ">
      <div className="flex flex-col-reverse gap-y-2 py-5 pb-10 w-full justify-center items-center align-middle lg:pb-5 lg:flex-row lg:gap-0 lg:justify-between">
        <div className="flex flex-col justify-center items-center w-full h-auto gap-2 py-10 px-8 text-white text-center lg:py-5 lg:items-start lg:max-w-3xl lg:text-left">
          <h1 className="text-4xl font-semi-bold text-zinc-700 sm:text-6xl lg:text-7xl  font-agency">
            HI!
          </h1>
          <h1 className="text-4xl flex flex-row font-semi-bold text-zinc-700 sm:text-6xl lg:text-7xl font-agency">
            I AM&nbsp;
            <strong className="text-blue-600 flex flex-row ">DARREL</strong>
          </h1>
          <h2 className="text-3xl text-zinc-700  font-agency-fb">
            FRONT-END DEVELOPER
          </h2>
          <p className=" text-lg mt-2 text-zinc-700 max-w-3xl lg:max-w-none ">
            My Happy Place: Coding and Designing Simple, Amazing Things for the
            Web.
          </p>
          <div id="techStack" className=" text-slate-500 pt-3 flex flex-row gap-x-1">
            {techStackItems.map((item, index) => (
              <React.Fragment key={index}>
                <Tooltip text={item.name} element={item.icon}  />
              </React.Fragment>
            ))}
          </div>
          <div id="ctaButtons" className='mt-4'>
            <a href="#contact" className="rounded-lg relative w-fit px-6 py-2 cursor-pointer flex items-center border-2 border-yellow-400 bg-yellow-400 transition-all ease-in-out duration-300 text-zinc-950 font-medium hover:bg-yellow-300 hover:border-yellow-300 hover:-translate-y-0.5" >Hire me!</a>
          </div>
        </div>
        <div className="flex justify-center w-full h-auto text-white lg:max-w-4xl">
          <img
            alt="hero"
            src={headerHero}
            className="w-full py-5 px-16 h-auto max-w-2xl lg:px-10 lg:max-w-4xl"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection