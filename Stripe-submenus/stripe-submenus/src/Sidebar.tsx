import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useGlobalContext } from './Context';
import { sublinks } from './Context';
interface SidebarLink {
  url: string;
  icon: React.ReactNode;
  label: string;
}

interface SidebarItem {
  page: string;
  links: SidebarLink[];
}

const Sidebar: React.FC = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={`sidebar-wrapper ${isSidebarOpen ? 'show' : ''}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <CloseIcon />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item: SidebarItem, index: number) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link: SidebarLink, index: number) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
