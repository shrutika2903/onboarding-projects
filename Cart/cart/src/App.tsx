import React from 'react';
import { useGlobalContext } from './Context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { AppProvider } from './Context';

function App(): JSX.Element {
  // const { loading } = useGlobalContext();

  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <AppProvider>
      <Navbar />
      <CartContainer />
    </AppProvider>

  );
}

export default App;
