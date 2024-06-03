import { useContext, useState } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import DarkModeToggle from "../microComponents/DarkModeButton";
import LoginAcces from "./LoginAcces";
import UserData from "./UserData";
import { Sidebar } from "flowbite-react";


function HeaderHome() {

  const [visible, setVisible] = useState(false)

  const showSidebar=()=>{
    setVisible(!visible)
  }

  const { isLogged } = useContext(AuthContext)
  return (
    <>
      <header
          style={{gridTemplateColumns:"25% 50% 25%"}}
        className={`grid z-50 fixed top-0 w-full bg-primary dark:bg-Dark-light`}>
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
          <Sidebar.Item href="/" className="text-xl hover:text-blue-500">
              Home
          </Sidebar.Item>
          <Sidebar.Item className="text-xl hover:text-blue-500" href="MyAppointments">
              My Apointtments
          </Sidebar.Item>
          <Sidebar.Item className="text-xl hover:text-blue-500" href="MyAppointments">
              Generete Appoiments
          </Sidebar.Item>
          <Sidebar.Item className="text-xl hover:text-blue-500" href="MyAppointments">
              Edit Appoiments
          </Sidebar.Item>
          <Sidebar.Item className="text-xl hover:text-blue-500" href="MyAppointments">
              Cancel Appoiments
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item className="text-xl hover:text-blue-500" href="CurrentDay">
              To Day Appoiment
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default HeaderHome;
