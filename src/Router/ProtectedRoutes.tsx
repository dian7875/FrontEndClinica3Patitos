import { useContext } from "react";
import AuthContext from "../Contexts/AutContext/AuthContext";

const ProtectedRoutes = ({ children }: { children: any, of: string }) => {

  useContext(AuthContext)
/*
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
*/
  return children;
};

export default ProtectedRoutes;