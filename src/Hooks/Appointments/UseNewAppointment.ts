import toast from "react-hot-toast";
import { createAppointment } from "../../Services/Service_appointment";
import { NewAppointment } from "../../types/appointments";

const useNewAppointment = () => {
    
  const extractErrorMessage = (errorString: string): string => {
    const match = errorString.match(/The selected date and time are not available\./);
    if (match) {
        return match[0];
    } else {
        return "Unknown error occurred";
    }
  };

  const onSubmit = async (data: NewAppointment) => {
    try {
        await createAppointment(data)
        toast.success('Cita Creada Con éxito')
    } catch (error) {
      let errorMessage: string;

      if (typeof error === 'string') {
          errorMessage = extractErrorMessage(error);
      } else if (error instanceof Error) {
          errorMessage = extractErrorMessage(error.message);
      } else {
          errorMessage = "Unknown error occurred";
      }

      console.error("Error:", errorMessage);
      toast.error(errorMessage)
    }
  };
  return {
    onSubmit
  };
};

export default useNewAppointment