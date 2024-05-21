import React from "react";

const GeneralContext = React.createContext({
    rol:'',
    setRol: (_value: string)=>{},
    isLogged:false,
    setIsLogged:(_value:boolean)=>{}
  });
  

export default GeneralContext;