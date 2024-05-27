import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import HeaderHome from "../components/Layout/HeaderHome";
import CurrentDayApo from "../Pages/CurrentDayApo";
import MyAppointments from "../Pages/MyAppointments";
import Recharged from "./Recharged";

const Router = () => {
    return (
        <BrowserRouter>
            <Recharged />
            <HeaderHome />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/NotFound' element={<NotFound />} />
                <Route path="/Login" element={<Login />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/MyAppointments' element={<ProtectedRoutes of="USER">
                    <MyAppointments />
                </ProtectedRoutes>}
                />
                <Route path='/CurrentDay' element={<ProtectedRoutes of="ADMIN">
                    <CurrentDayApo />
                </ProtectedRoutes>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router