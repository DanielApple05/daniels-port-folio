import React from 'react';
import projectsData from './projectsData';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

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
    <div className='min-h-screen bg-[#050816] text-slate-50 xl:p-20 p-5'>

      {/* Back button */}
      <Link to="/" className='text-violet-500 hover:text-blue-500 hover:underline text-sm mb-8 inline-block'>
        ← Back to Projects
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
            {project.links.map((link) => {
              if (link.name) {
                return (
                  <a
                    key={link.id}
                    href={link.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-bold py-2 px-6 flex items-center rounded-lg border border-blue-400 hover:bg-violet-500 bg-blue-700 hover:text-white hover:-translate-y-2 duration-300 transition-all'
                  >
                    {link.name}
                  </a>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className=' xl:w-[50%] w-full '>
          <img
            src={project.image}
            alt={project.title}
            className='rounded-md  xl:h-full h-52 w-full object-cover shadow-2xl ring-2 ring-white mb-8'
          />
        </div>
      </div>
      <div className='flex xl:flex-row flex-col ring ring-blue-400 rounded-lg p-3'>
        <div className=' flex flex-col  space-y-3 xl:w-[20%] w-full  items-center xl:border-r border-none p-3'>
          <p className='text-center text-violet-500'>Technologies</p>
          <div className='flex space-x-2  '>
            {project.tools && project.tools.map((tool, index) => (
              <div key={index} className='flex mt-5'>
                {tool.isAwesome
                  ? <FontAwesomeIcon icon={tool.logo} className={`xl:text-2xl text-lg  ${tool.style}`} />
                  : <tool.logo className={`w-6 h-6 ${tool.style}`} />
                }
              </div>
            ))}
          </div>
        </div>
        <div className=' space-y-1 p-2 text-sm w-auto xl:border-r border-none '>
          {
            project.description && project.description.map((description) => (<div key={description.id} className='flex space-x-2 items-center '>
              <FontAwesomeIcon icon={faCircleCheck} className='text-violet-400' />
              <p > {description}</p>
            </div>
            ))
          }
        </div>
      </div>





    </div>
  );
};

export default SingleProject;
