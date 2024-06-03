import toast from "react-hot-toast";
import { updateAppointment } from "../../services/Service_appointment";
import { NewAppointment } from "../../types/appointments";
import UseGetAllAppoiments from "./UseGetAllAppoiments";
import { confirmActionEdit } from "../Alerts/UseAlerts";

const useUpdateAppoiment = () => {
  const { getAppoiments } = UseGetAllAppoiments()
  const onSubmit = async (data: NewAppointment, id_Appointment: number, onFlip: () => void) => {
    const confirmed = await confirmActionEdit();
    if (confirmed) {
      try {
        toast('Please Wait!', {
          icon: '⌛',duration:600
        });
        await updateAppointment(data, id_Appointment)
        getAppoiments()
        toast.success('The appointment was edited successfully')
        onFlip()
      } catch (error: any) {
        const errorMessage = error.message || "Fail to Update Appoiment";
        const dateUnavailableMessage = "The selected date and time are not available";
        if (errorMessage.includes(dateUnavailableMessage)) {
          toast.error(dateUnavailableMessage);
        } else {
          toast.error(errorMessage);
        }
      }
    }
  };
  return {
    onSubmit,
  };
};

export default useUpdateAppoiment;
