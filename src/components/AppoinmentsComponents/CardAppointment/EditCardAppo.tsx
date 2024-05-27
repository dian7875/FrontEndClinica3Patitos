import { useForm } from "react-hook-form";
import AccionBtn from "../../microComponents/AccionBtn"
import { Appointment } from "../../../types/Appointments";

const EditCardAppo = ({ appoiment, onFlip }: any) => {

  const { register, handleSubmit } = useForm<Appointment>({
    defaultValues: {
      Date: appoiment.Date,
      Branch_Name: appoiment.Branch_Name,
      Status: appoiment.Status
    }
  });

 

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg h-32 px-3 pt-2 shadow-xl">
        <div className="flex w-full h-3/5 pb-2 gap-4">
          <div className="flex flex-col w-full">
            <label className="">Date</label>
            <input title=""
              className="h-full  text-gray-500 border rounded-md border-gray-500"
              type="datetime-local"
              placeholder="Fecha"
              required
              {...register('Date', { required: true })}/>
          </div>
          <div className="flex flex-col w-full">
            <label className="">Branch</label>
            <select   title=""
              className="text-gray-500 border h-full rounded-md border-gray-500"
              {...register('Branch_Name', { required: true })}
              defaultValue={appoiment.Branch_Name} 
            >
              <option value="1">Nicoya</option>
              <option value="2">San Martin</option>
              <option value="3">Perez Zeledon</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label className="">Status</label>
            {appoiment.Status ? <span className="border text-center pt-2 h-full rounded-md font-serif bg-white ">Pendiente</span>
              :
              <span className="border text-center pt-2 h-full rounded-md bg-primary text-white ">Cancelada</span>}
          </div>
        </div>
        <div className="flex justify-around h-8 pt-1">
          <AccionBtn onFlip={onFlip} />
        </div>
      </form>
    </>
  )
}

export default EditCardAppo
