import NavBar from "../components/HomeComponents/NavBar";
import Description from "../components/HomeComponents/Description";
import Main from "../components/HomeComponents/MainHome";

function Home() {
  return (
    <>
      <div
        className={`h-screen flex flex-col pt-12 pb-16 
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
