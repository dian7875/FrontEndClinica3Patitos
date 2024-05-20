import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

import AppoimentsContainer from './components/AppoimentsContainer';
const App: React.FC = () => {
  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/NotFound' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>    
       <AppoimentsContainer/>
    </>
  );
};

export default App;
