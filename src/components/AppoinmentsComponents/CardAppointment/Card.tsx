import UseGetAllAppoiments from "../../../Hooks/Appointments/UseGetAllAppoiments";
import CardFlipp from "./CardFlipp";


const Card=()=> {  
  const { appoiments } = UseGetAllAppoiments();

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

export default Card;
