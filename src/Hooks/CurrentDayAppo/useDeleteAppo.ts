import toast from "react-hot-toast";
import { deleteAppointment } from "../../services/Service_appointment";

const useDeleteAppoiment = async (id_Appointment:number, getAppoiments:()=>void) => {
 
    try {
       await deleteAppointment(id_Appointment)
       toast.success('Appoiment Delete')
       getAppoiments()
    } catch (error) {
        console.log(error)
        toast.error('Unknow Error')
    }
  }
  
  export default useDeleteAppoiment;
 