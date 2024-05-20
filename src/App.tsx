import React from 'react';
import Router from './Router/Router';
import AppoimentsContainer from './components/AppoimentsContainer';
const App: React.FC = () => {
  return (
    <>
     <Router/>
     <AppoimentsContainer/>
    </>
  );
};

export default App;
