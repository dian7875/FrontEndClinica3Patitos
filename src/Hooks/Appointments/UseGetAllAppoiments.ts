import { useContext, useEffect, useState } from "react";
import { Appointment } from "../../types/appointments";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import { getAppointments } from "../../Services/Service_appointment";
import ListContext from "../../Contexts/ListContext/ListContext";

function UseGetAllAppoiments() {
    const [appoiments, setAppoiments] = useState<Appointment[]>([]);
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
    }, []);
  
    return {
      appoiments, getAppoiments
    };
  }
  
  export default UseGetAllAppoiments;
