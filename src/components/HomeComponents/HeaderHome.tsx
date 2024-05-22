import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";
import DarkModeToggle from "../DarkModeButton";
import LoginAcces from "./LoginAcces";
import UserData from "./UserData";
import AuthContext from "../../Contexts/AutContext/AuthContext";

function HeaderHome() {
  const { isDarkMode } = useContext(ThemeContext);
  const {isLogged} = useContext(AuthContext)
  return (
    <>
      <div
        className={` flex justify-between z-50 fixed w-full ${isDarkMode ? `dark bg-Dark-light` : `bg-primary`
          }`}
      >
        <div className="flex gap-3 pl-2 mt-2 ">
          <a className="Instagram" href="">
            <img
              title="Ig"
              className="w-8 h-8 invert"
              src="https://cdn-icons-png.flaticon.com/128/15081/15081235.png"
            />
          </a>
          <a className="WhathsApp" href="">
            <img
              title="ig"
              className="w-8 h-8 invert"
              src="https://cdn-icons-png.flaticon.com/128/1384/1384007.png"
            />
          </a>
          <a className="Facebook" href="">
            <img
              title="ig"
              className="w-8 h-8 invert"
              src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png"
            />
          </a>
        </div>
        <DarkModeToggle />
        {isLogged ? <UserData/> : <LoginAcces/> }  
      </div>
    </>
  );
}

export default HeaderHome;
