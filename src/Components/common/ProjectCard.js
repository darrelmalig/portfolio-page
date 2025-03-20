import React from 'react'
import Tooltip from './Tooltip'

const ProjectCard = ({project}) => {
  console.log(project)
  return (
    <a href={project.projectLink} target={`${project.isLive ? "_blank" : ""}`} rel="noreferrer" className={`${project.isLive ? "cursor-pointer" : "cursor-not-allowed"}`}>
        <li style={{ backgroundImage: `url(${project.projectImage})` }} className="projectCard group " >
        <div className={`absolute ${project.isLive ? "bg-green-600" : "bg-orange-500"} top-0 right-0 py-1.5 px-2.5 rounded-bl-lg bg-opacity-95 font-semibold text-sm z-30 `}>
            {project.isLive ? "View Project" : "Coming soon"}
        </div>
        <div className="project-gradient-bg opacity-0 flex flex-col p-6 h-full transition-all ease-in-out duration-800 rounded-b-lg justify-end w-full group-hover:opacity-100">
            <h4 className="text-3xl font-semibold mb-80 opacity-0 transition-all ease-in-out duration-500 py-1 group-hover:opacity-100 group-hover:mb-0 font-agency-fb">
            {project.projectName}
            </h4>
            <p className="text-sm text-left break-words mb-80 opacity-0 transition-all ease-in-out duration-500 py-2 pb-3 group-hover:opacity-100 border-b-white border-b-2 group-hover:mb-0">
            {project.projectDesc}
            </p>
            <div className=" flex flex-row flex-wrap gap-x-3 text-xs text-left break-words mb-80 opacity-0 transition-all ease-in-out duration-500 py-2 group-hover:opacity-100 group-hover:mb-0">
            {project.projectTech.map((tech, index) => (
              <React.Fragment key={index}>
                <Tooltip text={tech.name} element={tech.icon}  />
              </React.Fragment>
            ))}
            </div>
        </div>
        </li>
    </a>
  )
}

export default ProjectCard