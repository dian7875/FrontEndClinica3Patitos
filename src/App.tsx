// src/App.tsx
import React from 'react';
import LandingPage from './Landing/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LogEjemplo from './Landing/LogEjemplo';
const App: React.FC = () => {
  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LogEjemplo/>} />
          </Routes>
        </BrowserRouter>    
    </>
  );
};

export default App;
