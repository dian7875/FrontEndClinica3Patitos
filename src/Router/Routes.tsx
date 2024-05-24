import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import HeaderHome from "../components/Layout/HeaderHome";


export default function Router() {
    return (
        <BrowserRouter>
            <HeaderHome/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/NotFound' element={<NotFound />} />
                <Route path="/Login" element={<Login />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/GeneralAppo' element={<ProtectedRoutes />}
                />
                <Route path='/CurrentDayApo' element={<ProtectedRoutes />
                } />
                <Route path='/GeneralAppo' element={<ProtectedRoutes />
                } />
            </Routes>
        </BrowserRouter>
    )
}

