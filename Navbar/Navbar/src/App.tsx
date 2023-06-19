import React, { useState, useRef, useEffect } from 'react';
import { links, social } from './Data';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import './App.css'

function App() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLInputElement>(null);
  const linksRef = React.useRef<HTMLInputElement>(null);
  
  const toggleLinks = () => {
    setShowLinks(!showLinks); 
  };

  const linkStyles = {
    height: showLinks && linksRef.current
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };


  return (
  <>
     <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} className='logo' alt='logo' /> */}
          <Button className='nav-toggle' onClick={toggleLinks}>
           <MenuIcon />
          </Button>
        </div>
        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
       <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  </>
  )
}

export default App
