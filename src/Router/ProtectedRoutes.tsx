import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({ children, of }: { children: any, of: string }) => {
  
  const userRole = 'User'
  const requiredRole = of
  const isAuthenticated = true

  if (!isAuthenticated) {
    alert('Por favor, inicia sesión primero.');
    return <Navigate to='/Login'/>;
  }

  if (userRole !== requiredRole) {
    alert('No tienes los permisos necesarios para acceder a esta página.');
    return <Navigate to='/'/>;
  }
  return children
};

export default ProtectedRoutes;