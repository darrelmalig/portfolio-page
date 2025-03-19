import React, {  useState } from 'react'
import emailJs from '@emailjs/browser'
import { FiSend } from  'react-icons/fi'
import { useSuccessToast } from '../../Hooks/useToastNotification'

const ContactForm = () => {

    const successToast = useSuccessToast();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailJs.sendForm('service_afo1xsl','template_d6coy95', e.target, 'uRaZ-lh3feTQJiLgv');

        successToast("Success");
        setName('');
        setEmail('');
        setMessage('');
    }

  return (
    <section id="contact" data-aos="fade-up" className="flex justify-center w-full px-3 lg:px-5 py-3 pt-12">
      <div className=" flex flex-col justify-center items-center align-middle h-auto w-full max-w-7xl px-5 py-10 md:py-16 magicpattern rounded-lg md:rounded-xl lg:rounded-2xl ">
        <div className="mx-auto text-center w-full max-w-xl">
          <h3 className="text-white text-center text-2xl md:text-3xl font-bold">Let's build something great together!</h3>
          <h3 className="text-white pt-3 text-center text-md sm:text:lg md:text-xl font-normal">I'm open to discussing web development projects and partnership opportunities.
          </h3>
        </div>
        <form onSubmit={sendEmail} className="mx-auto mt-6 w-full max-w-xl">

          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">

            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                Name
              </label>
              <div className="mt-1">
                <input type="text" name="name" id="name" autoComplete="name" required className="formInput"
                  value={name} onChange={(e) => { setName(e.target.value) }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                Email
              </label>
              <div className="mt-1">
                <input type="email" name="email" id="email" autoComplete="email" required className="formInput"
                  value={email} onChange={(e) => { setEmail(e.target.value) }}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                Message
              </label>
              <div className="mt-1">
                <textarea name="message" id="message" required className="formTextarea"
                  value={message} onChange={(e) => { setMessage(e.target.value) }} rows={3}
                />
              </div>
            </div>

          </div>

          <div className="mt-6 flex gap-x-3 justify-end ">
            <button type="submit" className="submitBtn group" >
              <span className="text-zinc-950 opacity-100 text-md font-medium ml-4 mr-11 group-hover:opacity-0 transition-all ease-in-out duration-300">Send</span>
              <span className="absolute right-0.5 h-full w-10 rounded-lg bg-yellow-400 flex items-center justify-center transform group-hover:translate-x-0 group-hover:right-0 group-hover:w-full transition-all duration-300">
                <FiSend className="text-zinc-950 transition-all ease-in-out duration-200 group-hover:rotate-45" />  
              </span>
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default ContactForm