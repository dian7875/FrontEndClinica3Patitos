import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";
import useCancelAppoiments from "../../Hooks/Appointments/UseCancelAppoiments"



const AccionBtn = ({onFlip, id_Appointment}:{onFlip:any,id_Appointment:number}) => {

  const onCancel = () =>{
    useCancelAppoiments(id_Appointment)
  } 
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <button type="submit" className={` rounded-md w-24 shadow-lg   ${
          isDarkMode ? `bg-gray-800` : `shadow-purple-500/50 `
        }`} >
        Save
      </button>
      <button type="button" className={`  text-white rounded-md w-24 ${
          isDarkMode ? `bg-gray-900` : ` bg-Buttons-Eliminar`
        }`} >
        Delete
      </button>
      <button onClick={onCancel} type="button" className={`sendButton text-white  rounded-md w-24 shadow-lg ${
          isDarkMode ? `bg-gray-500` : ` bg-Buttons-Cancel`
        }`} >
        Cancel
      </button>
      <button onClick={onFlip} type="button" className={`sendButton text-white  rounded-md w-24 shadow-lg ${
          isDarkMode ? `bg-gray-400` : ` bg-violet-300`
        }`} >
        Back
      </button>
    </>
  )
}

export default AccionBtn