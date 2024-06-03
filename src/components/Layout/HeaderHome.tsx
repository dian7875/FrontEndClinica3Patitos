import { useContext, useState } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import DarkModeToggle from "../microComponents/DarkModeButton";
import LoginAcces from "./LoginAcces";
import UserData from "./UserData";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";


function HeaderHome() {

  const [visible, setVisible] = useState(false)

  const showSidebar=()=>{
    
    setVisible(!visible)
    console.log(visible)

  }

  const { isLogged } = useContext(AuthContext)
  return (
    <>
      <header
        className={`flex justify-between z-50 fixed top-0 w-full bg-primary dark:bg-Dark-light`}>
        <div className="flex gap-3 pl-2 mt-2 mb-2 ">
          <button onClick={showSidebar} title="Menu" type="button">
            <img className="invert dark:invert-0 
            dark:hover:invert
            hover:scale-110 
            hover:invert-0" width={35} src="https://cdn-icons-png.flaticon.com/128/561/561184.png" alt="" />
          </button>
        </div>
        <DarkModeToggle />
        {isLogged ? <UserData /> : <LoginAcces />}
      </header>
      <Sidebar className={`fixed z-40 opacity-95 ${visible? `fixed`:`hidden`}`} id="sideBar">
      <Sidebar.Items className="mt-12">
        <Sidebar.ItemGroup>
          <Sidebar.Item>
          <Link className="text-xl hover:text-blue-500" to={"/"}>
              Home
            </Link>
          </Sidebar.Item>
          <Sidebar.Item >
          <Link className="text-xl hover:text-blue-500" to={"MyAppointments"}>
              My Apointtments
            </Link>
          </Sidebar.Item>
          <Sidebar.Item>
          <Link className="text-xl hover:text-blue-500" to={"/MyAppointments"}>
              Generete Appoiments
            </Link>
          </Sidebar.Item>
          <Sidebar.Item >
          <Link className="text-xl hover:text-blue-500" to={"/MyAppointments"}>
              Edit Appoiments
            </Link>
          </Sidebar.Item>
          <Sidebar.Item>
          <Link className="text-xl hover:text-blue-500" to={"/MyAppointments"}>
              Cancel Appoiments
            </Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item>
          <Link className="text-xl hover:text-blue-500" to={"/CurrentDay"}>
              To Day Appoiment
            </Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default HeaderHome;
