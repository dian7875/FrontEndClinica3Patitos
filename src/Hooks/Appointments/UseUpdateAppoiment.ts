import toast from "react-hot-toast";
import { updateAppointment } from "../../services/Service_appointment";
import { NewAppointment } from "../../types/appointments";
import { useContext } from "react";
import ListContext from "../../Contexts/ListContext/ListContext";

const useUpdateAppoiment = () => {
  const {setloading} = useContext(ListContext);

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
      setloading(false); 
    }
  };

  return {
    onSubmit
  };
};

export default useUpdateAppoiment