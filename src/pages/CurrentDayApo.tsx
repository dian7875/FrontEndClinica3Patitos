import { useContext } from "react"
import TableAppoiments from "../components/CurrentDayComponents/TableAppoiments"
import ListContext from "../Contexts/ListContext/ListContext"
import image from "../assets/Loanding_Gif.gif"

const CurrentDayApo = () => {
  const {loading} = useContext(ListContext);

  
  if (loading) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={image} alt="Loading" />
        </div>
    );
} else {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <TableAppoiments/>
      </div>
    </>
  )
}
}

export default CurrentDayApo
