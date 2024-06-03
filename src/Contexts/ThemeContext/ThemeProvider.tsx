import { ReactNode, useEffect, useState } from 'react';
import ThemeContext from './ThemeContext'
import toast from 'react-hot-toast';


const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode: boolean) => !prevMode);
    isDarkMode? toast('Ligth Mode!',
    {
      icon: '🌕',
      style: {
        background: '#fff',
        color: '#000',
      }, duration:600
    }
  ) : toast('Dark Mode!',
  {
    icon: '🌑',
    style: {
      background: '#333',
      color: '#fff',
    }, duration:600
  }
);
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