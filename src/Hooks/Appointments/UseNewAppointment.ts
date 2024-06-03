import toast from "react-hot-toast";
import { createAppointment } from "../../services/Service_appointment";
import { NewAppointment } from "../../types/appointments";
import UseGetAllAppoiments from "./UseGetAllAppoiments";
import { confirmActionReserve } from "../Alerts/UseAlerts";

const useNewAppointment = () => {
  const { getAppoiments } = UseGetAllAppoiments();
  const onSubmit = async (data: NewAppointment) => {
    
    if(data.id_Appoitment_Type==0 || data.id_ClinicBranch==0 || data.date==null){
      toast.error('Please Fill the fields')
    }else{   
      const confirmed = await confirmActionReserve();
      if (confirmed) {
        try {
          toast('Please Wait!', {
          icon: '⌛',duration:600
        });
        await createAppointment(data);
        getAppoiments();
        toast.success('Appointment created successfully');
      } catch (error: any) {
        const errorMessage = error.message || "Fail to Create Appointment";
        const only1DateMessage =
          "You cannot create another appointment for the same user on the same day.";
        if (errorMessage.includes(only1DateMessage)) {
          toast.error(only1DateMessage);
        } else {
          toast.error('Please Chek the fields');
        }
      }
      }
    }
  };
  return {
    onSubmit,
  };
};

export default useNewAppointment;
