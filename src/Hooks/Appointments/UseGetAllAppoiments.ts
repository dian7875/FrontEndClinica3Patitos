import { useContext, useEffect} from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import { getAppointments } from "../../services/Service_appointment";
import AppointmentsContext from "../../Contexts/Appoiments/AppoimentsContext";
import ListContext from "../../Contexts/ListContext/ListContext";

function UseGetAllAppoiments() {
    const {appoiments,setAppoiments} = useContext(AppointmentsContext)
    const {currentUser} = useContext(AuthContext);
    const {setloading} = useContext(ListContext)

    const getAppoiments = async () => {
      try {
        setloading(true); 
        if(currentUser){
          const appoimentsServices = await getAppointments(currentUser.user_Id);
          setAppoiments(appoimentsServices);
        }
        setloading(true);
      } catch (error) {
        console.error(error);
        setloading(false);
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
