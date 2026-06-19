import React from 'react';
import Navs from './mobileTabs'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MobileNav = () => {
  return (
    <div className='flex justify-center'>
      <div className="xl:hidden flex fixed bottom-10 text-base z-20 mx-auto justify-around bg-violet-600/50 w-60 p-3 rounded-full backdrop-blur-md shadow-lg shadow-violet-700">
        {Navs.map((nav) =>
          nav.isSection ? (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className="flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:text-blue-400 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={nav.icon} />
            </a>
          ) : (
            <Link
              key={nav.id}
              to={nav.path}
              reloadDocument
              className={({ isActive }) =>
                `flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:-translate-y-1
          ${isActive ? 'bg-blue-400 text-white shadow-md' : ''}`
              }
            >
              <FontAwesomeIcon icon={nav.icon} />
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default MobileNav;
