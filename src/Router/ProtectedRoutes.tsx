import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Contexts/AutContext/AuthContext";

const ProtectedRoutes = ({ children, of }: { children: any, of: string }) => {

  const { isLogged } = useContext(AuthContext)

  if (!isLogged) {
    alert('Por favor, inicia sesión primero.');
    return <Navigate to='/Login'/>;
  }
  
  return children
};

export default ProtectedRoutes;