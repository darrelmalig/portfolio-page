import React, { useEffect, useState } from 'react'
import DaMath from '../../Assets/Images/DaMath.webp'
import Dota2Heroes from '../../Assets/Images/Dota-2-Heroes.png'
import Pokedex from '../../Assets/Images/Pokedex.png'
import headerHero from '../../Assets/Images/Portfolio-Hero-Image.png'
import aboutMeImage from '../../Assets/Images/Portfolio-Body-Image.png'
import Lifelabrynth from '../../Assets/Images/Lifelabrynth.png'
import { DiHtml5, DiJavascript1, DiCss3, DiGit, DiGithubBadge, DiReact, DiWordpress } from "react-icons/di"
import { SiAdobeillustrator, SiAdobephotoshop,SiStoryblok, SiTailwindcss, SiGamemaker } from "react-icons/si"
import { AiFillApi } from "react-icons/ai"
import { FaVuejs } from "react-icons/fa";
import Loader from '../Loader/Loader'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Projects from './Projects'
import About from './About'
import HeroSection from './HeroSection'

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

  const skillLists = 
  [
    {
      skillId: 1,
      skillName:"HTML5",
      skillBadge: <DiHtml5 className="text-orange-500 w-5 lg:w-6 h-auto" />,
      skillStar: 4
    },
    {
      skillId: 2,
      skillName:"CSS3",
      skillBadge: <DiCss3 className="text-blue-500 w-5 lg:w-6 h-auto" />,
      skillStar: 4
    },
    {
      skillId: 3,
      skillName:"Javascript",
      skillBadge: <DiJavascript1 className="text-yellow-500 w-5 lg:w-6 h-auto" />,
      skillStar: 4
    },
    {
      skillId: 4,
      skillName:"React.js",
      skillBadge: <DiReact className=" text-cyan-400 w-5 lg:w-6 h-auto" />,
      skillStar: 3.5
    },
    {
      skillId: 5,
      skillName:"Vue.js",
      skillBadge: <FaVuejs className=" text-green-600 w-4 lg:w-5 h-auto" />,
      skillStar: 3
    },
    {
      skillId: 6,
      skillName:"Tailwind",
      skillBadge: <SiTailwindcss className=" text-sky-400 w-5 lg:w-6 h-auto" />,
      skillStar: 4
    },
    {
      skillId: 7,
      skillName:"Storyblok",
      skillBadge: <SiStoryblok className=" text-gray-300 w-5 lg:w-6 h-auto" />,
      skillStar: 3.5
    },
    {
      skillId: 8,
      skillName:"Wordpress",
      skillBadge: <DiWordpress className=" text-sky-500 w-5 lg:w-6 h-auto" />,
      skillStar: 3.5
    },
    {
      skillId: 9,
      skillName:"Git",
      skillBadge: <DiGit className=" text-red-500 w-5 lg:w-6 h-auto" />,
      skillStar: 3.5
    },
    {
      skillId: 10,
      skillName:"Illustrator",
      skillBadge: <SiAdobeillustrator className=" text-orange-400 w-4 lg:w-5 h-auto" />,
      skillStar: 4
    },
    {
      skillId: 11,
      skillName:"Photoshop",
      skillBadge: <SiAdobephotoshop className=" text-blue-600 w-4 lg:w-5 h-auto" />,
      skillStar: 3.5
    },
    {
      skillId: 12,
      skillName:"Gamemaker",
      skillBadge: <SiGamemaker className=" text-green-400 w-4 lg:w-5 h-auto" />,
      skillStar: 3
    }
  ];

  const techStackItems = [
    {
      icon: <DiHtml5 className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />,
      name: 'HTML5',
    },
    {
      icon: <DiCss3 className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />,
      name: 'CSS3',
    },
    {
      icon: <DiJavascript1 className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />,
      name: 'JavaScript',
    },
    {
      icon: <DiReact className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />,
      name: 'React',
    },
    {
      icon: <SiTailwindcss className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />,
      name: 'Tailwind CSS',
    },
    {
      icon: <SiAdobeillustrator className="w-6 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />,
      name: 'Adobe Illustrator',
    },
    {
      icon: <DiGit className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />,
      name: 'Git',
    },
    {
      icon: <DiGithubBadge className="w-7 h-auto opacity-50 transition-all ease-in-out duration-300 hover:opacity-100" />,
      name: 'GitHub',
    },
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
        <Loader />
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

      <HeroSection
        techStackItems={techStackItems}
        headerHero={headerHero}
      />

      <About 
        aboutMeImage={aboutMeImage}
        skillLists={skillLists}
      />

      <Projects 
          projects={projects}
      />

      <Contact
          notifySentMessage={notifySentMessage}
        />

      <Footer />

    </main>
  </>
  )
}

export default Home