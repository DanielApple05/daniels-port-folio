import React from 'react';
import Navs from './mobileTabs'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MobileNav = () => {
  return (
    <div className='hidden:xl flex fixed bottom-10 space-x-5 bg-violet-950/50 w-7/12  shadow-2xl shadow-violet-700 p-3 rounded-full'>
      {
        Navs.map((nav) => (
          nav.isSection ? (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className='cursor-pointer hover:text-blue-400'>
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
        ))}
    </div>
  );
}

export default MobileNav;
