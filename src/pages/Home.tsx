import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext/ThemeContext";
import NavBar from "../components/HomeComponents/NavBar";
import Description from "../components/HomeComponents/Description";
import Main from "../components/HomeComponents/Main";
import LogOut from "../components/microComponents/LogOut";

function Home() {
  const {isDarkMode}=useContext(ThemeContext)
  return (
    <>
      <div className={`h-screen flex flex-col pt-12 pb-16 ${isDarkMode ? 'dark bg-[url(./src/assets/BGDARK.jpg)] text-white' : 'bg-[url(./src/assets/Backgorund.jpg)]'} `}>
       <LogOut/>
       <NavBar/>
       <Description/>
       <Main/>
      </div>
    </>
  );
}

export default Home;
