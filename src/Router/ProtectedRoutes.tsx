import { useContext } from "react";
import { Navigate } from "react-router-dom";
import GeneralContext from "../Contexts/GeneralContext/GerneralContext";

const ProtectedRoutes = ({ children, of }: { children: any, of: string }) => {
  const { rol, isLogged } = useContext(GeneralContext);
  const requiredRole = of;

  if (!isLogged) {
    return <Navigate to='/Login' />;
  }
  if (rol !== requiredRole) {
    alert('No tienes los permisos necesarios para acceder a esta página.');
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoutes;