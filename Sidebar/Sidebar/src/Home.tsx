import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from './Context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <MenuIcon />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  );
};

export default Home;