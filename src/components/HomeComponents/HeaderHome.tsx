import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";
import DarkModeToggle from "../DarkModeButton";
import GeneralContext from "../../Contexts/GeneralContext/GerneralContext";
import UserShowData from "../UserShowData";

function HeaderHome() {
  const { isDarkMode } = useContext(ThemeContext);
  const { isLogged } = useContext(GeneralContext);
  return (
    <>
      <div
        className={` flex justify-between ${
          isDarkMode ? `dark bg-Dark-light` : `bg-primary`
        }`}
      >
        <div className="flex gap-3 pl-2 pt-1 ">
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
        <div className="">
          <div className="flex  gap-3">
            {isLogged ? <UserShowData /> : null}

            <Link className="flex gap-3 mt-2 text-white" to={"/Login"}>
              <h1 className="mt-2">Login</h1>
              <img
                title="ig"
                className="w-10 h-10 invert"
                src="https://cdn-icons-png.flaticon.com/128/7917/7917260.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderHome;
