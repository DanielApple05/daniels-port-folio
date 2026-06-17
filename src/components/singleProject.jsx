import React from 'react';
import projectsData from './projectsData';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <Link to="/" className='text-blue-400 hover:underline text-sm mb-8 inline-block'>
        ← Back to Projects
      </Link>

      <div className='flex justify-evenly'>
        {/* Title */}
        <h1 className='font-bold xl:text-3xl text-xl w-[50%] tracking-widest mt-4 mb-6'>
          {project.title}
        </h1>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className='rounded-md  w-[50%] xl:h-96 h-52 object-cover shadow-2xl ring-2 ring-white mb-8'
        />
      </div>

      {/* Tools used */}
      <div className='flex space-x-5 justify-center ring py-3 ring-blue-400 rounded-lg mb-8'>
        {project.tools && project.tools.map((tool, index) => (
          <div key={index} className='flex items-center'>
            {tool.isAwesome
              ? <FontAwesomeIcon icon={tool.logo} className={`xl:text-2xl text-lg ${tool.style}`} />
              : <tool.logo className={`w-6 h-6 ${tool.style}`} />
            }
          </div>
        ))}
      </div>

      {/* Description */}
      <p className='text-slate-300 xl:text-base text-sm leading-relaxed mb-8'>
        {project.description}
      </p>

      {/* Links */}
      <div className='flex space-x-4'>
        {project.links.map((link) => {
          if (link.name) {
            return (
              <a
                key={link.id}
                href={link.link}
                target='_blank'
                rel='noopener noreferrer'
                className='font-bold py-2 px-6 rounded-lg border border-blue-400 hover:bg-blue-700 hover:text-white transition-all'
              >
                {link.name}
              </a>
            );
          }
          return null;
        })}
      </div>

    </div>
  );
};

export default SingleProject;
