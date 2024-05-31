import { useCallback, useContext} from "react";
import { getAppointments } from "../../services/Service_appointment";
import AppointmentsContext from "../../Contexts/AppoimentsContext/AppoimentsContext";

function UseGetAllAppoiments() {
    const {appoiments,setAppoiments} = useContext(AppointmentsContext)
    const storedUser = localStorage.getItem('currentUser');
    const currentUser = storedUser ? JSON.parse(storedUser) : null;
    const getAppoiments = useCallback (async () => {
      try {
        if(currentUser){
          const appoimentsServices = await getAppointments(currentUser.user_Id);
          setAppoiments(appoimentsServices);
        }
      } catch (error) {
        console.error(error);
      }
    }, []);

    return {
      appoiments, getAppoiments
    };
  }
  
  export default UseGetAllAppoiments;
