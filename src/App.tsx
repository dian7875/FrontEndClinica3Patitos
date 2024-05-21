import React from 'react';
import Router from './Router/Router';
import { Toaster } from 'react-hot-toast';
const App: React.FC = () => {
  return (
    <>
    <Toaster />
     <Router/>
    </>
    
  );
};

export default App;
