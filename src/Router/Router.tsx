import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import ProtectedRoutes from './ProtectedRoutes';
import MyAppointments from '../pages/MyAppointments';
import CurrentDayApo from '../pages/CurrentDayApo';
import GeneralAppo from '../pages/GeneralAppo';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/NotFound' element={<NotFound />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/MyAppointments' element={
            <ProtectedRoutes of='User'>
              <MyAppointments />
            </ProtectedRoutes>
          } />
          <Route path='/CurrentDayApo' element={
            <ProtectedRoutes of='Admin'>
              <CurrentDayApo/>
            </ProtectedRoutes>
          } />
          <Route path='/GeneralAppo' element={
            <ProtectedRoutes of='Admin'>
              <GeneralAppo/>
            </ProtectedRoutes>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
