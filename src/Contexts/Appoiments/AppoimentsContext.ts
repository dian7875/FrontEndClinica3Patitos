import React, { Dispatch, SetStateAction } from "react";
import { Appointment } from "../../types/appointments";

interface AppointmentsContextType {
    appoiments: Appointment[];
    setAppoiments: Dispatch<SetStateAction<Appointment[]>>;
  }

const AppointmentsContext = React.createContext<AppointmentsContextType>({
    appoiments:[],
    setAppoiments:()=>{},
});
export default AppointmentsContext
