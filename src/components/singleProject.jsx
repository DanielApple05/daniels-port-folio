import projectsData from './projectsData';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare, faCircleCheck, faArrowLeft,
  faPaperPlane, faArrowRight, faChevronLeft, faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useRef, useState } from 'react';

const SingleProject = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [imgError, setImgError] = useState({});

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -220 : 220, behavior: 'smooth' });
    }
  };

  const { id } = useParams();
  const project = projectsData.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className='min-h-screen bg-[#050816] text-slate-50 flex flex-col items-center justify-center gap-4'>
        <p className='text-lg text-gray-400'>Project not found.</p>
        <Link to="/" className='text-violet-400 hover:underline flex items-center gap-2'>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
        </Link>
      </div>
    );
  }

  const mobileImgs = project.mobileView || [];

  return (
    <div className='min-h-screen bg-[#050816] text-slate-50'>

      {/* Top nav bar */}
      <div className='sticky top-0 z-50 bg-[#050816]/90 backdrop-blur-md border-b border-white/5 px-6 xl:px-20 py-4 flex items-center justify-between'>
        <Link to="/" className='flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium transition'>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
        </Link>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-gray-500 font-medium tracking-widest uppercase'>{project.type}</span>
        </div>
      </div>

      <div className='xl:px-20 px-5 py-10 max-w-7xl mx-auto'>

        {/* Hero section */}
        <div className='grid xl:grid-cols-2 grid-cols-1 gap-10 mb-14 items-center'>
          {/* Left */}
          <div className='space-y-6 order-2 xl:order-1'>
            <div>
              <span className='text-xs font-bold tracking-widest uppercase text-violet-500 bg-violet-500/10 px-3 py-1 rounded-full'>
                {project.type}
              </span>
            </div>
            <h1 className='font-extrabold text-4xl xl:text-5xl tracking-tight text-white leading-tight'>
              {project.title}
            </h1>
            <p className='text-gray-400 text-base leading-relaxed'>
              {project.overview}
            </p>
            <div className='flex gap-3 flex-wrap'>
              <a
                href={project.links.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 font-bold py-3 px-6 rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-violet-900/40'
              >
                {project.links.name}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-sm' />
              </a>
              <a
                href={project.gitRepo.host}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 font-bold py-3 px-6 rounded-xl border border-white/10 hover:border-violet-500 text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5'
              >
                GitHub
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          {/* Right — main image */}
          <div className='order-1 xl:order-2'>
            <div className='relative rounded-2xl  overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-violet-900/30 bg-[#0F172A]'>
              {project.image && !imgError['main'] ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-64 xl:h-80 object-center object-top'
                  onError={() => setImgError(prev => ({ ...prev, main: true }))}
                />
              ) : (
                <div className='w-full h-64 xl:h-80 flex items-center justify-center bg-gradient from-violet-900/30 to-blue-900/30'>
                  <p className='text-gray-500 text-sm'>Preview coming soon</p>
                </div>
              )}
              <div className='absolute inset-0 bg-gradient from-[#050816]/60 via-transparent to-transparent pointer-events-none' />
            </div>
          </div>
        </div>

        {/* Info grid */}
        <div className='grid xl:grid-cols-3 grid-cols-1 gap-6 mb-14'>

          {/* Technologies */}
          <div className='bg-[#0F172A] rounded-2xl p-6 border border-white/5'>
            <p className='text-violet-400 font-bold text-sm uppercase tracking-widest mb-5'>Technologies</p>
            <div className='grid grid-cols-4 gap-4'>
              {project.tools?.map((tool, index) => (
                <div key={index} className='flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-violet-500/20 transition'>
                  {tool.isAwesome
                    ? <FontAwesomeIcon icon={tool.logo} className={`text-2xl ${tool.style}`} />
                    : <tool.logo className={`w-6 h-6 ${tool.style}`} />
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className='bg-[#0F172A] rounded-2xl p-6 border border-white/5 xl:col-span-2'>
            <p className='text-violet-400 font-bold text-sm uppercase tracking-widest mb-5'>Key Features</p>
            <div className='grid xl:grid-cols-2 grid-cols-1 gap-3'>
              {project.description?.map((desc, i) => (
                <div key={i} className='flex items-start gap-3'>
                  <FontAwesomeIcon icon={faCircleCheck} className='text-violet-500 text-base mt-0.5 shrink-0' />
                  <p className='text-gray-300 text-sm leading-relaxed'>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Screenshots */}
        {mobileImgs.length > 0 && (
          <div className='bg-[#0F172A] rounded-2xl p-6 border border-white/5 mb-14'>
            <p className='text-violet-400 font-bold text-sm uppercase tracking-widest mb-6'>Mobile Screenshots</p>

            <div className='xl:grid xl:gap-6 hidden'>
              {/* Thumbnail sidebar */}
              <div className='flex gap-3 shrink-0'>
                {mobileImgs.map((mobile, i) => (
                  <button
                    key={mobile.id}
                    onClick={() => setActiveImg(i)}
                    className={`w-16 h-24 rounded-xl overflow-hidden border-2 transition-all shrink-0
                      ${activeImg === i ? 'border-violet-500 shadow-lg shadow-violet-900/50' : 'border-white/5 hover:border-white/20'}`}
                  >
                    {!imgError[`thumb-${i}`] ? (
                      <img
                        src={mobile.mobileImg}
                        alt={`Screenshot ${i + 1}`}
                        className='w-full h-full object-cover object-top'
                        onError={() => setImgError(prev => ({ ...prev, [`thumb-${i}`]: true }))}
                      />
                    ) : (
                      <div className='w-full h-full bg-white/5 flex items-center justify-center'>
                        <span className='text-gray-600 text-xs'>{i + 1}</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Main view */}
              <div className='flex-1 rounded-2xl overflow-hidden bg-[#050816] flex items-center justify-center h-[480px]'>
                {!imgError[`main-mobile-${activeImg}`] ? (
                  <img
                    src={mobileImgs[activeImg]?.mobileImg}
                    alt={`Screenshot ${activeImg + 1}`}
                    className='h-full w-auto max-w-full object-contain rounded-xl'
                    onError={() => setImgError(prev => ({ ...prev, [`main-mobile-${activeImg}`]: true }))}
                  />
                ) : (
                  <div className='flex items-center justify-center text-gray-500 text-sm'>
                    Image unavailable
                  </div>
                )}
              </div>
            </div>

            {/* Mobile scroll view */}
            <div className='xl:hidden relative'>
              {showLeft && (
                <button
                  onClick={() => scroll('left')}
                  className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 bg-violet-600 hover:bg-violet-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg'
                >
                  <FontAwesomeIcon icon={faChevronLeft} className='text-xs' />
                </button>
              )}
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className='flex overflow-x-auto scrollbar-hide gap-4 py-2 px-1'
              >
                {mobileImgs.map((mobile, i) => (
                  <div key={mobile.id} className='shrink-0 w-40 h-72 rounded-2xl overflow-hidden bg-[#050816] border border-white/5'>
                    {!imgError[`scroll-${i}`] ? (
                      <img
                        src={mobile.mobileImg}
                        alt={`Screenshot ${i + 1}`}
                        className='w-full h-full object-cover object-top'
                        onError={() => setImgError(prev => ({ ...prev, [`scroll-${i}`]: true }))}
                      />
                    ) : (
                      <div className='w-full h-full flex items-center justify-center bg-white/5'>
                        <span className='text-gray-600 text-xs'>Screenshot {i + 1}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {showRight && (
                <button
                  onClick={() => scroll('right')}
                  className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 bg-violet-600 hover:bg-violet-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg'
                >
                  <FontAwesomeIcon icon={faChevronRight} className='text-xs' />
                </button>
              )}
            </div>
          </div>
        )}

        {/* CTA footer */}
        <div className='bg-gradient from-violet-900/30 to-blue-900/30 border border-white/5 rounded-2xl flex xl:flex-row flex-col items-center justify-between p-6 gap-4'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center shrink-0'>
              <FontAwesomeIcon icon={faPaperPlane} className='text-violet-400 text-lg' />
            </div>
            <div>
              <p className='font-bold text-white text-base mb-0.5'>Interested in working together?</p>
              <p className='text-gray-400 text-sm'>I'm always open to new opportunities and exciting projects.</p>
            </div>
          </div>
          <Link
            to='/contact'
            reloadDocument
            className='shrink-0 flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-violet-900/40 xl:w-auto w-full '
          >
            Get In Touch
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SingleProject;
