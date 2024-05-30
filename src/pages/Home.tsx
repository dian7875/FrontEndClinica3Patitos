import NavBar from "../components/HomeComponents/NavBar";
import Description from "../components/HomeComponents/Description";
import Main from "../components/HomeComponents/MainHome";
import { useContext, useEffect } from "react";
import ListContext from "../Contexts/LoadingContext/LoadingtContext";
import image from "../assets/Loanding_Gif.gif"
function Home() {
  const {loading,setLoading} = useContext(ListContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <img src={image} alt="Loading" />
</div>
    )
  } else{
    return (
      <>
      <div
        style={{ padding: ' 3% 0% 4% 0%' }}
        className={`h-screen flex flex-col
        bg-[url(./src/assets/Backgorund.jpg)] 
        dark:bg-[url(./src/assets/BGDARK.jpg)]
        dark:text-white`}
        >
        <NavBar />
        <Description />
        <Main />
      </div>
    </>
  );
}
}

export default Home;
