import UseGetAllAppoiments from "../../../Hooks/Appointments/UseGetAllAppoiments";
import CardFlipp from "./CardFlipp";


function Card() {  
  const { appoiments } = UseGetAllAppoiments();
  return (
    <div className="grid grid-cols-2 gap-5">
      {appoiments.map((appoiment) => (
        <div key={appoiment.id} className="pb-8 w-full h-full">
        <CardFlipp appoiment={appoiment}/>
        </div>
      ))}
    </div>
  );
}

export default Card;
