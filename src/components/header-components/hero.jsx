import Tabs from './tabs';
import { Link } from "react-router-dom";


const hero = () => {
  const About = [{ id: 1, name: 'View Projects', link: 'https://github.com/DanielApple05' }, { id: 2, name: 'Download CV', link: '/Daniel_Ejimofor_CV.pdf', download: true }];
  return (
    <div>
      <div
        style={{ backgroundImage: "url('/images/snippet.png')" }}
        className='relative text-white w-full bg-no-repeat bg-cover  xl:text-base text-xs min-h-40 flex flex-col justify-center'>
        <div className='flex  justify-between xl:w-5/12 w-full p-4 place-self-center bg-[#0A0F1C] fixed top-0 z-50 '>
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

        {/* <div className=' xl:w-4/12 w-3/12 justify-end flex items-center '>
            <img src="/images/myIcon.jpeg" alt="My Icon" className='xl:w-60 w-20 xl:h-60 h-20 rounded-full object-cover xl:ring-5 ring-2 xl:m-2 m-1 ' />
          </div> */}
        <div className='flex flex-col place-items-start xl:space-y-7 space-y-3 xl:w-10/12 w-7/12 p-5 backdrop-blur-lg mt-9 flex-1 '>
          <h1 className='xl:text-3xl text-xs font-bold relative'>
            Daniel Chukwuebuka Ejimofor
          </h1>
          <h3 className=' xl:text-xl text-xs font-semibold text-blue-600'>
            <span className=' xl:mr-2 mr-1'>Full Stack Developer</span> | <span className='xl:ml-2 ml-1'> Mern Stack Developer</span>
          </h3>

          <div className='flex xl:space-x-18 space-x-3'>
            {About.map((item) => (<button key={item.id} className='cursor-pointer bg-blue-950 ring hover:bg-blue-600 rounded-md xl:px-5 px-3 py-1 hover:ring-1 ' onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}>
              {item.name}
            </button>))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
