import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './Context';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hero from './Hero';
import Submenu from './Submenu';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
