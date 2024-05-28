import { useForm } from "react-hook-form";
import AccionBtn from "../../microComponents/AccionBtn";
import { NewAppointment } from "../../../types/appointments";
import { useContext, useState } from "react";
import AuthContext from "../../../Contexts/AutContext/AuthContext";
import useUpdateAppoiment from "../../../Hooks/Appointments/UseUpdateAppoiment";
import ListBranches from "../../microComponents/ListBranches";
import ListTypes from "../../microComponents/ListTypes";
import { Datepicker } from "flowbite-react";

const EditCardAppo = ({ appoiment, onFlip }: any) => {
  const { currentUser } = useContext(AuthContext);
  const { register, handleSubmit} = useForm<NewAppointment>({
    defaultValues: {
      id_Appointment: appoiment.id_Appointment,
      status: appoiment.status,
      date: appoiment.date,
      id_ClinicBranch: appoiment.id_ClinicBranch,
      id_Appoitment_Type: appoiment.id_Appoitment_Type,
      id_User: currentUser?.user_Id,
    },
  });
 
  const [changes, setChanges] = useState<Partial<NewAppointment>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setChanges((prevChanges) => ({
      ...prevChanges,
      [name]: value,
    }));
  };

  const { onSubmit } = useUpdateAppoiment();

  const handleFormSubmit = () => {
    onSubmit(changes as NewAppointment, appoiment.id_Appointment);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="bg-white rounded-lg h-32 pt-2 shadow-xl"
      >
        <div className="flex w-full h-3/5 justify-evenly pb-2 gap-2">
          <div className="flex flex-col">
            <label className="">Date</label>
            <Datepicker
              className="h-full text-gray-500 border rounded-md border-gray-500 "
              required
              {...register("date", { required: true })}
            />
          </div>
          <div className="flex flex-col">
          <label className="">Branch</label>
            <select   title=""
              className="text-gray-500 border h-full rounded-md border-gray-500"
              {...register('id_ClinicBranch', { required: true, onChange: handleChange })}
            >
              <option value="2">Under Loch Ness</option>
              <option value="3">San Martin</option>
              <option value="4">Bracilito</option>
            </select>
          </div>
          <div className="flex flex-col">
          <label className="">Type</label>
            <select   title=""
              className="text-gray-500 border h-full rounded-md border-gray-500"
              {...register('id_Appoitment_Type', { required: true, onChange: handleChange })}
            >
              <option value="2">General Medicine</option>
              <option value="3">Dentistry</option>
              <option value="4">Pediatrics</option>
              <option value="5">Neurology</option>
            </select>
          </div>
          
        </div>
        <div className="flex justify-around h-8 pt-1">
          <AccionBtn
            onFlip={onFlip}
            id_Appointment={appoiment.id_Appointment}
          />
        </div>
      </form>
    </>
  );
};

export default EditCardAppo;
