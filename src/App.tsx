// src/App.tsx
import React from 'react';
import useDarkMode from './Hooks/useDarkMode';
import DarkModeToggle from './components/DarkModeButton';
import LandingPage from './Landing/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LogEjemplo from './Landing/LogEjemplo';
import Card from './components/Card';


const App: React.FC = () => {
 {/* const { isDarkMode, toggleDarkMode } = useDarkMode();*/}
  
  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LogEjemplo/>} />
          </Routes>
        </BrowserRouter>
      {/*<div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
       
  </div>*/}
  <div className='bg-primary h-96 flex justify-center'>
  <Card/>
  <Card/>
  </div>
      
      
    </>
  );
};

export default App;
