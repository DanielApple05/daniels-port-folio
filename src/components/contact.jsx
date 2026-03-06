import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocation } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';

const contact = () => {
  const contactInfo = [
    { id: 1, icon: faEnvelope, text: "ejimofordanielchukwuebuka@gmail.com", link: "https://mailto:ejimofordanielchukwuebuka@gmail.com" },
    { id: 2, icon: faPhone, text: "08103439913", link: "tel:+2348103439913" },
    { id: 3, icon: faLinkedin, text: "linkedin.com/in/ejimofor-daniel", link: "https://www.linkedin.com/in/daniel-ejimofor" },
    { id: 4, icon: faLocation, text: "Nigeria" },
  ];
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [state, handleSubmit] = useForm("mzdjbkrq");
  if (state.succeeded) {
    alert('Thanks for reaching out, your message has been sent')
  }

  return (
    <div
      style={{ backgroundImage: "url('/images/contactBg.png')" }}
      className="w-full min-h-screen max-w-full bg-cover bg-center relative xl:px-30 px-5 place-items-center flex xl:py-10 py-5 xl:text-base text-xs text-gray-400  " >
      <div className="absolute inset-0 xl:bg-black/70 bg-black/20 backdrop-blur-sm pointer-events-none"></div>
      <div className="relative  w-full ">
        <div className=" flex xl:mb-10 mb-15 xl:pl-8 pl-0 xl:pr-8 pr-o ">
          <div className=" w-6/12 flex flex-col xl:space-y-3 space-y-1 ">
            <h3 className="xl:text-3xl text-lg font-bold tracking-wide ">
              Contact Me
            </h3>
            <p>
              Let's build something impactful together.
            </p>
          </div>
          <div className="relative w-6/12  justify-end flex xl:pt-5 pt-2 ">
            <Link to="/" className="text-sm bg-blue-400 hover:ring-2 cursor-pointer xl:p-3 p-2 rounded-full items-center flex font-medium transition text-white">About Me</Link>
          </div>
        </div>
        <div className="w-full flex xl:flex-row flex-col-reverse  justify-around gap-10 ">
          <div className="xl:w-5/12 w-full xl:bg-gray-800/30 bg-gray-800/50 rounded-lg p-5 xl:space-y-5 space-y-2 place-content-center flex flex-col ">
            <div>
              <h5 className="xlz:text-3xl text-lg font-semibold mb-4">Let's Work Together!</h5>
              <p className="text-sm">
                I'm open to Internship and junior frontend opportuinities. Feel free to reach out for collaborations, projects, or just a chat about tech and web development.
              </p>
            </div>
            <hr className=" border-gray-600" />
            <div>
              {contactInfo.map((info) => (
                <div key={info.id} className="flex  my-4 ">
                  <FontAwesomeIcon icon={info.icon} className="text-xl text-blue-400" />
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="ml-2 text-sm hover:text-blue-400 transition">
                      {info.text}
                    </a> ) : (<span className="ml-2 text-sm">{info.text}</span> )}
                </div>
              ))}
            </div>
          </div>
          <div className="xl:w-5/12 w-full xl:bg-gray-800/30 bg-gray-800/50 rounded-lg p-5 text-sm ">
            <h5 className="text-2xl font-semibold my-4">Send Me A Message</h5>
            <form
              onSubmit={handleSubmit} >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-2 mb-4 bg-gray-700 rounded-md text-white"
                value={name}
                onChange={(e) => setName(e.target.value)} />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors} />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-2 mb-4 bg-gray-700 rounded-md text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors} />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-2 mb-2 bg-gray-700 rounded-md text-white h-32"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors} />
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-500 hover:bg-blue-600 hover:ring cursor-pointer text-white py-2 px-4 rounded-md">
                {state.submitting ? 'Submitting...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default contact;
