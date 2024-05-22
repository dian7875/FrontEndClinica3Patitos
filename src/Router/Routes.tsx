import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import MyAppointments from "../pages/MyAppointments"
import CurrentDayApo from "../pages/CurrentDayApo"
import ProtectedRoutes from "./ProtectedRoutes"
import NotFound from "../pages/NotFound"
import GeneralAppo from "../pages/GeneralAppo"


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/NotFound",
    element: <NotFound />
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/MyAppointments",
        element: <MyAppointments />
      }
    ]
  },
  {
    path: "/",
    element: <ProtectedRoutes/>,
    children: [
      {
        path: "/GeneralAppo",
        element: <GeneralAppo />
      }
    ]
  },
])

export default Routes
