// App.tsx
import React from 'react';
import { AppProvider } from './Context';
import Home from './Home';
import Modal from './Modal';
import Sidebar from './Sidebar';
import { links, social } from './Data';

const App: React.FC  = () => {
  return (
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar links={links} social={social} />
    </AppProvider>
  );
};

export default App;
