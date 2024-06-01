import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children, of }: { children: any, of: string }) => {

  const storedUser = localStorage.getItem('currentUser');
  const currentUser = storedUser ? JSON.parse(storedUser) : null;
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!currentUser) {
      navigate('/Auth');
    } else if (currentUser.user_Rol !== of) {
      toast.error(`only for ${of}`)
      navigate('/');
    }
  }, [currentUser, navigate, of]);

  return currentUser && currentUser.user_Rol === of ? children : null;
};

export default ProtectedRoutes;

//! 3 opciones
//! 1 no logeado go to login
//!2 logeado pero no tiene el rol necesario redirija a home
//! Logeado y con rol necesario, redirije a ruta deseada