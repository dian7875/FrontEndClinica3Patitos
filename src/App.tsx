// src/App.tsx
import React from 'react';
import useDarkMode from './Hooks/useDarkMode';
import DarkModeToggle from './components/DarkModeButton';

const App: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </>
  );
};

export default App;
