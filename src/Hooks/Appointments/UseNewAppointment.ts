import toast from "react-hot-toast";
import { createAppointment } from "../../services/Service_appointment";
import { NewAppointment } from "../../types/appointments";
import UseGetAllAppoiments from "./UseGetAllAppoiments";

const useNewAppointment = () => {
  const {getAppoiments} =UseGetAllAppoiments()
  const onSubmit = async (data: NewAppointment) => { 
    try {
        await createAppointment(data);
        getAppoiments()
        toast.success('Cita Creada Con éxito');
    } catch (error:any) {
      const errorMessage = error.message || "Fail to Create Appointment";
      const only1DateMessage = "You cannot create another appointment for the same user on the same day.";
      if (errorMessage.includes(only1DateMessage)) {
        toast.error(only1DateMessage);
      } else {
        toast.error('Please Fill the information');
      }
    }
  };
  return {
     onSubmit
  };
};

export default useNewAppointment;