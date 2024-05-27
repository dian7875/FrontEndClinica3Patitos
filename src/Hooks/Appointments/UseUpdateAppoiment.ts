import { updateAppointment } from "../../Services/Service_appointment";
import { NewAppointment } from "../../types/Appointments";

const useUpdateAppoiment = () => {

  const onSubmit = async (data: NewAppointment) => {
    try {
      await updateAppointment (data)
    } catch (error) {
      console.log(error)
    }
  };

  return {
    onSubmit
  };
};

export default useUpdateAppoiment