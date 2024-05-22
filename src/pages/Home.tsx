import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext/ThemeContext";
import NavBar from "../components/HomeComponents/NavBar";
import Description from "../components/HomeComponents/Description";
import Footer from "../components/HomeComponents/Footer";
import Main from "../components/HomeComponents/Main";


function Home() {
  const {isDarkMode}=useContext(ThemeContext)
  return (
    <>
      <div className={`h-screen flex flex-col pt-12 ${isDarkMode ? 'dark bg-[url(./src/assets/BGDARK.jpg)] text-white' : 'bg-[url(./src/assets/Backgorund.jpg)]'} `}>
       <NavBar/>
       <Description/>
       <Main/>
       <Footer/>
      </div>
    </>
  );
}

export default Home;
