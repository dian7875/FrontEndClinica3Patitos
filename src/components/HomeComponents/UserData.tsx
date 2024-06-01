import { useContext } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import LogOut from "../microComponents/LogOut";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";

function UserData() {
  const { currentUser } = useContext(AuthContext);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Popover>
      <div className="mt-2 mb-2 mr-2">
        <PopoverTrigger>
          <div className="cursor-pointer flex gap-3 text-white">
            <span className="mt-2">{currentUser?.user_Name}</span>
            <img
              className="invert dark:invert-0"
              width={40}
              src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png"
              alt=""
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className={` border-2 shadow-lg
        mt-1 
         rounded-md  border-solid  w-80 h- shadow-in 
         ${isDarkMode ? `dark bg-Pop-darkbg shadow-Pop-darkborder
          border-Pop-darkborder text-white` : `bg-Pop-background
          shadow-Pop-bordes border-Pop-bordes`}
 `}>
          <header className="flex flex-col items-center gap-1 justify-center">
            <span className="">{currentUser?.user_Email}</span>
            <img
              className={`w-10 h-10 ${isDarkMode ? `dark invert` : ``}`}
              src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png"
              alt=""
            />
            <span>Hi, {currentUser?.user_Name}!</span>
            <span> Phone: {currentUser?.user_Phone}</span>
          </header>
          <menu className="flex ml-2 mr-2">
            <div className={` shadow-lg   mt-2  gap-2 flex w-40   rounded-l-md ${isDarkMode ? `dark shadow-Pop-darkborder bg-Pop-darkborder border border-Pop-darkbord` : `shadow-Pop-bordes bg-Pop-bordes border `}`}>
              <img className={`w-8 ml-2 mt-2 mb-2 ${isDarkMode ? `dark invert` : ``}`} src="https://cdn-icons-png.flaticon.com/128/17/17789.png" alt="" />
              <span className="mt-2 "> settings</span>
            </div>
            <LogOut />
          </menu>

          <span className=" mt-2 ml-2">More options:</span>

          <menu >
            <div className={`flex ml-2 mr-2    mt-2  gap-2  rounded-t-lg ${isDarkMode ? `dark shadow-Pop-darkborder bg-Pop-darkborder  border-b border-Pop-darkbord ` : `shadow-Pop-bordes bg-Pop-bordes border-b`} `}>
              <img className={`w-8 ml-1 mr-2 mt-2 mb-2${isDarkMode ? `dark invert` : ``} `} src="https://cdn-icons-png.flaticon.com/128/2822/2822682.png" alt="" />
              <span className="mt-2 self-center mr-5">History</span>
            </div>
            <div className={`flex justify-between ml-2 mr-2   gap-2  ${isDarkMode ? `dark shadow-Pop-darkborder bg-Pop-darkborder  ` : `shadow-Pop-bordes bg-Pop-bordes `} `}>
              <div className="flex ">
                <img className={`w-8 ml-2 mr-2 mt-2 mb-2 ${isDarkMode ? `dark invert` : ``}`} src="https://cdn-icons-png.flaticon.com/128/5056/5056904.png" alt="" />
                <span className="mt-2"> Lenguage:</span>
              </div>
              <span className="self-center mr-12 pr-1 pb-2">English</span>
            </div>
            <div className="flex ml-2 mr-2">
              <div className={`  rounded-bl-lg gap-2 flex w-40 bg-Pop-bordes ${isDarkMode ? `dark shadow-Pop-darkborder bg-Pop-darkborder border-t border-r border-Pop-darkbord ` : `shadow-Pop-bordes bg-Pop-bordes border-t border-r  `} `}>
                <img className={`w-8 ml-2 mt-1 mb-1 ${isDarkMode ? `dark invert` : ``} `} src="https://cdn-icons-png.flaticon.com/128/4460/4460832.png" alt="" />
                <span className="mt-2"> Help</span>
              </div>
              <div className={` rounded-br-lg  gap-2 flex w-40 ${isDarkMode ? `dark shadow-Pop-darkborder bg-Pop-darkborder border-t border-l border-Pop-darkbord   ` : `shadow-Pop-bordes bg-Pop-bordes border-t border-l`}  `}>
                <img className={`w-8 ml-2 mt-1 mb-1 ${isDarkMode ? `dark invert` : ``}`} src="https://cdn-icons-png.flaticon.com/128/1705/1705243.png" alt="" />
                <span className="mt-2"> Guide</span>
              </div>
            </div>

          </menu>

          <footer className="flex justify-between ml-2 mr-2 mt-4 pb-4">
            <span>Privacy policy</span>
            <span>terms of service</span>
          </footer>


        </PopoverContent>
      </div>
    </Popover>
  );
}

export default UserData;
