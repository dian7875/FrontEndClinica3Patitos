import toast from "react-hot-toast";
import { deleteAppointment } from "../../services/Service_appointment";

const useDeleteAppoiment = async (id_Appointment:number) => {
 
    try {
       await deleteAppointment(id_Appointment)
        toast.success('削除成功')
    } catch (error) {
        console.log(error)
        toast.error('削除失敗')
    }
    return {
      
    };
  }
  
  export default useDeleteAppoiment;
 