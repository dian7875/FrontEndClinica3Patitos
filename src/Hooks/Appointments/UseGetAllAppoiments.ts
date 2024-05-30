import { useContext, useEffect} from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import { getAppointments } from "../../Services/Service_appointment";
import AppointmentsContext from "../../Contexts/Appoiments/AppoimentsContext";

function UseGetAllAppoiments() {
    const {appoiments,setAppoiments} = useContext(AppointmentsContext)
    const {currentUser} = useContext(AuthContext);

    const getAppoiments = async () => {
      try {
        if(currentUser){
          const appoimentsServices = await getAppointments(currentUser.user_Id);
          setAppoiments(appoimentsServices);
        }
      } catch (error) {
        console.error(error);
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
