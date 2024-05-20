import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
const App: React.FC = () => {
  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>    
    </>
  );
};

export default App;
