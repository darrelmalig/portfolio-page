import React from 'react'
import { FiDownloadCloud } from "react-icons/fi"
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im"

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
                <ul className="flex flex-row flex-wrap  justify-center px-4 py-1 min-h-max h-auto w-full text-white rounded-xl my-3 ">
                {
                    skillLists.map((skills) => (
                        <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                            <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                                {skills.skillBadge}
                                {skills.skillName}
                            </div>
                            <div className="flex flex-row gap-x-1 justify-center py-2">
                            {Array.from({ length: 5 }, (_, starIndex) => {
                                const starValue = skills.skillStar;
                                if (starValue >= starIndex + 1) {
                                    return <ImStarFull key={starIndex} className="text-gray-300 w-3 h-auto" />;
                                } else if (starValue > starIndex && starValue < starIndex + 1) {
                                    return <ImStarHalf key={starIndex} className="text-gray-300 w-3 h-auto" />;
                                } else {
                                    return <ImStarEmpty key={starIndex} className="text-gray-300 w-3 h-auto" />;
                                }
                            })}
                            </div>
                        </div>
                    ))
                }
                </ul>
            </div>
            
            <div className="flex justify-end w-full rounded-b-xl bg-[#0F172A]">
              <a href="https://drive.google.com/u/0/uc?id=1xpJmUxM-EgC_ShLjWK3_v5C-JyAGLiFn&export=download" target="_blank" rel="noreferrer" className="Btn bg-yellow-400 rounded-xl rounded-tr-none rounded-bl-none transition-all ease-in-out duration-150  group">
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