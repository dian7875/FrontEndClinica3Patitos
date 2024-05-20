import { useContext } from "react";
import HeaderLading from "../components/HomeComponents/HeaderHome";
import ThemeContext from "../Contexts/ThemeContext/ThemeContext";
import NavBar from "../components/HomeComponents/NavBar";

function Home() {
  const {isDarkMode}=useContext(ThemeContext)
  return (
    <>
      <div className={`h-screen ${!isDarkMode ? 'dark bg-secondary text-white' : 'bg-white'} `}>
       <HeaderLading/>
       <NavBar/>
      </div>
    </>
  );
}

export default Home;
