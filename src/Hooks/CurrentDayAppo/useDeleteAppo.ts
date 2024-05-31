import toast from "react-hot-toast";
import { deleteAppointment } from "../../services/Service_appointment";

const useDeleteAppoiment = async (id_Appointment:number) => {
 
    try {
       await deleteAppointment(id_Appointment)
        toast.success('Appoiment Delete')
    } catch (error) {
        console.log(error)
        toast.error('Appoiment Delete')
    }
  }
  
  export default useDeleteAppoiment;
 