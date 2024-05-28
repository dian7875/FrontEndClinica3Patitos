import { useState, useEffect } from "react";
import { getDayAppoiments } from "../../Services/Service_appointment";
import { Appointment } from "../../types/Appointments";

function UseGetDayAppo() {
    const [appoiments, setAppoiments] = useState<Appointment[]>([]);

    const getAppoiments = async () => {
      try {
       
          const dayAppoiments = await getDayAppoiments()
          setAppoiments(dayAppoiments);
        
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getAppoiments();
    }, []);
  
    return {
      appoiments
    };
  }
  
  export default UseGetDayAppo;