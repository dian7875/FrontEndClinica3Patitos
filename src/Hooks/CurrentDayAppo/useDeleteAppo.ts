import toast from "react-hot-toast";
import { deleteAppointment } from "../../services/Service_appointment";
import { DeleteAction } from "../Alerts/UseAlerts";

const useDeleteAppoiment = async (id_Appointment: number, getToDayAppoiments: () => void) => {
    const confirmed = await DeleteAction();
    if (confirmed) {
    try {
        toast('Please Wait!', {
            icon: '⌛',duration:600
          });
        await deleteAppointment(id_Appointment)
        toast.success('Appoiment Delete')
        getToDayAppoiments()
    }  catch (error:any) {
        console.error(error)
        if (error.message.includes('permission')) {
            toast.error('You do not have permission to delete appointments.');
          } else {
            toast.error('Unknown Error');
          }
        }
    }

    return{
        
    }

}

export default useDeleteAppoiment;
