import React from 'react'

const IconSkill = ({skill}) => {
  return (
    <li className="flex flex-col w-fit justify-center">
        <div className="flex flex-row lg:text-md font-normal text-white gap-x-1 items-center justify-start">
            {skill.icon}
            {skill.name}
        </div>
    </li>
  )
}

export default IconSkill