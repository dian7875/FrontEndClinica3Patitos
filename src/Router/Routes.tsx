import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import HeaderHome from "../Layout/HeaderHome";
import MyAppointments from "../pages/MyAppointments";

export default function Rout() {
    return (
        <BrowserRouter>
            <HeaderHome />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/NotFound' element={<NotFound />} />
                <Route path="/Login" element={<Login />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/GeneralAppo' element={
            <ProtectedRoutes of=''>
              <MyAppointments/>
            </ProtectedRoutes>
          } />
            </Routes>
        </BrowserRouter>
    )
}

