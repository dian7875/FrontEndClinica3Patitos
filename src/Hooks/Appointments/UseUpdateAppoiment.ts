import { updateAppointment } from "../../Services/Service_appointment";
import { NewAppointment } from "../../types/Appointments";

const useUpdateAppoiment = () => {

  const onSubmit = async (data: NewAppointment, id_Appointment:number) => {
    try {
      await updateAppointment (data, id_Appointment)
    } catch (error) {
      console.log(error)
    }
  };

  return {
    onSubmit
  };
};

export default useUpdateAppoiment