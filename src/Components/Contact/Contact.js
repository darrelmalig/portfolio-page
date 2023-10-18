import React, {  useState } from 'react'
import emailJs from '@emailjs/browser'
import { FiSend } from  'react-icons/fi'

const Contact = ({notifySentMessage}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailJs.sendForm('service_lgralfg','template_wxj89pl', e.target, '1ST_eh9wLuyXlJwTZ');

        notifySentMessage();
        setName('');
        setEmail('');
        setMessage('');
    }

  return (
    <div className=" flex flex-col justify-center items-center align-middle h-auto w-full max-w-7xl px-5 py-16 magicpattern rounded-lg md:rounded-xl lg:rounded-2xl ">
      <div className="mx-auto text-center w-full max-w-xl">
        <h3 className="text-white text-center text-3xl font-bold">Interested in collaborating with me?</h3>
        <h3 className="text-white pt-3 text-center text-xl font-normal">I’m always open to discussing product design work or partnership opportunities.
        </h3>
      </div>
      <form onSubmit={sendEmail} className="mx-auto mt-6 w-full max-w-xl">

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">

          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              Message
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                id="message"
                required
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>

        </div>

        <div className="mt-6 flex gap-x-3 justify-end ">
          <button
            type="submit"
            class="rounded-lg relative w-fit h-10 cursor-pointer flex items-center bg-yellow-400 group"
          >
            <span class="text-zinc-950 opacity-100 text-md font-medium ml-4 mr-11 group-hover:opacity-0 transition-all ease-in-out duration-300">Send</span>
            <span class="absolute right-0.5 h-full w-10 rounded-lg bg-yellow-400 flex items-center justify-center transform group-hover:translate-x-0 group-hover:right-0 group-hover:w-full transition-all duration-300">
            <FiSend class="text-zinc-950 transition-all ease-in-out duration-200 group-hover:rotate-45" />
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact