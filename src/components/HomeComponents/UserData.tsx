import { useContext } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import LogOut from "../microComponents/LogOut";

function UserData() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Popover >
      <div className="mt-1 mr-2 text-white">
        <PopoverTrigger>
          <div className="cursor-pointer flex gap-3 text-white">
            <span className="  mt-2">
              {currentUser?.user_Name}
            </span>
            <img
              className="w-10 h-10 invert"
              src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png"
              alt=""
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="bg-Pop-background border-2 shadow-lg shadow-Pop-bordes  rounded-md border-Pop-bordes border-solid  w-48 h-40 justify-center shadow-in">
          <div className="  flex ml-2 text-white flex-col ">
            <div className="flex w-44 shadow-lg shadow-Pop-bordes bg-primary rounded-md gap-">
            <img className="w-8 invert" src="https://cdn-icons-png.flaticon.com/128/80/80599.png" alt="" />
            <span>{currentUser?.user_Email}</span>
            </div>
            <div className="flex w-44 shadow-lg shadow-Pop-bordes bg-primary rounded-md mt-2 gap-2">
            <img className="w-8 invert " src="https://cdn-icons-png.flaticon.com/128/4801/4801092.png" alt="" />
            <span>{currentUser?.user_Phone}</span>
            </div>
            <div className="justify-center">
            <LogOut  />
            </div>
          </div>
        </PopoverContent>
      </div>
    </Popover>
  );
}

export default UserData;
