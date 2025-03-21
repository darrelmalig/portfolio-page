import React from 'react'
import DaMath from '../../Assets/Images/DaMath.webp'
import Dota2Heroes from '../../Assets/Images/Dota-2-Heroes.png'
import Pokedex from '../../Assets/Images/Pokedex.png'
import Lifelabrynth from '../../Assets/Images/Lifelabrynth.png'
import ProjectCard from '../common/ProjectCard'
import { DiHtml5, DiJavascript1, DiCss3, DiGithubBadge, DiReact, DiWordpress } from "react-icons/di"
import { SiAdobeillustrator, SiAdobephotoshop, SiTailwindcss, SiGamemaker  } from "react-icons/si"
import { AiFillApi } from "react-icons/ai"

// Define project technology icons in a separate object for reusability
const techIcons = {
  Gamemaker: <SiGamemaker className="techIconLight" />,
  Photoshop: <SiAdobephotoshop className="techIconLight" />,
  Illustrator: <SiAdobeillustrator className="techIconLight" />,
  HTML5: <DiHtml5 className="techIconLight" />,
  CSS3: <DiCss3 className="techIconLight" />,
  Tailwind: <SiTailwindcss className="techIconLight" />,
  React: <DiReact className="techIconLight" />,
  Github: <DiGithubBadge className="techIconLight" />,
  API: <AiFillApi className="techIconLight" />,
  Javascript: <DiJavascript1 className="techIconLight" />,
  Wordpress: <DiWordpress className="techIconLight" />,
};

// Define projects data
const projects = [
  {
    projectName: "DaMath",
    projectDesc: "DaMath is a mobile board game that I created for my Capstone project in college.",
    projectLink: "https://drive.google.com/drive/folders/1l-br0WG6LzjhUI0BlgCokvihmqE-WELM?usp=sharing",
    projectImage: DaMath,
    projectTech: ['Gamemaker', 'Photoshop', 'Illustrator'],
    isLive: true,
  },
  {
    projectName: "Dota2 Heroes",
    projectDesc: "Cloned Dota 2 Heroes page that uses the Opendota API to fetch/request data.",
    projectLink: "https://dota-2-heroes.netlify.app/",
    projectImage: Dota2Heroes,
    projectTech: ['HTML5', 'CSS3', 'Tailwind', 'React', 'Github', 'API'],
    isLive: true,
  },
  {
    projectName: "Lifelabrynth",
    projectDesc: "A static web page that is created using Wordpress + Elementor.",
    projectLink: "https://darrelmalig.github.io/lifelabyrinth/",
    projectImage: Lifelabrynth,
    projectTech: ['HTML5' , 'CSS3', 'Javascript', 'Wordpress', 'Github'],
    isLive: true,
  },
  {
    projectName: "Pokedex",
    projectDesc: "A Web Pokedex page where you can browse and check data of pokemons from all generations.",
    projectLink: "#projects",
    projectImage: Pokedex,
    projectTech: ['HTML5', 'CSS3', 'Tailwind', 'React', 'Github', 'API'],
    isLive: false,
  },
];


const Projects = React.forwardRef((props, ref) => {

  const projectsRef = ref;
  
  return (
    <section ref={projectsRef} id="projects" className="projects flex flex-col p-5 py-12 items-center justify-center mx-auto w-full max-w-[2000px] min-h-[800px] lg:py-32 h-full">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className="flex flex-col justify-center align-middle items-center gap-2 max-w-2xl">
          <h3 className="text-4xl text-zinc-700 text-center font-bold" >My Projects</h3>
          <p className="text-md sm:text-lg text-center text-zinc-700 py-1 sm:py-4"> Here are some of the projects I've worked on.</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine" className="max-w-7xl py-5 pt-10">
          <ul className="flex flex-wrap flex-row gap-5 justify-center items-center align-middle ">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={{ ...project, projectTech: project.projectTech.map(tech => ({ name: tech, icon: techIcons[tech] })) }} />
            ))}
          </ul>
        </div>
      </section>
  )
})

export default Projects