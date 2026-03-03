import Tabs from './tabs';
import { Link } from "react-router-dom";


const hero = () => {
  const About = [{ id: 1, name: 'View Projects', link: 'https://github.com/DanielApple05' }, { id: 2, name: 'Download CV', link: '/Ejimofor-Daniel-Chukwuebuka-Resume.pdf', download: true }];
  return (
    <>
      <div>
        <div className='bg-blue-950 text-white py-10 w-full'>
          <div className='flex justify-between w-5/12 place-self-center'>
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
          <div className='flex w-12/12 px-20 mt-10 pt-5'>
            <div className=' w-4/12 justify-end flex'>
              <img src="/images/myIcon.jpeg" alt="My Icon" className='w-60 h-60 rounded-full object-cover ring-5' />
            </div>
            <div className='flex flex-col place-items-center space-y-7 w-7/12 pt-5'>
              <h1 className='text-3xl font-bold'>
                Daniel Chukwuebuka Ejimofor
              </h1>
              <h3 className='text-xl font-semibold text-blue-600'>
                <span className='mr-2'>Frontend Developer</span> | <span className='ml-2'> React Developer</span>
              </h3>
              <p>
                I build responsive, user friendly web applications with React and modern UI tools.
              </p>
              <div className='flex space-x-18'>
                {About.map((item) => (<button key={item.id} className='cursor-pointer bg-gray-400 hover:bg-blue-600 rounded-md px-5 py-1' onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}>
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
