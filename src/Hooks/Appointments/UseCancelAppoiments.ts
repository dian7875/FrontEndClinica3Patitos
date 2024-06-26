import toast from "react-hot-toast";
import { cancelAppoiment } from "../../services/Service_appointment";
import { CancelAction } from "../Alerts/UseAlerts";

const useCancelAppoiments = async (id_Appointment:number, getAppoiments:()=>void) => {
    const confirmed = await CancelAction();
    if (confirmed) {
    try {
        toast('Please Wait!', {
            icon: '⌛', duration:600
          });
        await cancelAppoiment(id_Appointment)
        toast.success('Success, appointment canceled')
        getAppoiments()
    } catch (error:any) {
        console.error(error)
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
}

  return {
    
  };
};

export default useCancelAppoiments