import { useContext, useEffect, useState } from "react";
import { Appointment } from "../../types/appointments";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import { getAppointments } from "../../Services/Service_appointment";

function UseGetAllAppoiments() {
    const [appoiments, setAppoiments] = useState<Appointment[]>([]);
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
    }, []);
  
    return {
      appoiments, getAppoiments
    };
  }
  
  export default UseGetAllAppoiments;
