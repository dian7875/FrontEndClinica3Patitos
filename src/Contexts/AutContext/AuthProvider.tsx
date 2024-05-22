import { ReactNode, useState} from 'react';
import AuthContext from './AuthContext';


const AuthProvider = ({children}: {children: ReactNode}) => {
    const [ rol, setRol] = useState('');
    const [isLogged,setIsLogged]=useState(false);
  return (
    <AuthContext.Provider value={{ rol, setRol, isLogged, setIsLogged}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;