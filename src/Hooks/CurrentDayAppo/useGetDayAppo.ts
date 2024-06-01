import { useCallback, useContext } from "react";
import { getDayAppoiments } from "../../services/Service_appointment";
import AppointmentsContext from "../../Contexts/AppoimentContext/appoimentContext";
import loadingContext from "../../Contexts/LoadingContext/LoadingtContext";

function UseGetDayAppo() {
  const { setLoading} = useContext(loadingContext)
  
  const {appoiments,setAppoiments} = useContext(AppointmentsContext)
  const getToDayAppoiments = useCallback(async () => {
    try {
      setLoading(true)
      const toDayAppo = await getDayAppoiments()
      setAppoiments(toDayAppo);
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }, []);

  return {
    appoiments, getToDayAppoiments
  };
}

export default UseGetDayAppo;
