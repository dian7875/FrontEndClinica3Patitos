import { useContext } from "react";
import UseGetAllAppoiments from "../../../Hooks/Appointments/UseGetAllAppoiments";
import CardFlipp from "./CardFlipp";
import loadingContext from "../../../Contexts/LoadingContext/LoadingtContext";
import image from "../../../assets/Loanding_Gif.gif"

const Card=()=> {  
  const { appoiments } = UseGetAllAppoiments();
  const {loading}=useContext(loadingContext)
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={image} alt="Loading" />
  </div>
    )
  }else{
    return (
      <div className="grid grid-cols-2"
      style={{ padding: ' 0% 0% 1% 0%', gap: '1%' }}
      >
        {appoiments?.map((appoiment) => (
          <div key={appoiment.id_Appointment} 
          style={{ padding: ' 1% 0% 0% 0%'}}
          className="w-full h-full">
          <CardFlipp appoiment={appoiment}/>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
