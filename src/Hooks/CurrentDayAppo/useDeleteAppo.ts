import toast from "react-hot-toast";
import { deleteAppointment } from "../../services/Service_appointment";

const useDeleteAppoiment = async (id_Appointment: number, getToDayAppoiments: () => void) => {

    try {
        await deleteAppointment(id_Appointment)
        toast.success('Appoiment Delete')
        getToDayAppoiments()
    } catch (error) {
        console.log(error)
        toast.error('Unknow Error')
    }

    return{
        
    }
}

export default useDeleteAppoiment;
