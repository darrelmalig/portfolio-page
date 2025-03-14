import React from 'react'

const HeroSection = ({headerHero, techStackItems}) => {
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
              <React.Fragment key={index}>{item.icon}</React.Fragment>
            ))}
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