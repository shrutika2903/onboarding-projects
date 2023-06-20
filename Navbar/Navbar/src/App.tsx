import React, { useState, useRef, useEffect, ReactElement } from 'react';
import { MenuItem } from '@mui/material';
import { links, social } from './Data';
import logo from './logo.svg';

interface Link {
  id: number;
  url: string;
  text: string;
}

interface SocialIcon {
  id: number;
  url: string;
  icon: ReactElement;
}

const Navbar: React.FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const linksContainerRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    if (linksRef.current && linksContainerRef.current) {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <MenuItem />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link: Link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon: SocialIcon) => (
            <li key={socialIcon.id}>
              <a href={socialIcon.url}>{socialIcon.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
