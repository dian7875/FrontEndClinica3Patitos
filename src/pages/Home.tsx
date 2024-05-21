import { useContext } from "react";
import HeaderLading from "../components/HomeComponents/HeaderHome";
import ThemeContext from "../Contexts/ThemeContext/ThemeContext";
import NavBar from "../components/HomeComponents/NavBar";
import Description from "../components/HomeComponents/Description";
import Footer from "../components/HomeComponents/Footer";
import Main from "../components/HomeComponents/Main";
import useGetUserData from "../Hooks/useGetUserData";

function Home() {
  const {isDarkMode}=useContext(ThemeContext)
  useGetUserData()
  return (
    <>
      <div className={`h-screen flex flex-col ${isDarkMode ? 'dark bg-[url(./src/assets/BGDARK.jpg)] text-white' : 'bg-[url(./src/assets/Backgorund.jpg)]'} `}>
       <HeaderLading/>
       <NavBar/>
       <Description/>
       <Main/>
       <Footer/>
      </div>
    </>
  );
}

export default Home;
