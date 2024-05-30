import { useContext, useEffect} from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import { getAppointments } from "../../services/Service_appointment";
import AppointmentsContext from "../../Contexts/AppoimentsContext/AppoimentsContext";
import ListContext from "../../Contexts/LoadingContext/LoadingtContext";

function UseGetAllAppoiments() {
    const {appoiments,setAppoiments} = useContext(AppointmentsContext)
    const {currentUser} = useContext(AuthContext);
    const {setLoading} = useContext(ListContext)

    const getAppoiments = async () => {
      setLoading(true); 
      try {
        if(currentUser){
          const appoimentsServices = await getAppointments(currentUser.user_Id);
          setAppoiments(appoimentsServices);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getAppoiments();
    }, [currentUser]);
  
    return {
      appoiments, getAppoiments
    };
  }
  
  export default UseGetAllAppoiments;
