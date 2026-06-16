import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Hero from './header-components/hero';
import projectsData from './projectsData';
import skillsData from './skillsData';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MobileNav from './mobileNav';

const aboutMe = ({ id }) => {

  const navigate = useNavigate();

  return (
    <div>
      <Hero key={id} />
      <div className='xl:p-20 p-5 bg-[#050816]  text-slate-50 xl:text-base text-xs '>
        
        <section id='about' className=''>
          <h3 className='mb-5 font-bold xl:text-xl text-lg ' >
            About Me
          </h3>
          <p>
            I'm a Full Stack Developer specializing in the MERN stack, with a focus on building scalable, secure, and user-friendly web applications. I've developed both frontend interfaces and backend systems, including REST APIs, authentication flows, and protected routes.
            I enjoy turning ideas into real-world products, writing clean and maintainable code, and continuously improving my skills. My recent work includes building a fully functional backend with user authentication and integrating APIs using modern development tools.
            I'm currently open to opportunities where I can contribute, grow, and build impactful digital experiences.
          </p>
        </section>
        <hr className='border-gray-400 mt-5' />
        <section id='skills' className='xl:my-5 my-10 '>
          <h3 className=' xl:text-xl text-lg font-bold my-10'>
            Technologies I Work With
          </h3>
          <div className='flex w-full gap-4 h-full'>
            <div className='grid grid-cols-2 w-6/12 xl:p-5 p-3 gap-3 items-center rounded-xl shadow-2xl hover:shadow-violet-500/20 xl:text-xs text-[10px]  border-2 border-[#1E293B] bg-[#0D1324] hover:translate-y-2 transition-all duration-300 cursor-pointer '>
              {skillsData.tools.map((tool) => (
                <div key={tool.id} className='flex space-x-1 items-center'>
                  {tool.isAwesome ?
                    <FontAwesomeIcon icon={tool.logo} className={`xl:text-2xl text-lg ${tool.style}`} /> : <img className={`  w-5 ${tool.style}`} src={tool.logo} alt="" />
                  }
                  <p>{tool.name}</p>
                </div>
              ))}
            </div>
            <div className='grid grid-cols-2 w-6/12 bg-[#0D1324] xl:p-5 p-3 gap-5 rounded-xl items-center shadow-2xl  border-2 border-[#1E293B] xl:text-xs text-[10px] hover:shadow-violet-500/20 hover:translate-y-2 transition-all duration-300 cursor-pointer'>
              {skillsData.others.map((skill) => (
                <div key={skill.id} className='flex space-x-1 items-center'>
                  {skill.isAwesome
                    ? <FontAwesomeIcon icon={skill.logo} className={`xl:text-2xl text-lg ${skill.style}`} />
                    : <img className='xl:w-5 w-3' src={skill.logo} />
                  }
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className='border-gray-400 xl:my-7 my-3' />
        <section id='projects' >
          <h3 className='xl:my-5 my-3 text-xl font-bold'>
            Projects
          </h3>
          <div className=' xl:grid-cols-2 grid-cols-1 grid w-full rounded-2xl gap-10 space-y-5'>
            {projectsData.map((project) => (
              <div className=' space-y-3 border-2  border-[#1E293B] bg-[#0D1324] flex flex-col xl:p-5 p-3  rounded-xl shadow-2xl' key={project.id}>
                <h2 className='font-bold xl:tracking-widest tracking-wide xl:text-lg text-xs' >{project.title}</h2>
                <hr className='border-gray-400' />
                <img src={project.image} alt="" className='rounded-md w-full xl:h-64 h-40 shadow-2xl ring-2 ring-white ' />
                {/* {project.description.map((text, index) => (
                  <div key={index} className=' items-center flex space-x-2'>
                    <FontAwesomeIcon icon={faCheck} className='text-green-600' />
                    <p className='font-semibold'> {text}</p>
                  </div>
                ))} */}
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
                  {project.links.map((link) => {
                    if (link.name) {
                      return (
                        <a
                          key={link.id}
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold py-2 px-4 rounded-lg border border-blue-400 hover:bg-blue-700 hover:text-white"
                        >
                          {link.name}
                        </a>
                      );
                    }
                    if (link.more) {
                      return (
                        <Link
                          key={link.id}
                          to="/singleProject"
                          className="font-bold py-2 px-4 rounded-lg border border-blue-400 hover:bg-blue-700 hover:text-white"
                        >
                          {link.more}
                        </Link>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
     < MobileNav key={id} />
      </div >
    </div >
  );
}

export default aboutMe;
