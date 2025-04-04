import React from 'react'
import { useState } from 'react'

const BackToTopButton = () => {

    /*Checking for scroll pos for back to top button */
  var height = window.outerHeight;
  const [status, setStatus] = useState(false);

  const currentHeight = () => {
    height = window.outerHeight;
  }

  const scrollHeight = () => {
    document.documentElement.scrollTop > (height/2)
      ? setStatus(true) 
      : setStatus(false);
  }

  window.addEventListener('resize', currentHeight);
  window.addEventListener('scroll', scrollHeight);

  return (
    <a id="btn-back-to-top" data-testid="backToTopBtn" href="#home" className={`!fixed bottom-5 right-5 block rounded-xl bg-yellow-400 p-3 text-xs font-medium uppercase leading-tight text-zinc-900 shadow-md transition-all ease-in-out duration-500 hover:bg-yellow-500 hover:shadow-lg hover:scale-105 z-50 ${status ? "opacity-70  hover:opacity-100 " : "opacity-0 pointer-events-none"}`}>
          <svg  aria-hidden="true" focusable="false" data-prefix="fas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4" >
            <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
          </svg>
    </a>
  )
}

export default BackToTopButton