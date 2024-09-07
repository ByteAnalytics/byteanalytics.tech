'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AppContextType } from '../types/global';
// Create the context with an initial value of null
export const AppContext = createContext<AppContextType | null>(null);

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error('useAppContext can only be used inside AppContextProvider');
  return context;
};

// Context provider component
export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => setIsMounted(true), []);
  const modalCloseTrigger = useRef<HTMLButtonElement>(null);
  return (
    <AppContext.Provider
      value={{
        isMounted,
        setIsMounted,
        modalCloseTrigger,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
