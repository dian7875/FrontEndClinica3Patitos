import { ReactNode, useEffect, useState } from 'react';
import ThemeContext from './ThemeContext'


const ThemeProvider = ({children}: {children: ReactNode}) => {
    
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
      });
    
      const toggleDarkMode = () => {
        setIsDarkMode((prevMode:boolean) => !prevMode);
      };
    
      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
      }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;