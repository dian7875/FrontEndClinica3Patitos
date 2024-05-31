import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LoginData, currenUser } from "../../types/User";
import { getTryLogin } from "../../services/Services_Users";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../../Contexts/AutContext/AuthContext";

const useLogin = () => {
  const {setIsLogged} = useContext(AuthContext)
  const navi = useNavigate()
  const Login = useCallback(async (data: LoginData) => {
    try {
      await getTryLogin(data.Email, data.Password);
      const Token = localStorage.getItem('UserToken')
      if(Token){
        const decoded: { [key: string]: any } = jwtDecode(Token);
        const userData: currenUser = {
          user_Name: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
          user_Email: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
          user_Phone: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone'],
          user_Id: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
          user_Rol: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        };
        localStorage.setItem('currentUser', JSON.stringify(userData));
      }
      toast.success("Usuario Autenticado");
      setIsLogged(true)
      navi("/")
    } catch (error) {
      toast.error("Wrong Password or User, Try Again")
      setIsLogged(false)
    }
  }, []);
  return Login
}

export default useLogin
