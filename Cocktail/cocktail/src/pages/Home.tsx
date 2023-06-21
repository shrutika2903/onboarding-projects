import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { AppProvider } from '../Context';
const Home: React.FC = () => {
  return (
    <AppProvider>
      <SearchForm />
      <CocktailList /> 
    </AppProvider>
  );
};

export default Home;
