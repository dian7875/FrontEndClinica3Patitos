import { useCallback} from "react";
import toast from "react-hot-toast";
import { User } from "../../types/User";
import { createUser } from "../../services/Services_Users";

const useRegister = (onFlip:any) => {
  const Register = useCallback(async (data: User) => {
    
    try {
      await createUser(data);
      if(onFlip) onFlip()
      toast.success("Usuario Creado, now Login");
    } catch(error:any) {
      const errorMessage = error.message || "Fail in register, please check fields";
      const userExistsMessage = "The user already exists!";
      
      if (errorMessage.includes(userExistsMessage)) {
        toast.error(userExistsMessage);
      } else {
        toast.error(errorMessage);
      }
     }
  }, []);
  return Register
}

export default useRegister
