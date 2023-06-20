import React, { useState, useContext, createContext, ReactNode } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BookIcon from '@mui/icons-material/Book';
import WorkIcon from '@mui/icons-material/Work';
interface Link {
  label: string;
  icon: React.ReactNode;
  url: string;
}

interface Sublink {
  page: string;
  links: Link[];
}

interface AppContextProps {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  isSubmenuOpen: boolean;
  openSubmenu: (text: string, coordinates: object) => void;
  closeSubmenu: () => void;
  page: Sublink;
  location: object;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState<Sublink>({ page: '', links: [] });
  const [location, setLocation] = useState<object>({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text: string, coordinates: object) => {
    const foundPage = sublinks.find((sublink: Sublink) => sublink.page === text);
    if (foundPage) {
      setPage(foundPage);
      setLocation(coordinates);
      setIsSubmenuOpen(true);
    }
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const contextValue: AppContextProps = {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    isSubmenuOpen,
    openSubmenu,
    closeSubmenu,
    page,
    location,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};

const sublinks: Sublink[] = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <CreditCardIcon />, url: '/products' },
      { label: 'terminal', icon: <CreditCardIcon />, url: '/products' },
      { label: 'connect', icon: <CreditCardIcon />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <BookIcon />, url: '/products' },
      { label: 'libraries', icon: <BookIcon />, url: '/products' },
      { label: 'help', icon: <BookIcon />, url: '/products' },
      { label: 'billing', icon: <BookIcon />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <WorkIcon />, url: '/products' },
      { label: 'customers', icon: <WorkIcon />, url: '/products' },
    ],
  },
];

export { AppProvider, useGlobalContext, sublinks };
