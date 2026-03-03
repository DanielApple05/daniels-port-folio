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
      <div className='xl:px-24 px-5 bg-gray-100 xl:py-15 py-5'>
        <section id='about' className=''>
          <h3 className='mb-5 font-bold' >
            About Me
          </h3>
          <hr className='border-gray-400 mb-4' />
          <p>
            I am a frontend developer focused on building user interfaces and web applications with React, JavaScript, HTML, and CSS. I am passionate about creating seamless and engaging digital experiences that captivate users and drive business success. With a strong foundation in frontend development, I specialize in crafting responsive and visually appealing websites that deliver exceptional performance across all devices.
          </p>
        </section>
        <section id='skills' className='my-5'>
          <h3 className=' text-xl font-bold '>
            Skills
          </h3>
          <hr className='border-gray-400 my-7' />
          <div className='flex w-full space-x-5 h-50'>
            <div className='grid grid-cols-2 w-6/12 bg-white p-5 space-y-5 rounded-xl shadow-lg'>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faReact} className='text-blue-500 text-2xl' />
                <p>React</p>
              </div>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faJs} className='text-yellow-500 text-2xl' />
                <p>JavaScript</p>
              </div>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faHtml5} className='text-orange-500 text-2xl' />
                <p>HTML</p>
              </div>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faCss3} className='text-blue-600 text-2xl' />
                <p>CSS</p>
              </div>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faTailwindCss} className='text-blue-400 text-2xl' />
                <p>Tailwind CSS</p>
              </div>
            </div>
            <div className='grid grid-cols-2 w-6/12 bg-white p-5 space-y-5 rounded-xl shadow-lg'>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faGithub} className='text-gray-800 text-2xl' />
                <p>Git & GitHub</p>
              </div>
              <p>VsCode</p>
              <div className='flex space-x-1'>
                <FontAwesomeIcon icon={faFigma} className='text-pink-500 text-2xl' />
                <p>Figma</p>
              </div>
              <p>Netlify</p>
              <p>Vercel</p>
            </div>
          </div>
        </section>
        <section id='projects' >
          <h3 className='my-5 text-xl font-bold'>
            Projects
          </h3>
          <div className='flex w-full rounded-2xl space-x-5'>
            <div className='w-6/12 space-y-5 bg-white flex flex-col p-5 rounded-xl shadow-2xl'>
              <h3 className='font-bold tracking-widest text-xl'>Sneaker E-Commerce App</h3>
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
