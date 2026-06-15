import React from 'react';
import Navs from './mobileTabs'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MobileNav = () => {
  return (
    <div className='flex justify-center'>
      <div className='hidden:xl flex fixed bottom-10 z-20 mx-auto justify-around bg-violet-600/50 w-60  shadow-2xs shadow-violet-700 p-3 rounded-full backdrop-blur-xs text-sm'>
        {
          Navs.map((nav) => (
            nav.isSection ? (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className='cursor-pointer hover:text-violet-800 translate'>
                <FontAwesomeIcon icon={nav.icon} />
              </a>
            ) : (
              <NavLink
                key={nav.id}
                to={nav.path}
                className='cursor-pointer hover:text-blue-400'
              >
                <FontAwesomeIcon icon={nav.icon} />
              </NavLink>
            )
          ))
        }
      </div>
    </div>
  );
}

export default MobileNav;
