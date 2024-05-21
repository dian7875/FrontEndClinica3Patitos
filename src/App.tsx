import React from 'react';
import Router from './Router/Router';
import { Toaster } from 'react-hot-toast';
import AppoimentsContainer from './components/AppoimentsContainer';
import UserShowData from './components/UserShowData';
const App: React.FC = () => {
  return (
    <>
    <Toaster />
     <Router/>
     <UserShowData/>
    </>
    
  );
};

export default App;
