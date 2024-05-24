import { getAllAppo } from "../../Services/Service_appointment";
import { useEffect, useState } from "react";
import { Appointment } from "../../types/Appointments";

function UseGetAllAppoiments() {
    const [appoiments, setAppoiments] = useState<Appointment[]>([]);
  
    const getAppoiments = async () => {
      try {
        const appoimentsServices = await getAllAppo();
        setAppoiments(appoimentsServices);
      } catch (error) {
        console.error("Error al cargar datos:", Error);
      }
    };
  
    useEffect(() => {
      getAppoiments();
    }, []);
  
    return {
      appoiments,
      getAppoiments,
      setAppoiments,
    };
  }
  
  export default UseGetAllAppoiments;
