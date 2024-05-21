import React from 'react';
import Router from './Router/Router';
import { Toaster } from 'react-hot-toast';
import AppoimentsContainer from './components/AppoimentsContainer';
const App: React.FC = () => {
  return (
    <>
    <Toaster />
     <Router/>
     <AppoimentsContainer/>
    </>
    
  );
};

export default App;
