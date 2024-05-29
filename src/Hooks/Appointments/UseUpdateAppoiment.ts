import toast from "react-hot-toast";
import { updateAppointment } from "../../Services/Service_appointment";
import { NewAppointment } from "../../types/appointments";

const useUpdateAppoiment = () => {

  const onSubmit = async (data: NewAppointment, id_Appointment:number) => {
    try {
      console.table(data)
      console.log(id_Appointment)
     await updateAppointment (data, id_Appointment)
      toast.success('La Cita se actualizo con exito')
    } catch (error:any) {
      const errorMessage = error.message || "Fail to Update Appoiment";
      const dateUnavailableMessage = "The selected date and time are not available";

      if (errorMessage.includes(dateUnavailableMessage)) {
        toast.error(dateUnavailableMessage);
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return {
    onSubmit
  };
};

export default useUpdateAppoiment