import { useContext } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";

const LogOut = () => {
    const {setIsLogged} = useContext(AuthContext)
    const onLogOut=()=>{
        localStorage.removeItem('UserToken');
        setIsLogged(false)
    }
    const { isDarkMode } = useContext(ThemeContext);
    
  return (
    <>
    <div className={`shadow-lg    mt-2  gap-2 flex w-44   rounded-r-md ${isDarkMode ? `dark shadow-Pop-darkborder bg-Pop-darkborder border border-Pop-darkbord ` : `shadow-Pop-bordes bg-Pop-bordes border`}`}>
      <button onClick={onLogOut} type="button"><img className={`w-8 ml-3 mt-1 mb-1 ${isDarkMode ? `dark invert` : ``}`} src="https://cdn-icons-png.flaticon.com/128/660/660350.png" alt="" />  </button>
      <span className="mt-2">Log Out</span>
      </div>
    </>
  )
}

export default LogOut
