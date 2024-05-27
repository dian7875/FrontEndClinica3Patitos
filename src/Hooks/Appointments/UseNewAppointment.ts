import { createAppointment } from "../../Services/Service_appointment";
import { NewAppointment } from "../../types/Appointments";

const useNewAppointment = () => {
  
  const onSubmit = async (data: NewAppointment) => {
    try {
        await createAppointment(data)
        console.table(data)
    } catch (error) {
      console.log(error)
    }
  };

  return {
    onSubmit
  };
};

export default useNewAppointment