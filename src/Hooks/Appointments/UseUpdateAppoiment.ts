import toast from "react-hot-toast";
import { updateAppointment } from "../../services/Service_appointment";
import { NewAppointment } from "../../types/appointments";
import UseGetAllAppoiments from "./UseGetAllAppoiments";
import ListContext from "../../Contexts/LoadingContext/LoadingtContext";
import { useContext } from "react";

const useUpdateAppoiment = () => {
  const {getAppoiments}=UseGetAllAppoiments()  
  const {setloading} = useContext(ListContext);

  const onSubmit = async (data: NewAppointment, id_Appointment:number, onFlip:any) => {
    try {
     await updateAppointment (data, id_Appointment)
     getAppoiments();
      toast.success('La Cita se actualizo con exito')
      onFlip()
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