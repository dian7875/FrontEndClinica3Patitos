import React from "react";

const GeneralContext = React.createContext({
    rol:'',
    setRol: (_value: string)=>{},
  });
  

export default GeneralContext;