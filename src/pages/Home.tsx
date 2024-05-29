import NavBar from "../components/HomeComponents/NavBar";
import Description from "../components/HomeComponents/Description";
import Main from "../components/HomeComponents/MainHome";

function Home() {
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

export default Home;
