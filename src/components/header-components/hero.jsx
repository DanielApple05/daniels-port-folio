import Tabs from './tabs';
import { Link } from "react-router-dom";


const hero = () => {
  const About = [{ id: 1, name: 'View Projects', link: 'https://github.com/DanielApple05' }, { id: 2, name: 'Download CV', link: '/Daniel_Ejimofor_CV.pdf', download: true }];
  return (
    <>
      <div
        className=' text-white xl:text-base text-xs  '>
        <div className='xl:flex hidden  xl:justify-around justify-between  w-full p-4 place-self-center bg-[#0A0F1C] fixed top-0 z-50 '>
          {Tabs.map((tab) => (
            tab.isSection ? (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className='cursor-pointer hover:text-blue-400'>
                {tab.name}
              </a>
            ) : (
              <Link
                key={tab.id}
                to={tab.path}
                className='cursor-pointer hover:text-blue-400'
              >
                {tab.name}
              </Link>
            )
          ))}
        </div>
        <div className='flex flex-col justify-center xl:place-items-center xl:h-72 h-52 place-items-start space-y-7 xl:p-15 bg-[#0A1022] p-5  xl:mt-9 m-0 '>
          <h1 className='xl:text-3xl text-xs font-bold relative'>
            Daniel Chukwuebuka Ejimofor
          </h1>
          <h3 className=' xl:text-xl text-xs font-semibold text-blue-600'>
            <span className=' xl:mr-2 mr-1'>Full Stack Developer</span> | <span className='xl:ml-2 ml-1'> Mern Stack Developer</span>
          </h3>
          <div className='flex xl:space-x-18 space-x-3'>
            {About.map((item) => (
              <button key={item.id} className='cursor-pointer bg-blue-950 border border-violet-500/50 hover:bg-blue-600 rounded-md xl:px-5 px-3 py-1' 
            onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}>
              {item.name}
            </button>))}
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
