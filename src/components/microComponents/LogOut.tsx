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
    
      <button className=" shadow-lg shadow-Pop-bordes  mt-2  gap-4 flex w-44 bg-primary rounded-md" onClick={onLogOut} type="button"><img className="w-8 invert" src="https://cdn-icons-png.flaticon.com/128/660/660350.png" alt="" /> Log Out </button>
    </>
  )
}

export default LogOut
