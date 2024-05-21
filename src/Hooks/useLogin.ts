import { useCallback } from "react";
import User from "../types/User";
import { getTryLogin } from "../services/Services_Users";

const useLogin = () => {
    const Login = useCallback(async (data: User) => {  
     await getTryLogin(data.email,data.Password);
    }, []);
      return Login
}

export default useLogin
