import { useForm } from "react-hook-form";
import AccionBtn from "../../microComponents/AccionBtn"
import { NewAppointment } from "../../../types/Appointments";
import { useContext, useState } from "react";
import AuthContext from "../../../Contexts/AutContext/AuthContext";
import useUpdateAppoiment from "../../../Hooks/Appointments/UseUpdateAppoiment";

const EditCardAppo = ({ appoiment, onFlip }: any) => {
  const {currentUser} = useContext(AuthContext)
  const { register, handleSubmit } = useForm<NewAppointment>({
    defaultValues: {
      id_Appointment: appoiment.id_Appointment,
      status: appoiment.status,
      date: appoiment.date,
      id_ClinicBranch: appoiment.id_ClinicBranch,
      id_Appoitment_Type: appoiment.id_Appoitment_Type,
      id_User: currentUser?.user_Id
    }
  });
  
  const [changes, setChanges] = useState<Partial<NewAppointment>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setChanges(prevChanges => ({
      ...prevChanges,
      [name]: value
    }));
  };

  const { onSubmit } = useUpdateAppoiment();

  const handleFormSubmit = () => {
    onSubmit(changes as NewAppointment);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="bg-white rounded-lg h-32 px-3 pt-2 shadow-xl">
        <div className="flex w-full h-3/5 pb-2 gap-4">
          <div className="flex flex-col w-full">
            <label className="">Date</label>
            <input title=""
              className="h-full  text-gray-500 border rounded-md border-gray-500"
              type="datetime-local"
              placeholder="Fecha"
              required
              {...register('date', { required: true , onChange: handleChange  })}/>
          </div>
          <div className="flex flex-col w-full">
            <label className="">Branch</label>
            <select   title=""
              className="text-gray-500 border h-full rounded-md border-gray-500"
              {...register('id_ClinicBranch', { required: true, onChange: handleChange })}
            >
              <option value="2">Nicoya</option>
              <option value="3">San Martin</option>
              <option value="4">Perez Zeledon</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label className="">Status</label>
            {appoiment.status ? <span className="border text-center pt-2 h-full rounded-md font-serif bg-white ">Pendiente</span>
              :
              <span className="border text-center pt-2 h-full rounded-md bg-primary text-white ">Cancelada</span>}
          </div>
        </div>
        <div className="flex justify-around h-8 pt-1">
          <AccionBtn onFlip={onFlip} id_Appointment={appoiment.id} />
        </div>
      </form>
    </>
  )
}

export default EditCardAppo
