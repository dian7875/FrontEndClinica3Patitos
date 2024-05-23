import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../Contexts/AutContext/AuthContext";

const ProtectedRoutes = () => {
  const { isLogged } = useContext(AuthContext)

  return isLogged? <Outlet/> : <Navigate to={"/Login"} />;

};

export default ProtectedRoutes;