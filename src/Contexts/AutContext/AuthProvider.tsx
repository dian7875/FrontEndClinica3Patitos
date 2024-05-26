import { ReactNode, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { jwtDecode } from "jwt-decode";
import { currenUser } from '../../types/User';



const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState<currenUser | null>(null);

  const Token = localStorage.getItem('UserToken')
  useEffect(() => {
    if (Token) {
      const decoded: { [key: string]: any } = jwtDecode(Token);
      console.log('Test', decoded);
      const userData: currenUser = {
        user_Name: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        user_Email: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
        user_Phone: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone'],
        user_Id: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
        user_Rol: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      };
      console.table(userData)
      setCurrentUser(userData)
      setIsLogged(true)
    } else {
      console.log('No hay token')
      setIsLogged(false)
    }
  }, [Token]);
  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;