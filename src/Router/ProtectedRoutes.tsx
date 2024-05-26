import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Contexts/AutContext/AuthContext";
import toast from "react-hot-toast";

const ProtectedRoutes = ({ children, of }: { children: any, of: string }) => {

  const { isLogged, currentUser } = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      toast.error('Please Register Or Login With your user First');
      navigate('/Login');
    } else if (currentUser?.user_Rol !== of) {
      toast.error('No tienes permisos para acceder a esta página.');
      navigate('/');
    }
  }, [isLogged, currentUser, of, navigate]);

  if (!isLogged || (isLogged && currentUser?.user_Rol !== of)) {
    return null;
  }

  return children;
};

export default ProtectedRoutes;