import { useContext, useState } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";

function UserData() {

  const [isOpen, setIsOpen] = useState(false);
  const {currentUser} = useContext(AuthContext)

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-1 mr-2 text-white">
      <div onClick={toggleInfo} className="flex gap-3 text-white">
        <span className="cursor-pointer mt-2">{currentUser?.user_Name}</span>
        <img className='w-10 h-10 invert' src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png" alt="" />
      </div>
    </div>
  );

}

export default UserData
