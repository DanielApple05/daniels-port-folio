import React from 'react';
import projectsData from './projectsData';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCircleCheck, faArrowLeft, faPaperPlane, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SingleProject = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className='min-h-screen bg-[#050816] text-slate-50 flex items-center justify-center'>
        <p>Project not found.</p>
        <Link to="/" className='ml-4 text-blue-400 underline'>Go Home</Link>
      </div>
    );
  }

  return (
    <div className=' flex flex-col bg-[#050816] text-slate-50 xl:p-20 p-5'>
      <Link
        to="/" className='text-violet-500 hover:text-blue-500 hover:underline text-sm mb-8 inline-block'>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
      </Link>

      <div className='flex xl:flex-row flex-col-reverse justify-evenly xl:mb-16 mb-6'>
        <div className=' xl:w-[50%] w-full pr-10 py-10 space-y-5 '>
          <h6 className='font-bold xl:text-xl text-lg text-violet-500 tracking-widest'>
            {project.type}
          </h6>
          <h1 className='font-bold xl:text-3xl text-xl tracking-widest'>
            {project.title}
          </h1>
          <p>
            {project.overview}
          </p>
          <div className='flex space-x-4'>
            <a
              key={project.id}
              href={project.links.link}
              target='_blank'
              rel='noopener noreferrer'
              className='font-bold py-2 px-6 flex items-center rounded-lg border border-blue-400 hover:bg-violet-500 bg-[#2563EB] hover:text-white hover:-translate-y-2 duration-300 transition-all'
            >
              {project.links.name}
            </a>
          </div>
        </div>
        <div className=' xl:w-[50%] w-full shadow-2xl shadow-violet-500 '>
          <img
            src={project.image}
            alt={project.title}
            className='rounded-md  xl:h-full h-52 w-full shadow-2xl ring-2 ring-white '
          />
        </div>
      </div>
      <div className='flex xl:flex-row flex-col border border-blue-400 rounded-lg p-3 xl:min-h-36 min-h-auto bg-[#0F172A]'>
        <div className=' flex flex-col xl:w-[30%] w-full items-center xl:border-x-2 border-y-2 xl:border-y-0 border-gray-400 p-3'>
          <p className='text-center font-semibold text-2xl xl:text-base text-violet-500 mb-3'>Technologies</p>
          <div className=' grid xl:grid-cols-2 grid-cols-3  mb-3 xl:mb-0 items-center justify-between w-full '>
            {project.tools && project.tools.map((tool, index) => (
              <div key={index} className='flex mt-5 items-center' >
                {tool.isAwesome
                  ? <FontAwesomeIcon icon={tool.logo} className={`xl:text-2xl text-4xl  ${tool.style}`} />
                  : <tool.logo className={`w-9 h-9 ${tool.style}`} />
                }
              </div>
            ))}
          </div>
        </div>
        <div className='space-y-1 p-2  xl:w-[40%] w-full my-3 xl:my-0 '>
          <p className='text-center text-2xl xl:text-base font-semibold text-violet-500'>Description</p>
          {
            project.description && project.description.slice(0, 5).map((description) => (
              <div key={description.id} className='flex space-x-2 items-center  '>
                <FontAwesomeIcon icon={faCircleCheck} className='text-violet-400 text-xl' />
                <p className='mb-2 text-lg ' > {description}</p>
              </div>
            ))
          }
        </div>
        <div className='space-y-2 p-2 xl:w-[30%] w-full  xl:border-x-2 border-y-2 xl:border-y-0 border-gray-400'>
          <p className='text-center font-semibold text-violet-500 text-2xl xl:text-base' >Links</p>
          <a
            key={project.id}
            href={project.links.link}
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold py-2 px-6 flex items-center justify-between rounded-lg border border-blue-400 hover:bg-violet-500 hover:text-white hover:-translate-y-0.5 duration-300 transition-all'
          >
            {project.links.name}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-xl' />
          </a>
          <a
            key={project.id}
            href={project.gitRepo.host}
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold py-2 px-6 flex items-center justify-between rounded-lg border border-blue-400 hover:bg-violet-500 hover:text-white hover:-translate-y-0.5 duration-300 transition-all'
          >
            <p> View GitHub</p>
            <FontAwesomeIcon icon={project.gitRepo.icon} className='text-xl' />
          </a>
        </div>
      </div>
      <div className='bg-[#0F172A] flex justify-between mt-16 h-28 text-lg  items-center rounded-lg'>
        <div className='flex items-center space-x-3 m-3 '>
          <div className='flex item-center justify-center'>
            <FontAwesomeIcon icon={faPaperPlane} className='xl:text-4xl text-lg text-[#7C3AED]' />
          </div>
         <div className='xl:text-base text-xs xl:max-w-5xl max-w-xl'>
           <p className='mb-2'> Interested in worrking with us ?</p>
          <p>I'm always open to discussing new opportunities and exciting projects.</p>
         </div>
        </div>
        <button className=' flex items-center space-x-2 bg-[#7C3AED] rounded-l-lg p-2 cursor-pointer hover:translate-x-0.5 duration-300 transition-all hover:shadow-lg hover:shadow-violet-700/50 '>
          <p className='xl:text-base text-sm '>Get In Touch</p>
          <FontAwesomeIcon icon={faArrowRight} className='xl:text-lg text-sm' />
        </button>
      </div>
    </div>
  );
};

export default SingleProject;
