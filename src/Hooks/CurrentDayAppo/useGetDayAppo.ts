import { useCallback, useState} from "react";
import { getDayAppoiments } from "../../services/Service_appointment";
import { Appointment } from "../../types/appointments";

function UseGetDayAppo() {
  const [appoiments, setAppoiments] = useState<Appointment[]>([]);

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
