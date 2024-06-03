import { useContext } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import LogOut from "../microComponents/LogOut";

function UserData() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Popover>
      <div className="mt-2 mb-2 mr-2">
        <PopoverTrigger>
          <div className="cursor-pointer flex gap-3 text-white">
            <span className="mt-2">{currentUser?.user_Name}</span>
            <img
              className="
              hover:invert-0
              dark:hover:invert
              invert 
              dark:invert-0"
              width={35}
              src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png"
              alt=""
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className=" border-2 shadow-lg
        mt-1 
         rounded-md  border-solid  w-80 dark:bg-Pop-darkbg dark:shadow-Pop-darkborder
          dark:border-Pop-darkborder dark:text-white bg-Pop-background
          shadow-Pop-bordes border-Pop-bordes">
          <header className="flex flex-col items-center gap-1 justify-center">
            <span className="">{currentUser?.user_Email}</span>
            <img
              className="w-10 h-10 dark:invert"
              src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png"
              alt=""
            />
            <span>Hi, {currentUser?.user_Name}!</span>
            <span> Phone: {currentUser?.user_Phone}</span>
          </header>
          <menu className="flex ml-2 mr-2">
            <div className=" mt-2  gap-2 flex w-40 
            rounded-l-md dark:shadow-Pop-darkborder dark:bg-Pop-darkborder border dark:border-Pop-darkbord shadow-Pop-bordes bg-Pop-bordes ">
              <img className="w-8 ml-2 mt-2 mb-2 dark:invert"
                src="https://cdn-icons-png.flaticon.com/128/17/17789.png" alt="" />
              <span className="mt-2 "> settings</span>
            </div>
            <LogOut />
          </menu>

          <span className=" mt-2 ml-2">More options:</span>

          <menu >
            <div className="flex justify-between ml-2 mr-2 rounded-t-lg gap-2  dark:shadow-Pop-darkborder  dark:bg-Pop-darkborder bg-Pop-bordes">
              <div className="flex ">
                <img className="w-8 ml-2 mr-2 mt-2 mb-2 
                dark:invert" src="https://cdn-icons-png.flaticon.com/128/5056/5056904.png" alt="" />
                <span className="mt-2"> Lenguage: English</span>
              </div>
            </div>
            <div className="flex ml-2 mr-2">
              <div className="rounded-bl-lg gap-2 flex w-40 bg-Pop-bordes 
              dark:shadow-Pop-darkborder dark:bg-Pop-darkborder
               border-t border-r dark:border-Pop-darkbord shadow-Pop-bordes">
                <img className="w-8 ml-2 mt-1 mb-1 
                dark:invert"
                  src="https://cdn-icons-png.flaticon.com/128/4460/4460832.png" alt="" />
                <span className="mt-2">Help</span>
              </div>
              <div className=" rounded-br-lg  gap-2 flex w-40 
              dark:shadow-Pop-darkborder dark:bg-Pop-darkborder border-t border-l dark:border-Pop-darkbord shadow-Pop-bordes bg-Pop-bordes">
                <img className="w-8 ml-2 mt-1 mb-1 dark:invert"
                  src="https://cdn-icons-png.flaticon.com/128/1705/1705243.png" alt="" />
                <span className="mt-2">Guide</span>
              </div>
            </div>

          </menu>

          <footer className="flex justify-between ml-2 mr-2 mt-4 pb-4">
            <span>Privacy policy</span>
            <span>Terms of service</span>
          </footer>


        </PopoverContent>
      </div>
    </Popover>
  );
}

export default UserData;
