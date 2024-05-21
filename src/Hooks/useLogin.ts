import { useCallback, useContext } from "react";
import { getTryLogin } from "../services/Services_Users";
import { jwtDecode } from "jwt-decode";
import GeneralContext from "../Contexts/GeneralContext/GerneralContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LoginData } from "../types/User";

const useLogin = () => {
  const navi = useNavigate()
  const { setRol, setIsLogged } = useContext(GeneralContext)
  const Login = useCallback(async (data: LoginData) => {
    try {
      await getTryLogin(data.Email, data.Password);
      try {
        const token = localStorage.getItem('authToken');
        if (token === null) {
          throw new Error('No token found in localStorage');
        }
        const decoded: LoginData = jwtDecode(token);
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
