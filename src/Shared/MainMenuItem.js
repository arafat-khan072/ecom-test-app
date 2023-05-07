import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Shared/Icon';

const MainMenuItem = ({ icon, link, text }) => {
  // const isActive = route().current(link + '*');

  // const iconClasses = classNames('w-4 h-4 mr-2', {
  //   'text-white fill-current': isActive,
  //   'text-indigo-400 group-hover:text-white fill-current': !isActive
  // });

  // const textClasses = classNames({
  //   'text-white': isActive,
  //   'text-indigo-200 group-hover:text-white': !isActive
  // });

  return (
    <div className="mb-4">
      <Link to="#" className="flex items-center group py-3">
        <Icon name={icon} className='w-4 h-4 mr-2 text-indigo-400 group-hover:text-white fill-current' />
        <div className='text-indigo-200 group-hover:text-white'>{text}</div>
      </Link>
    </div>
  );
};
export default MainMenuItem;