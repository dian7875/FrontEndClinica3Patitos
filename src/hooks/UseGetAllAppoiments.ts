import { getAllAppo } from "../services/Service_appointment";
import { useEffect, useState } from "react";
import Appo from "../types/appointments";

function UseGetAllAppoiments() {
    const [appoiments, setAppoiments] = useState<Appo[]>([]);
  
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
