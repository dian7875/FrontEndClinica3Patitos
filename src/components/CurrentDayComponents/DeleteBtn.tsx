import useDeleteAppoiment from "../../Hooks/CurrentDayAppo/useDeleteAppo"
import UseGetDayAppo from "../../Hooks/CurrentDayAppo/useGetDayAppo"


const Deletebtn = ({ id_Appointment }: { id_Appointment: number }) => {

  const { getToDayAppoiments } = UseGetDayAppo()

  const DeleteAppo = () => {
    useDeleteAppoiment(id_Appointment, getToDayAppoiments)
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
