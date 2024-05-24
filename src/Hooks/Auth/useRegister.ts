import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { User } from "../../types/User";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import { createUser } from "../../Services/Services_Users";

const useRegister = () => {
  const navi = useNavigate()
  const { setIsLogged } = useContext(AuthContext)
  const Register = useCallback(async (data: User) => {
    try {
      await createUser(data);
      toast.success("Usuario Creado, now Login");
      navi("/Login")
    } catch(error) {
      toast.error("Fail in register please chek field")
      setIsLogged(false)
     }
  }, []);
  return Register
}

export default useRegister
