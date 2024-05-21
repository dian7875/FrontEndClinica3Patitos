import { useCallback, useContext } from "react";
import User from "../types/User";
import { getTryLogin } from "../services/Services_Users";
import { jwtDecode } from "jwt-decode";
import GeneralContext from "../Contexts/GeneralContext/GerneralContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogin = () => {
  const navi = useNavigate()
  const { setRol, setIsLogged } = useContext(GeneralContext)
  const Login = useCallback(async (data: User) => {
    try {
      await getTryLogin(data.email, data.Password);
      try {
        const token = localStorage.getItem('authToken');
        if (token === null) {
          throw new Error('No token found in localStorage');
        }
        const decoded: User = jwtDecode(token);
        setRol(decoded.rol);
        setIsLogged(true)
        navi("/")
      } catch (error) {
        console.log('Error JWT Inválido o no encontrado:', error);
        setIsLogged(false)
      }
    } catch {
      toast.error("Wrong Password or User, Try Again")
     }
  }, []);
  return Login
}

export default useLogin
