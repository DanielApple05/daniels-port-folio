import Tabs from './tabs';
import { Link } from "react-router-dom";


const hero = () => {
  const About = [{ id: 1, name: 'View Projects', link: 'https://github.com/DanielApple05' }, { id: 2, name: 'Download CV', link: '/Ejimofor-Daniel-Chukwuebuka-Resume.pdf', download: true }];
  return (
    <>
      <div>
        <div className='bg-blue-950 text-white xl:py-10 py-5 w-full'>
          <div className='flex justify-between xl:w-5/12 w-10/12 place-self-center xl:text-[16px] text-[12px]'>
            {Tabs.map((tab) => (
              tab.isSection ? (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className='cursor-pointer hover:text-blue-400'
                >
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
          <div className='flex w-12/12 xl:px-20 px-5 xl:mt-10 mt-3 xl:pt-5 pt-2 xl:space-x-0 space-x-5 '>
            <div className=' xl:w-4/12 w-3/12 justify-end flex xl:pt-0 pt-5'>
              <img src="/images/myIcon.jpeg" alt="My Icon" className='xl:w-60 w-20 xl:h-60 h-20 rounded-full object-cover xl:ring-5 ring-2 ' />
            </div>
            <div className='flex flex-col place-items-center xl:space-y-7 space-y-2 xl:w-7/12 w-8/12 xl:pt-5 pt-2'>
              <h1 className='xl:text-3xl text-m font-bold'>
                Daniel Chukwuebuka Ejimofor
              </h1>
              <h3 className=' xl:text-xl text-[12px] font-semibold text-blue-600'>
                <span className=' xl:mr-2 mr-1'>Frontend Developer</span> | <span className='xl:ml-2 ml-1'> React Developer</span>
              </h3>
              <p className='xl:text-[16px] text-[12px]'>
                I build responsive, user friendly web applications with React and modern UI tools.
              </p>
              <div className='flex xl:space-x-18 space-x-5'>
                {About.map((item) => (<button key={item.id} className='cursor-pointer bg-gray-400 hover:bg-blue-600 rounded-md px-5 py-1 hover:ring-1 xl:text-[16px] text-[10px]' onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}>
                  {item.name}
                </button>))}
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default hero;
