import { useContext, useEffect } from "react";
import UseGetAllAppoiments from "../../../Hooks/Appointments/UseGetAllAppoiments";
import CardFlipp from "./CardFlipp";
import loadingContext from "../../../Contexts/LoadingContext/LoadingtContext";
import image from "../../../assets/Loanding_Gif.gif"

const Card = () => {

  const { appoiments, getAppoiments } = UseGetAllAppoiments();
  const { loading } = useContext(loadingContext)
  useEffect(() => {
    getAppoiments();
  }, [getAppoiments]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <img src={image} alt="Loading" />
      </div>
    )
  }
  if (appoiments && appoiments.length > 0) {
    return (
      <div className="grid grid-cols-2"
        style={{ padding: ' 0% 0% 1% 0%', gap: '1%' }}
      >
        {appoiments?.map((appoiment) => (
          <div key={appoiment.id_Appointment}
            style={{ padding: ' 1% 0% 0% 0%' }}
            className="w-full h-full">
            <CardFlipp appoiment={appoiment} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <span className="flex w-full h-full items-center justify-center
    dark:text-white text-3xl
    "> No appointments found for the your user</span>
  );
}


export default Card;
