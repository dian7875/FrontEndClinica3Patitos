import toast from "react-hot-toast";
import { cancelAppoiment } from "../../Services/Service_appointment";

const useCancelAppoiments = async (id_Appointment:number) => {
    try {
        await cancelAppoiment(id_Appointment)
        toast.success('Cita Cancelada')
    } catch (error:any) {
        console.log(error)
        const errorMessage = extractErrorMessage(error.message);
    console.error("Error:", errorMessage);
        toast.error(errorMessage)
    }

    function extractErrorMessage(errorString:string) {
        const match = errorString.match(/{"message":"(.*?)"}/);
        if (match && match[1]) {
            return match[1];
        } else {
            return "Unknown error occurred";
        }
    }

  return {
    
  };
};

export default useCancelAppoiments