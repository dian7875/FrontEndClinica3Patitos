import { useCallback, useState } from "react";
import { Appointment } from "../../types/appointments";
import { getDayAppoiments } from "../../services/Service_appointment";

function UseGetDayAppo() {
  const [dayAppoiments, setDayAppoiments] = useState<Appointment[]>([]);

  const getToDayAppoiments = useCallback(async () => {
    try {
      const toDayAppo = await getDayAppoiments()
      console.table(toDayAppo)
      setDayAppoiments(toDayAppo);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return {
    dayAppoiments, getToDayAppoiments
  };
}

export default UseGetDayAppo;
