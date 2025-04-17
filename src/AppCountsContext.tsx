import { createContext, useContext, useState, ReactNode } from 'react';
import { ProductType } from '@app-types/types';

type AppCountsContextType = {
  favCount: number;
  cartCount: number;
  setFavCount: (n: number) => void;
  setCartCount: (n: number) => void;
};

const AppCountsContext = createContext<AppCountsContextType | undefined>(undefined);

export const AppCountsProvider = ({ children }: { children: ReactNode }) => {
  const [favCount, setFavCount] = useState<number>(() => {
    const stored = localStorage.getItem('fav');
    return stored ? JSON.parse(stored).length : 0;
  });

  const [cartCount, setCartCount] = useState<number>(() => {
    const stored = localStorage.getItem('cart');
    const array: Array<ProductType> = stored ? JSON.parse(stored) : [];
    return array.reduce((sum, item) => sum + item.count!, 0);
  });

  return (
    <AppCountsContext.Provider value={{ favCount, cartCount, setFavCount, setCartCount }}>
      {children}
    </AppCountsContext.Provider>
  );
};

export const useAppCounts = () => {
  const context = useContext(AppCountsContext);
  if (!context) throw new Error('useAppCounts must be used within AppCountsProvider');
  return context;
};
