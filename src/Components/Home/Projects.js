import React from 'react'


const Projects = ({projects}) => {
  return (
    <section id="projects" className="projects flex flex-col p-5 py-12 items-center justify-center mx-auto w-full max-w-[2000px] min-h-[800px] lg:py-32 h-full">
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
      </section>
  )
}

export default Projects