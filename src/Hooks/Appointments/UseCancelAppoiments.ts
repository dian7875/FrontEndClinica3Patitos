import { cancelAppoiment } from "../../Services/Service_appointment";

const useCancelAppoiments = async (id_Appointment:number) => {
    try {
        cancelAppoiment(id_Appointment)
    } catch (error) {
        console.log(error)
    }

  return {
    
  };
};

export default useCancelAppoiments