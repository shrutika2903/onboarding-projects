import React, { MouseEvent } from 'react';
import logo from './images/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from './Context';

const Navbar: React.FC = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();


  const displaySubmenu = (e: MouseEvent<HTMLButtonElement>) => {
    const page = e.currentTarget.textContent || '';
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  
  const handleSubmenu = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLDivElement).classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} className='nav-logo' alt='' /> */}
          <button className='btn toggle-btn' onClick={openSidebar}>
<MenuIcon />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
