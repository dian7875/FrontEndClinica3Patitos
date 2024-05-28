import useDeleteAppoiment from "../../Hooks/CurrentDayAppo/useDeleteAppo"


const Deletebtn = ({id_Appointment}:{id_Appointment:number}) => {

    const DeleteAppo=()=>{
        useDeleteAppoiment(id_Appointment)
    }

  return (
    <>
      <button onClick={DeleteAppo} type="button" className="font-medium text-primary dark:text-cyan-500">
                Delete
              </button>
    </>
  )
}

export default Deletebtn
