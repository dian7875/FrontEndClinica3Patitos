import { useContext } from "react";
import { Navigate } from "react-router-dom";
import GeneralContext from "../Contexts/GeneralContext/GerneralContext";

const ProtectedRoutes = ({ children, of }: { children: any, of: string }) => {
  const {rol} = useContext(GeneralContext)
  console.log(rol)
  const userRole = rol
  const requiredRole = of
  const isAuthenticated = true

  if (!isAuthenticated) {
    alert('Por favor, inicia sesión primero.');
    return <Navigate to='/Login'/>;
  }

  if (userRole !== requiredRole) {
    alert('No tienes los permisos necesarios para acceder a esta página.');
    return <Navigate to='/'/>;
  }
  return children
};

export default ProtectedRoutes;