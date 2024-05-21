import useAuht from "../Hooks/useGetUserData"
import chems from "../assets/404.gif"

const NotFound = () => {
  useAuht()
  return (
    <>
      <h1>404 los archivos se borran, el recuerdo de ella no by Akion2024</h1>
      <img src={chems} alt="" />
    </>
  )
}

export default NotFound
