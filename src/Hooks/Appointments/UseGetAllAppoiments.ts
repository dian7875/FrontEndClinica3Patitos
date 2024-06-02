import { useCallback, useContext} from "react";
import { getAppointments } from "../../services/Service_appointment";
import loadingContext from "../../Contexts/LoadingContext/LoadingtContext";
import AppointmentsContext from "../../Contexts/AppoimentContext/appoimentContext";

function UseGetAllAppoiments() {
   const {appoiments,setAppoiments} = useContext(AppointmentsContext)
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
      appoiments, getAppoiments, refreshAppoiments: getAppoiments, setAppoiments
    };
  }
  
  export default UseGetAllAppoiments;
