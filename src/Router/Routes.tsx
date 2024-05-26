import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import HeaderHome from "../components/Layout/HeaderHome";
import GeneralAppo from "../Pages/GeneralAppo";
import CurrentDayApo from "../Pages/CurrentDayApo";


 const Router =() =>{
    return (
        <BrowserRouter>
            <HeaderHome/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/NotFound' element={<NotFound />} />
                <Route path="/Login" element={<Login />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/GeneralAppo' element={<ProtectedRoutes of="">
                    <GeneralAppo/>
                </ProtectedRoutes>}
                />
                <Route path='/CurrentDayApo' element={<ProtectedRoutes of="">
                    <CurrentDayApo/>
                </ProtectedRoutes>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router