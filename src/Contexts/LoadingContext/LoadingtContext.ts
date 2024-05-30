import React from "react";

const loadingContext = React.createContext({
    loading: false,
    setLoading:(_value:boolean)=>{}
  });
  

export default loadingContext;