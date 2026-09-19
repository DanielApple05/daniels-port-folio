import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Hero from './header-components/hero';
import projectsData from './projectsData';
import experienceData from './experienceData';
import skillsData from './skillsData';
import { Link } from 'react-router-dom';
import MobileNav from './mobileNav';

const AboutMe = ({ id }) => {
  const [imgError, setImgError] = useState({});

  return (
    <div className='bg-[#050816] text-slate-50 min-h-screen'>
      <Hero key={id} />

      <div className='xl:px-20 px-5 xl:py-16 py-10 max-w-7xl mx-auto'>

        {/* About */}
        <section id='about' className='mb-14'>
          <div className='flex items-center gap-3 mb-5'>
            <div className='w-1 h-6 bg-violet-500 rounded-full' />
            <h3 className='font-bold xl:text-2xl text-xl'>About Me</h3>
          </div>
          <div className='bg-[#0F172A] rounded-2xl p-6 border border-white/5'>
            <p className='text-gray-400 leading-relaxed xl:text-base text-sm'>
              I'm a Full-Stack Developer specializing in the MERN stack, with experience building responsive, scalable, and secure web applications from frontend interfaces to backend systems. I work with React, Node.js, Express, and MongoDB to develop intuitive user experiences, REST APIs, authentication systems, protected routes, and data-driven applications.

              I enjoy turning ideas and requirements into functional products, with a strong focus on clean, maintainable code and practical solutions. My experience includes building and integrating application features, working with APIs, developing backend services, and contributing to production-oriented projects as part of a development team.

              I'm open to opportunities where I can contribute my technical skills, collaborate with other developers, and build reliable digital products that solve real-world problems.

            </p>
          </div>
        </section>

        {/* Skills */}
        <section id='skills' className='mb-14'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-1 h-6 bg-violet-500 rounded-full' />
            <h3 className='font-bold xl:text-2xl text-xl'>Technologies I Work With</h3>
          </div>

          <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
            {/* Tools */}
            <div className='bg-[#0F172A] rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300'>
              <p className='text-violet-400 text-xs font-bold uppercase tracking-widest mb-5'>Core Stack</p>
              <div className='grid grid-cols-2 gap-3'>
                {skillsData.tools.map((tool) => (
                  <div key={tool.id} className='flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2.5'>
                    {tool.isAwesome
                      ? <FontAwesomeIcon icon={tool.logo} className={`xl:text-xl text-lg shrink-0 ${tool.style}`} />
                      : <img className='w-5 h-5 shrink-0 object-contain' src={tool.logo} alt={tool.name} />
                    }
                    <p className='xl:text-sm text-xs text-gray-300'>{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Others */}
            <div className='bg-[#0F172A] rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300'>
              <p className='text-violet-400 text-xs font-bold uppercase tracking-widest mb-5'>Other Tools</p>
              <div className='grid grid-cols-2 gap-3'>
                {skillsData.others.map((skill) => (
                  <div key={skill.id} className='flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2.5'>
                    {skill.isAwesome
                      ? <FontAwesomeIcon icon={skill.logo} className={`xl:text-xl text-lg shrink-0 ${skill.style}`} />
                      : <img className='w-5 h-5 shrink-0 object-contain' src={skill.logo} alt={skill.name} />
                    }
                    <p className='xl:text-sm text-xs text-gray-300'>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id='projects'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-1 h-6 bg-violet-500 rounded-full' />
            <h3 className='font-bold xl:text-2xl text-xl'>Projects</h3>
          </div>

          <div className='grid xl:grid-cols-2 grid-cols-1 gap-6'>
            {projectsData
              .filter((project) => project.feature)
              .map((project) => (
                <div
                  key={project.id}
                  className='bg-[#0F172A] border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-violet-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/20 transition-all duration-300'
                >
                  {/* Project image */}
                  <div className='relative w-full xl:h-52 h-40 bg-[#050816] overflow-hidden'>
                    {project.image && !imgError[project.id] ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-full object-cover object-top'
                        onError={() => setImgError(prev => ({ ...prev, [project.id]: true }))}
                      />
                    ) : (
                      <div className='w-full h-full flex items-center justify-center bg-gradient from-violet-900/20 to-blue-900/20'>
                        <p className='text-gray-600 text-sm'>{project.title}</p>
                      </div>
                    )}
                    {/* Type badge */}
                    <div className='absolute top-3 left-3'>
                      <span className='text-xs font-bold text-violet-300 bg-violet-900/70 backdrop-blur-sm px-3 py-1 rounded-full'>
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='flex flex-col flex-1 p-5 gap-4'>
                    <h2 className='font-extrabold xl:text-lg text-base tracking-wide text-white'>{project.title}</h2>

                    {/* Tools row */}
                    <div className='flex flex-wrap gap-2'>
                      {project.tools?.map((tool, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-violet-500/20 transition"
                        >
                          {tool.isAwesome ? (
                            <FontAwesomeIcon
                              icon={tool.logo}
                              className={`text-base ${tool.style}`}
                            />
                          ) : (
                            <tool.logo className={`w-4 h-4 ${tool.style}`} />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className='flex gap-3 mt-auto'>
                      <a
                        href={project.links.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 font-bold py-2.5 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm transition-all duration-300 hover:-translate-y-0.5"
                      >
                        {project.links.name}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-xs' />
                      </a>
                      <Link
                        to={`/project/${project.id}`}
                        reloadDocument
                        className="flex-1 flex items-center justify-center gap-2 font-bold py-2.5 px-4 rounded-xl border border-white/10 hover:border-violet-500 text-gray-300 hover:text-white text-sm transition-all duration-300 hover:-translate-y-0.5"
                      >
                        View More
                        <FontAwesomeIcon icon={faArrowRight} className='text-xs' />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Experience */}
        <section id='experience' className='my-14'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-1 h-6 bg-violet-500 rounded-full' />
            <h3 className='font-bold xl:text-2xl text-xl'>Experience</h3>
          </div>

          <div className='space-y-5'>
            {experienceData.map((experience) => (
              <div
                key={experience.id}
                className='bg-[#0F172A] border border-white/5 rounded-2xl p-5 xl:p-6 hover:border-violet-500/30 transition-all duration-300'
              >
                <div className='flex flex-col md:flex-row gap-6'>

                  {/* Company Image */}
                  <div className='md:w-52 xl:w-80 shrink-0'>
                    <div className='w-full h-40 md:h-full min-h-40 rounded-xl overflow-hidden bg-[#050816] border border-white/5'>
                      {experience.image ? (
                        <img
                          src={experience.image}
                          alt={`${experience.company} cover`}
                          className='w-full h-full object-center'
                        />
                      ) : (
                        <div className='w-full h-full flex items-center justify-center bg-gradient from-violet-900/20 to-blue-900/20'>
                          <p className='text-gray-600 text-sm'>{project.title}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Experience Content */}
                  <div className='flex flex-col flex-1'>

                    {/* Header */}
                    <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4'>
                      <div>
                        <div className='flex flex-wrap items-center gap-2'>
                          <h4 className='font-extrabold text-white xl:text-xl text-lg'>
                            {experience.role}
                          </h4>

                          <span className='text-xs font-bold text-violet-300 bg-violet-900/40 border border-violet-500/20 px-3 py-1 rounded-full'>
                            {experience.duration}
                          </span>
                        </div>

                        <p className='text-violet-400 font-semibold text-sm mt-1'>
                          {experience.company}
                        </p>
                      </div>

                      {experience.website && (
                        <a
                          href={experience.website}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors'
                        >
                          Visit Website
                          <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className='text-xs'
                          />
                        </a>
                      )}
                    </div>

                    {/* Overview */}
                    <p className='text-gray-400 text-sm leading-relaxed mb-5'>
                      {experience.overview}
                    </p>

                    {/* Responsibilities */}
                    <div className='space-y-3'>
                      {experience.responsibilities?.map((item, index) => (
                        <div
                          key={index}
                          className='flex items-start gap-3 text-gray-400 text-sm leading-relaxed'
                        >
                          <span className='mt-2 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0' />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <MobileNav key={id} />
    </div>
  );
};

export default AboutMe;
