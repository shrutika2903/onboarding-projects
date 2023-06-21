import React, { useState, useContext, useEffect, useCallback, ReactNode, Dispatch, SetStateAction } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
interface Cocktail {
  id: string;
  name: string;
  image: string;
  info: string;
  glass: string;
}

interface AppContextProps {
  loading: boolean;
  cocktails: Cocktail[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const AppContext = React.createContext<AppContextProps | undefined>(undefined);

const AppProvider: React.FC<React.PropsWithChildren<ReactNode>> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('a');
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails: Cocktail[] = drinks.map((item: any) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  const value: AppContextProps = {
    loading,
    cocktails,
    searchTerm,
    setSearchTerm,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      'useGlobalContext must be used within an AppProvider'
    );
  }
  return context;
};

export { AppContext, AppProvider };
