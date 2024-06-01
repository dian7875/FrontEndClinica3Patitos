import React, { Dispatch, SetStateAction } from "react";
import { Appointment } from "../../types/appointments";

interface AppointmentsContextType {
    appoiments: Appointment[] | null;
    setAppoiments: Dispatch<SetStateAction<Appointment[] | null>>;
  }

const AppointmentsContext = React.createContext<AppointmentsContextType>({
    appoiments:null,
    setAppoiments:()=>{},
});
export default AppointmentsContext
