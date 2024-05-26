import React from "react";
import { currenUser } from "../../types/User";

interface AuthContextType {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  currentUser: currenUser | null;
  setCurrentUser: (data: currenUser | null) => void;
}


const AuthContext = React.createContext<AuthContextType>({
  isLogged: false,
  setIsLogged: (_value: boolean) => { },
  currentUser: null,
  setCurrentUser: (_data: currenUser | null)=>{}
});

export default AuthContext;


