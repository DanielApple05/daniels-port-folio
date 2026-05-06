import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Hero from './header-components/hero';
import projectsData from './projectsData';
import skillsData from './skillsData';

const aboutMe = ({ id }) => {

  return (
    <div>
      <Hero key={id} />
      <div className='xl:px-24 px-8 bg-[#0a1841] text-gray-300 xl:py-15 py-5 xl:text-base text-xs'>
        <section id='about' className=''>
          <h3 className='mb-5 font-bold xl:text-xl text-lg ' >
            About Me
          </h3>
          <hr className='border-gray-400 mb-4' />
          <p>
            I'm a Full Stack Developer specializing in the MERN stack, with a focus on building scalable, secure, and user-friendly web applications. I've developed both frontend interfaces and backend systems, including REST APIs, authentication flows, and protected routes.
            I enjoy turning ideas into real-world products, writing clean and maintainable code, and continuously improving my skills. My recent work includes building a fully functional backend with user authentication and integrating APIs using modern development tools.
            I'm currently open to opportunities where I can contribute, grow, and build impactful digital experiences.
          </p>
        </section>
        <section id='skills' className='xl:my-5 my-10 '>
          <h3 className=' xl:text-xl text-lg font-bold '>
            Technologies I Work With 
          </h3>
          <hr className='border-gray-400 xl:my-7 my-3' />
          <div className='flex w-full xl:space-x-5 space-x-2 xl:h-50 h-40'>
            <div className='grid grid-cols-2 w-6/12 bg-[#0D1324] xl:p-5 p-3 xl:space-y-5 space-y-0 items-center rounded-xl shadow-2xl xl:text-xs text-[10px] ring ring-blue-800 '>
              {skillsData.tools.map((tool) => (
                <div key={tool.id} className='flex space-x-1 items-center'>
                  {tool.isAwesome ?
                    <FontAwesomeIcon icon={tool.logo} className={`xl:text-2xl text-lg ${tool.style}`} /> : <img src={tool.logo} alt="" />
                  }
                  <p>{tool.name}</p>
                </div>
              ))}
            </div>
            <div className='grid grid-cols-2 w-6/12 bg-[#0D1324] xl:p-5 p-3 xl:space-y-5 space-y-0 rounded-xl items-center shadow-2xl ring ring-blue-800 xl:text-xs text-[10px]'>
              {skillsData.others.map((skill) => (
                <div key={skill.id} className='flex space-x-1 items-center'>
                  {skill.isAwesome
                    ? <FontAwesomeIcon icon={skill.logo} className={`xl:text-2xl text-lg ${skill.style}`} />
                    : <img className='w-4' src={skill.logo} />
                  }
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id='projects' >
          <h3 className='xl:my-5 my-3 text-xl font-bold'>
            Projects
          </h3>
          <hr className='border-gray-400 xl:my-7 my-3' />
          <div className=' xl:grid-cols-2 grid  w-full rounded-2xl gap-x-10  space-y-5'>
            {projectsData.map((project) => (
              <div className=' max-w-full xl:space-y-5 space-y-3 ring-2 ring-blue-800 bg-[#0D1324] flex flex-col  xl:p-5 p-3 xl:min-h-150 min-h-auto rounded-xl shadow-2xl' key={project.id}>
                <h2 className='font-bold xl:tracking-widest tracking-wide xl:text-xl text-xs' >{project.title}</h2>
                <hr className='border-gray-400' />
                <img src={project.image} alt="" className='rounded-md w-12/12 shadow-2xl ring-2 ring-white xl:min-h-70 min-h-auto' />
                {project.description.map((text, index) => (
                  <div key={index} className=' items-center flex space-x-2'>
                    <FontAwesomeIcon icon={faCheck} className='text-green-600' />
                    <p className='font-semibold'> {text}</p>
                  </div>
                ))}
                <div className='flex space-x-5 justify-center ring py-2  ring-blue-400 rounded-lg '>
                  {project.tools && project.tools.map((tool, index) => (
                    <div key={index} className='flex items-center'>
                      {tool.isAwesome
                        ? <FontAwesomeIcon icon={tool.logo} className={` xl:text-xl text-base ${tool.style}`} />
                        : <tool.logo className={`w-5 h-5 ${tool.style}`} />
                      }
                    </div>
                  ))}
                </div>
                <div className='w-full flex justify-between'>
                  {project.links.map((btn) => (
                    <a
                      key={btn.id}
                      href={btn.link}
                      target="_blank"
                      className={`font-bold py-2 px-4 rounded-lg border border-blue-400
                       hover:bg-blue-700 hover:text-white`}>
                      {btn.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className=' flex place-self-center'>
          <a href="https://github.com/DanielApple05"
            target="_blank"
            rel="noopener noreferrer"
            className='flex place-self-center bg-blue-600 rounded p-2 xl:mt-6 mt-4 text-white cursor-pointer  justify-center font-semibold text-center '>
            View more projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default aboutMe;
