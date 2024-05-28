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
    <div className={`shadow-lg mt-2  gap-2 flex w-44 rounded-r-md
    shadow-Pop-bordes bg-Pop-bordes border
    dark:shadow-Pop-darkborder dark:bg-Pop-darkborder dark:border dark:border-Pop-darkbord`}>
      <button onClick={onLogOut} 
      type="button">
        <img className={`w-8 ml-3 mt-1 mb-1 dark:invert`} 
        src="https://cdn-icons-png.flaticon.com/128/660/660350.png" alt="" />  
      Log Out
      </button>
      <span  onClick={onLogOut} className="mt-2">Log Out</span>
      </div>
    </>
  )
}

export default LogOut
