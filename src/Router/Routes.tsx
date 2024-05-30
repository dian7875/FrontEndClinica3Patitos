import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import HeaderHome from "../components/Layout/HeaderHome";
import CurrentDayApo from "../pages/CurrentDayApo";
import MyAppointments from "../pages/MyAppointments";
import Recharged from "./Recharged";
import Auth from "../pages/Auth";

const Router = () => {
    return (
        <BrowserRouter>
            <Recharged />
            <HeaderHome />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/NotFound' element={<NotFound />} />
                <Route path="/Auth" element={<Auth/>} />
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