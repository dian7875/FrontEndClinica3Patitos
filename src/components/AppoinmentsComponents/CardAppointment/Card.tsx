import UseGetAllAppoiments from "../../../Hooks/Appointments/UseGetAllAppoiments";
import CardFlipp from "./CardFlipp";


function Card() {  
  const { appoiments } = UseGetAllAppoiments();
  return (
    
    <div className="grid grid-cols-2"
    style={{ padding: ' 1% 0% 1% 0%', gap: '1%', height:'180%' }}
    >
      {appoiments.map((appoiment) => (
        <div key={appoiment.id_Appointment} 
        className="w-full h-full">
        <CardFlipp appoiment={appoiment}/>
        </div>
      ))}
    </div>
  );
}

export default Card;
