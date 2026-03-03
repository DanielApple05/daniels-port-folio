import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJs, faHtml5, faCss3, faTailwindCss, faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import Hero from './header-components/hero';

const aboutMe = ( id ) => {
  const projectActions = [
    { id: 1, name: 'View Demo', link: 'https://a-sneakers-ecommerce-page.vercel.app/' },
    { id: 2, name: 'View Code', link: 'https://github.com/DanielApple05/A-sneakers-Ecommerce-page' }
  ];
  const projectActions2 = [
    { id: 3, label: 'View Demo', link: 'https://todo-list-with-react-js-brown.vercel.app' },
    { id: 4, label: 'View Code', link: 'https://github.com/DanielApple05/Todo-list-with-React.js' }
  ];
  return (
    <>
      <Hero key={id} />
      <div className='xl:px-24 px-5 bg-gray-100 xl:py-15 py-5 xl:text-base text-xs'>
        <section id='about' className=''>
          <h3 className='mb-5 font-bold xl:text-xl text-lg ' >
            About Me
          </h3>
          <hr className='border-gray-400 mb-4' />
          <p>
            I am a frontend developer focused on building user interfaces and web applications with React, JavaScript, HTML, and CSS. I am passionate about creating seamless and engaging digital experiences that captivate users and drive business success. With a strong foundation in frontend development, I specialize in crafting responsive and visually appealing websites that deliver exceptional performance across all devices.
          </p>
        </section>
        <section id='skills' className='xl:my-5 my-3 '>
          <h3 className=' xl:text-xl text-lg font-bold '>
            Skills
          </h3>
          <hr className='border-gray-400 xl:my-7 my-3' />
          <div className='flex w-full xl:space-x-5 space-x-2 xl:h-50 h-40'>
            <div className='grid grid-cols-2 w-6/12 bg-white xl:p-5 p-3 xl:space-y-5 space-y-0 items-center rounded-xl shadow-lg'>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faReact} className='text-blue-500 xl:text-2xl text-lg' />
                <p>React</p>
              </div>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faJs} className='text-yellow-500 xl:text-2xl text-lg' />
                <p>JavaScript</p>
              </div>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faHtml5} className='text-orange-500 xl:text-2xl text-lg' />
                <p>HTML</p>
              </div>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faCss3} className='text-blue-600 xl:text-2xl text-lg' />
                <p>CSS</p>
              </div>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faTailwindCss} className='text-blue-400 xl:text-2xl text-lg' />
                <p>Tailwind CSS</p>
              </div>
            </div>
            <div className='grid grid-cols-2 w-6/12 bg-white xl:p-5 p-3 xl:space-y-5 space-y-0 rounded-xl items-center shadow-lg'>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faGithub} className='text-gray-800 xl:text-2xl text-lg' />
                <p>Git & GitHub</p>
              </div>
              <p>VsCode</p>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faFigma} className='text-pink-500 xl:text-2xl text-lg' />
                <p>Figma</p>
              </div>
              <p>Netlify</p>
              <p>Vercel</p>
            </div>
          </div>
        </section>
        <section id='projects' >
          <h3 className='xl:my-5 my-3 text-xl font-bold'>
            Projects
          </h3>
          <div className='flex w-full rounded-2xl xl:space-x-5 space-x-3'>
            <div className='w-6/12 xl:space-y-5 space-y-3 bg-white flex flex-col xl:p-5 p-3 rounded-xl shadow-2xl'>
              <h3 className='font-bold xl:tracking-widest tracking-wide xl:text-xl text-xs'>Sneaker E-Commerce App</h3>
              <hr className='border-gray-400' />
              <img src="/images/project1.jpeg" alt="" className='rounded-md w-12/12 shadow-2xl ring-2 ring-white' />
              <div className=' items-center flex space-x-2'>
                <FontAwesomeIcon icon={faCheck} className='text-green-600' />
                <p className='font-semibold'> Product Filters & Cart System </p>
              </div>
              <div className='flex items-center space-x-2'>
                <FontAwesomeIcon icon={faCheck} className='text-green-600' />
                <p className='font-semibold'> Dynamic Routing & Quantity Logic </p>
              </div>
              <div className='w-full flex justify-between'>
                {projectActions.map((project) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-bold py-2 px-4 rounded border border-blue-400
                 hover:bg-blue-700 hover:text-white`}>
                    {project.name}
                  </a>
                ))}
              </div>
            </div>
            <div className='w-6/12 space-y-5 bg-white flex flex-col p-5 rounded-xl shadow-2xl'>
              <h3 className='font-bold tracking-widest text-xl'> Todo App</h3>
              <hr className='border-gray-400' />
              <img src="/images/project2.jpeg" alt="" className='rounded-md w-12/12 shadow-2xl ring-2 ring-white' />
              <div className=' items-center flex space-x-2'>
                <FontAwesomeIcon icon={faCheck} className='text-green-600' />
                <p className='font-semibold'> Add, Complete & Delete Tasks </p>
              </div>
              <div className='flex items-center space-x-2'>
                <FontAwesomeIcon icon={faCheck} className='text-green-600' />
                <p className='font-semibold'> Dark Mode & Local Storage </p>
              </div>
              <div className='w-full flex justify-between'>
                {projectActions2.map((project2) => (
                  <a
                    key={project2.id}
                    href={project2.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-bold py-2 px-4 rounded border cursor-pointer border-blue-400 hover:bg-blue-700 hover:text-white`}>
                    {project2.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a href="https://github.com/DanielApple05"
            target="_blank"
            rel="noopener noreferrer"
            className='flex place-self-center bg-blue-600 rounded p-2 mt-6 text-white cursor-pointer  w-40 font-semibold'>
            View more projects
          </a>
        </section>
      </div>

    </>
  );
}

export default aboutMe;
