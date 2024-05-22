import React from "react";

const AuthContext = React.createContext({
    rol:'',
    setRol: (_value: string)=>{},
    isLogged:false,
    setIsLogged:(_value:boolean)=>{},
  });
  

export default AuthContext;