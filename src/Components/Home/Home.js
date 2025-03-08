import React, { useEffect, useState } from 'react'
import DaMath from '../../Assets/Images/DaMath.webp'
import Dota2Heroes from '../../Assets/Images/Dota-2-Heroes.png'
import Pokedex from '../../Assets/Images/Pokedex.png'
import headerHero from '../../Assets/Images/Portfolio-Hero-Image.png'
import aboutMeImage from '../../Assets/Images/Portfolio-Body-Image.png'
import Lifelabrynth from '../../Assets/Images/Lifelabrynth.png'
import { DiHtml5, DiJavascript1, DiCss3, DiGit, DiGithubBadge, DiReact, DiWordpress } from "react-icons/di"
import { SiAdobeillustrator, SiAdobephotoshop, SiStoryblok, SiTailwindcss, SiGamemaker } from "react-icons/si"
import { FaVuejs } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi"
import { AiFillApi } from "react-icons/ai"
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im"
import Loader from '../Loader/Loader'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = ( {pageReady, pageIsReady, notifySentMessage}) => {


  const projects = 
    [
      {
        id: 1,
        projectName: "DaMath",
        projectDesc: "DaMath is a mobile board game that I created for my Capstone project in college.",
        projectLink: "https://drive.google.com/drive/folders/1l-br0WG6LzjhUI0BlgCokvihmqE-WELM?usp=sharing",
        projectImage: DaMath,
        projectTech: [
          <SiGamemaker key="1" className="w-5 h-auto" />,
          <SiAdobephotoshop key="2" className="w-5 h-auto" />,
          <SiAdobeillustrator key="3" className="w-5 h-auto" />
        ],
        projectStatus: "Published"
      },
      {
        id: 2,
        projectName: "Dota2 Heroes",
        projectDesc: "Cloned Dota 2 Heroes page that uses the Opendota API to fetch/request data.",
        projectLink: "https://dota-2-heroes.netlify.app/",
        projectImage: Dota2Heroes,
        projectTech: [
          <DiHtml5 key="4" className="w-5 h-auto" />,
          <DiCss3 key="5" className="w-5 h-auto" />,
          <SiTailwindcss key="6" className="w-5 h-auto" />,
          <DiReact key="7" className="w-5 h-auto" />,
          <DiGithubBadge key="8" className="w-5 h-auto" />,
          <AiFillApi key="9" className="w-5 h-auto" />
        ],
        projectStatus: "Published"
      },
      {
        id: 3,
        projectName: "Lifelabrynth",
        projectDesc: "A static web page that is created using Wordpress + Elementor",
        projectLink: "https://darrelmalig.github.io/lifelabyrinth/",
        projectImage: Lifelabrynth,
        projectTech: [
          <DiHtml5 key="10" className="w-5 h-auto" />,
          <DiCss3 key="11" className="w-5 h-auto" />,
          <DiJavascript1 key="12" className="w-5 h-auto" />,
          <DiWordpress key="13" className="w-5 h-auto" />,
          <DiGithubBadge key="15" className="w-5 h-auto" />
        ],
        projectStatus: "Published"
      },
      {
        id: 4,
        projectName: "Pokedex",
        projectDesc: "A Web Pokedex page where you can browse and check data of pokemons from all generations",
        projectLink: "#projects",
        projectImage: Pokedex,
        projectTech: [
          <DiHtml5 key="10" className="w-5 h-auto" />,
          <DiCss3 key="11" className="w-5 h-auto" />,
          <DiJavascript1 key="12" className="w-5 h-auto" />,
          <SiTailwindcss key="13" className="w-5 h-auto" />,
          <DiReact key="14" className="w-5 h-auto" />,
          <DiGithubBadge key="15" className="w-5 h-auto" />,
          <AiFillApi key="16" className="w-5 h-auto" />
        ],
        projectStatus: "Developing"
      }
    ];

    
  AOS.init();

  /*Initialize AOS*/
  useEffect(() => {
    AOS.init();
  }, [])

  /*Checking if all elements are already loaded*/
  useEffect(() => {
    const loadElements = async () => {
        const mainPage = await document.getElementById("home");
        mainPage.style.display = "block";
        pageIsReady(true);
    }

    setTimeout( () => {
      ( async () => await loadElements())();
    }, 10000 );
    
  }, [pageIsReady])

  /*Checking for scroll pos for back to top button */
  var height = window.outerHeight;
  const [status, setStatus] = useState(false);

  const currentHeight = () => {
    height = window.outerHeight;
  }

  const scrollHeight = () => {
    if(document.documentElement.scrollTop > (height/2)) {
      setStatus(true);
    }
    else{
      setStatus(false);
    }
  }

  window.addEventListener('resize', currentHeight);
  window.addEventListener('scroll', scrollHeight);

  return (
  <>
    {/*Loading Screen while waiting for all elements to load*/}
    { pageReady ? "" :
      <div id="loading-screen" className="absolute top-0 bg-slate-50 h-screen w-screen z-50 flex justify-center align-middle items-center text-xl font-semibold transition-all ease-in-out duration-200">
        <Loader />
      </div>
    }

    <main id="home" className="hidden">

      <a id="btn-back-to-top" className={`transition-all ease-in-out duration-500 ${status ? "opacity-100" : "opacity-0"}`} href="#home">
        <button
          type="button"
          className="!fixed bottom-5 right-5 block rounded-xl bg-yellow-400 p-3 text-xs font-medium uppercase leading-tight text-zinc-900 opacity-50 shadow-md transition-all ease-in-out duration-300 hover:bg-yellow-500 hover:shadow-lg hover:opacity-100 hover:scale-105 z-50">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="h-4 w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
          </svg>
        </button>
      </a>

      <div className="flex mx-auto w-full max-w-[2000px] min-h-[950px] md:px-6 ">
        <div className="flex flex-col-reverse gap-y-2 py-5 pb-10 w-full justify-center items-center align-middle lg:pb-5 lg:flex-row lg:gap-0 lg:justify-between">
          <div className="flex flex-col justify-center items-center w-full h-auto gap-2 py-10 px-8 text-white text-center lg:py-5 lg:items-start lg:max-w-3xl lg:text-left">
            
            <h1 className="text-4xl font-semi-bold text-zinc-700 sm:text-6xl lg:text-7xl  font-agency">HI!</h1>
            
            <h1 className="text-4xl flex flex-row font-semi-bold text-zinc-700 sm:text-6xl lg:text-7xl font-agency">
              I AM&nbsp;
              <strong className="text-blue-600 flex flex-row ">
                DARREL
              </strong>
            </h1>
            
            <h2 className="text-3xl text-zinc-700  font-agency-fb">FRONT-END DEVELOPER</h2>
            <p className=" text-lg mt-2 text-zinc-700 max-w-3xl lg:max-w-none ">I enjoy designing and coding things that are stunningly simple.</p>
            <div className=" text-slate-500 pt-3 flex flex-row gap-x-1">
              <DiHtml5 className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />
              <DiCss3 className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />
              <DiJavascript1 className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />
              <DiReact className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />
              <SiTailwindcss className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />
              <SiAdobeillustrator className="w-6 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />
              <DiGit className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />
              <DiGithubBadge className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />
            </div>

          </div>
          <div  className="flex justify-center w-full h-auto text-white lg:max-w-4xl">
            <img alt="hero" src={headerHero} className="w-full py-5 px-16 h-auto max-w-2xl lg:px-10 lg:max-w-4xl" />
          </div>      
        </div> 
      </div>

      <div className="bg-blue-600 magicpattern flex justify-center align-middle items-center w-full min-h-[800px]">
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
              <div className="flex flex-row flex-wrap  justify-center px-4 py-1 min-h-max h-auto w-full text-white rounded-xl my-3 ">
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                    <DiHtml5 className="text-orange-500 w-5 lg:w-6 h-auto" />
                    HTML5
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                    <DiCss3 className="text-blue-500 w-5 lg:w-6 h-auto" />
                    CSS3
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                    <DiJavascript1 className="text-yellow-500 w-5 lg:w-6 h-auto" />
                    Javascript
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                    <DiReact className=" text-cyan-400 w-5 lg:w-6 h-auto" />
                    React JS
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarHalf className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                  <FaVuejs className=" text-green-600 w-4 lg:w-5 h-auto" />
                    Vue JS
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                    <SiTailwindcss className=" text-sky-400 w-5 lg:w-6 h-auto" />
                    Tailwind
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarHalf className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                    <SiStoryblok className=" text-gray-300 w-5 lg:w-6 h-auto" />
                    Storyblok
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarHalf className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                    <DiWordpress className=" text-sky-500 w-5 lg:w-6 h-auto" />
                    Wordpress
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                    <DiGit className=" text-red-500 w-5 lg:w-6 h-auto" />
                    Git
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarHalf className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                  <SiAdobeillustrator className=" text-orange-400 w-4 lg:w-5 h-auto" />
                    Illustrator
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                    <SiAdobephotoshop className=" text-blue-600 w-4 lg:w-5 h-auto" />
                    Photoshop
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 justify-center items-center">
                  <div className="flex flex-row lg:text-md font-normal text-white gap-x-1.5">
                    <SiGamemaker className=" text-green-400 w-4 lg:w-5 h-auto" />
                    Gamemaker
                  </div>
                  <div className="flex flex-row gap-x-1 justify-center py-2">
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarFull className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                    <ImStarEmpty className="text-gray-300 w-3 h-auto" />
                  </div>
                </div>

              </div>
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
      </div>

      <div id="projects" className="projects flex flex-col p-5 py-12 items-center justify-center mx-auto w-full max-w-[2000px] min-h-[800px] lg:py-32 h-full">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className="flex flex-col justify-center align-middle items-center gap-2 max-w-2xl">
          <h3 className="text-4xl text-zinc-700 text-center font-bold" >My Projects</h3>
          <p className="text-md sm:text-lg text-center text-zinc-700 py-1 sm:py-4"> Here are some of the projects I've worked on.</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className="max-w-7xl py-5 pt-10">
          <ul className="flex flex-wrap flex-row gap-5 justify-center items-center align-middle ">
            {
              projects.map((project) => (
                <a href={project.projectLink} key={project.id} target={`${project.id===3?"":"_blank"}`} rel="noreferrer">
                  <li style={{ backgroundImage: `url(${project.projectImage})` }} className="text-white flex justify-end items-end bg-cover bg-no-repeat bg-center w-80 h-80 rounded-lg transition-all ease-in-out duration-500 overflow-hidden shadow-md drop-shadow-md  shadow-slate-500 bg-gree hover:cursor-pointer group relative" >
                    <div className={`absolute ${project.projectStatus === "Published" ? "bg-green-500" : "bg-orange-500"} top-0 right-0 py-1.5 px-2.5 rounded-bl-lg bg-opacity-90 font-semibold text-sm z-30`}>{project.projectStatus}</div>
                    <div className="project-gradient-bg opacity-0 flex flex-col p-6 h-full transition-all ease-in-out duration-800 rounded-b-lg justify-end w-full group-hover:opacity-100">
                      <h4 className="text-3xl font-semibold mb-80 opacity-0 transition-all ease-in-out duration-500 py-1 group-hover:opacity-100 group-hover:mb-0 font-agency-fb">
                        {project.projectName}
                      </h4>
                      <p className="text-sm text-left break-words mb-80 opacity-0 transition-all ease-in-out duration-500 py-2 pb-3 group-hover:opacity-100 border-b-white border-b-2 group-hover:mb-0">
                        {project.projectDesc}
                      </p>
                      <div className=" flex flex-row flex-wrap gap-x-3 text-xs text-left break-words mb-80 opacity-0 transition-all ease-in-out duration-500 py-2 group-hover:opacity-100 group-hover:mb-0">
                        {project.projectTech}
                      </div>
                    </div>
                  </li>
                </a>
              ))
            }
          </ul>
        </div>
      </div>

      <div id="contact" data-aos="fade-up" className="flex justify-center w-full px-3 lg:px-5 py-3 pt-12">
        <Contact
          notifySentMessage={notifySentMessage}
        />
      </div>

      <Footer />

    </main>
  </>
  )
}

export default Home