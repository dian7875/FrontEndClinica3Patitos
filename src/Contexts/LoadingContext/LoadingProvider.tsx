import { ReactNode, useState } from 'react';
import loadingContext from './LoadingtContext';


const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(true);
  return (
    <loadingContext.Provider value={{loading,setLoading}}>
      {children}
    </loadingContext.Provider>
  );
}
export default LoadingProvider;