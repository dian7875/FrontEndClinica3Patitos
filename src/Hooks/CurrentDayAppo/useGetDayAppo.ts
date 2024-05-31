import { useCallback, useContext } from "react";
import { getDayAppoiments } from "../../services/Service_appointment";
import AppointmentsContext from "../../Contexts/AppoimentsContext/AppoimentsContext";

function UseGetDayAppo() {
  const {appoiments,setAppoiments} = useContext(AppointmentsContext)

      const getAppoiments = useCallback (async () => {
    try {
      const dayAppoiments = await getDayAppoiments()
          setAppoiments(dayAppoiments);
          
    } catch (error) {
      console.error(error);
    }
  }, []);
  
    return {
      appoiments, getAppoiments
    };
  }
  
  export default UseGetDayAppo;
