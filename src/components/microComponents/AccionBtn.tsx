import useCancelAppoiments from "../../Hooks/Appointments/UseCancelAppoiments"
import UseGetAllAppoiments from "../../Hooks/Appointments/UseGetAllAppoiments"

const AccionBtn = ({onFlip, id_Appointment}:{onFlip:any,id_Appointment:number}) => {

  const {getAppoiments} =UseGetAllAppoiments()

  const onCancel = () =>{
    try {
      useCancelAppoiments(id_Appointment, getAppoiments)
    } finally{
      onFlip()   
    }
  } 

  return (
    <>
      <button type="submit" className={` bg-white rounded-md w-24 shadow-lg shadow-purple-500/50 dark:bg-gray-900 dark:shadow-gray-900/50`}>
        Save
      </button>
      <button type="button" className={` bg-Buttons-Eliminar text-white rounded-md w-24 dark:bg-gray-700`}>
        Delete
      </button>
      <button onClick={onCancel} type="button" className={`sendButton text-white bg-Buttons-Cancel rounded-md w-24 shadow-lg dark:bg-gray-500`}>
        Cancel
      </button>
      <button onClick={onFlip} type="button" className={`sendButton text-white bg-violet-300 rounded-md w-24 shadow-lg dark:bg-gray-400`}>
        Back
      </button>
    </>
  )
}

export default AccionBtn