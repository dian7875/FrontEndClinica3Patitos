import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import HeaderHome from "../components/Layout/HeaderHome";
import CurrentDayApo from "../Pages/CurrentDayApo";
import MyAppointments from "../Pages/MyAppointments";
import Recharged from "./Recharged";
import Auth from "../Pages/Auth";

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