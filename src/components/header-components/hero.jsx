import Tabs from './tabs';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'



const hero = () => {
  const [current, setCurrent] = useState(0);
  const heroImages = [
    "/images/project1.PNG",
    "/images/project2.PNG",
    "/images/project3.PNG",
    "/images/project4.PNG"
  ];
  const About = [{ id: 1, name: 'View Projects', link: 'https://github.com/DanielApple05' }, { id: 2, name: 'Download CV', link: '/Daniel_Ejimofor_CV.pdf', download: true }];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className=' text-white xl:text-base text-xs  '>
        <div className='xl:flex hidden  xl:justify-around justify-between  w-6/12 p-4 place-self-center bg-violet-600/50 fixed top-0 z-50 rounded-b-lg mt-5 backdrop-blur-xs '>
          {Tabs.map((tab) => (
            tab.isSection ? (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className='cursor-pointer hover:text-indigo-600'>
                {tab.name}
              </a>
            ) : (
              <Link
                key={tab.id}
                to={tab.path}
                className='cursor-pointer hover:text-indigo-600'              >
                {tab.name}
              </Link>
            )
          ))}
        </div>
        < div className="relative items-center justify-center flex w-full h-[80vh] overflow-hidden rounded-3xl">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === index ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${current === index
                    ? "bg-violet-500"
                    : "bg-white/40"
                  }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 rounded-3xl bg-black/70" />
          <div className='absolute items-center flex flex-col flex-1 space-y-7 xl:p-15 p-5  xl:mt-9 m-0 '>
            <h1 className='xl:text-5xl text-3xl font-bold text-center'>
              Daniel Chukwuebuka Ejimofor
            </h1>
            <h3 className=' xl:text-lg text-sm font-semibold '>
              <span className=' xl:mr-2 mr-1'>Full Stack Developer</span> | <span className='xl:ml-2 ml-1'> Mern Stack Developer</span>
            </h3>
            <div className='flex xl:space-x-18 space-x-3'>
              {About.map((item) => (
                <button key={item.id} className='hover:shadow-lg hover:shadow-violet-700/50 hover:translate-y-1 transition-all duration-300 cursor-pointer bg-violet-950 border border-violet-500/50 hover:bg-indigo-600 rounded-md xl:px-5 px-3 py-1 text-lg'
                  onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}>
                  {item.name}
                </button>))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
