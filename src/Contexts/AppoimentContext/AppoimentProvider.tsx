import { ReactNode, useState } from "react";
import { Appointment } from "../../types/appointments";
import AppointmentsContext from "./appoimentContext";

const AppointmentsProvider = ({ children }:{children:ReactNode}) => {
  const [appoiments, setAppoiments] = useState<Appointment[] | null>(null);
  return (
    <AppointmentsContext.Provider value={{ appoiments, setAppoiments }}>
      {children}
    </AppointmentsContext.Provider>
  );
};

export default AppointmentsProvider

