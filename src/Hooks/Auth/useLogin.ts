import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LoginData } from "../../types/User";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import { getTryLogin } from "../../Services/Services_Users";

const useLogin = () => {
  const navi = useNavigate()
  const { setIsLogged } = useContext(AuthContext)
  const Login = useCallback(async (data: LoginData) => {
    try {
      await getTryLogin(data.Email, data.Password);
      toast.success("Usuario Autenticado");
      setIsLogged(true);
      navi("/")
    } catch (error) {
      toast.error("Wrong Password or User, Try Again")
      setIsLogged(false)
    }
  }, []);
  return Login
}

export default useLogin
