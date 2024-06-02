import { useContext } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import DarkModeToggle from "../microComponents/DarkModeButton";
import LoginAcces from "../microComponents/LoginAcces";
import UserData from "../HomeComponents/UserData";

function HeaderHome() {
  const {isLogged} = useContext(AuthContext)
  return (
    <>
      <header
        className={`flex justify-between z-50 fixed top-0 w-full bg-primary dark:bg-Dark-light`}>
        <div className="flex gap-3 pl-2 mt-2 mb-2 ">
          <a href="">
            <img
              title="IG"
              className="invert"
              width={30}
              src="https://cdn-icons-png.flaticon.com/128/15081/15081235.png"
            />
          </a>
          <a className="WhathsApp" href="">
            <img
              title="WH"
              className="invert"
              width={30}
              src="https://cdn-icons-png.flaticon.com/128/1384/1384007.png"
            />
          </a>
          <a className="Facebook" href="">
            <img
              title="FB"
              className="invert"
              width={30}
              src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png"
            />
          </a>
        </div>
        <DarkModeToggle />
        {isLogged ? <UserData/> : <LoginAcces/> }   
      </header>
    </>
  );
}

export default HeaderHome;
