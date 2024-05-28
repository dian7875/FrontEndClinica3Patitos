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
    } catch (error) {
      console.log(error)
      toast.error('Un error ocurrio al actualizar la cita')
    }
  };

  return {
    onSubmit
  };
};

export default useUpdateAppoiment