import { useContext } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const { setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate()
  const onLogOut = () => {
    navigate('/')
        localStorage.removeItem('authToken');
        console.log(localStorage.getItem('authToken'))
        localStorage.removeItem('currentUser');
        console.log(localStorage.getItem('currentUser'))
        toast.success('Closed Session')
        setIsLogged(false)
  };

  return (
    <>
      <div
        className={`shadow-lg mt-2   gap-2 flex w-44 rounded-r-md
    shadow-Pop-bordes bg-Pop-bordes border
    dark:shadow-Pop-darkborder dark:bg-Pop-darkborder dark:border dark:border-Pop-darkbord`}
      >
        <button onClick={onLogOut} type="button" className="flex gap-2 items-center">
          <img
            className={`w-8 ml-3 mt-1 mb-1 dark:invert`}
            src="https://cdn-icons-png.flaticon.com/128/660/660350.png"
            alt=""
          />
          Log Out
        </button>
      </div>
    </>
  );
};

export default LogOut;
