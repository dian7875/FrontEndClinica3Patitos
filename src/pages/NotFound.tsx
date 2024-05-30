import { useContext } from "react"
import chems from "../assets/404.gif"
import ListContext from "../Contexts/ListContext/ListContext"
import image from "../assets/Loanding_Gif.gif"

const NotFound = () => {
  const {loading}= useContext(ListContext);
  if (loading) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={image} alt="Loading" />
        </div>
    );
} else {
  return (
    <>
      <h1>404 los archivos se borran, el recuerdo de ella no by Akion2024</h1>
      <img src={chems} alt="" />
    </>
  )
}
}

export default NotFound
