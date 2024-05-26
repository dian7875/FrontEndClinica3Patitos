import { useContext } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";

const LogOut = () => {
    const {setIsLogged} = useContext(AuthContext)
    const onLogOut=()=>{
        localStorage.removeItem('UserToken');
        setIsLogged(false)
    }
  return (
    <>
      <button onClick={onLogOut} type="button">Log Out</button>
    </>
  )
}

export default LogOut
