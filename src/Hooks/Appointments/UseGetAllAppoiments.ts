import { useCallback, useContext, useState} from "react";
import { getAppointments } from "../../services/Service_appointment";
import loadingContext from "../../Contexts/LoadingContext/LoadingtContext";
import { Appointment } from "../../types/appointments";

function UseGetAllAppoiments() {
    const [appoiments, setAppoiments] = useState<Appointment[]>([]);
    const storedUser = localStorage.getItem('currentUser');
    const{setLoading}= useContext(loadingContext)
    const currentUser = storedUser ? JSON.parse(storedUser) : null;
    const getAppoiments = useCallback (async () => {
      try {
        if(currentUser){
          setLoading(true)
          const appoimentsServices = await getAppointments(currentUser.user_Id);
          setAppoiments(appoimentsServices);
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        console.error(error);
      }
    }, []);

    return {
      appoiments, getAppoiments
    };
  }
  
  export default UseGetAllAppoiments;
