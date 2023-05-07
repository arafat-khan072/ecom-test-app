import React from 'react';
import MainMenuItem from '../Shared/MainMenuItem';

const MainMenu = ({ className }) => {
  return (
    <div className={className}>
      <MainMenuItem text="Dashboard" link="#" icon="dashboard" />
      <MainMenuItem text="Organizations" link="#" icon="office" />
      <MainMenuItem text="Contacts" link="#" icon="users" />
      <MainMenuItem text="Reports" link="#" icon="printer" />
    </div>
  );
};
export default MainMenu;