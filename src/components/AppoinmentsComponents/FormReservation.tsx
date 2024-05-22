import { useForm } from "react-hook-form";
import { NewAppointment } from "../../types/appointments";
import { BtnFappoint } from "./ButtonCards";
function FormReservation() {
  const { register } = useForm<NewAppointment>();
  return (
    <>
      <div className="flex flex-col justify-center
       bg-white 
       h-1/5 px-3 my-16 mx-48 rounded-2xl text-lg">
        <form className="flex justify-between gap-3 h-3/5">
          <div className="flex flex-col w-full">
            <span className="">Fecha</span>
            <input
              className="text-gray-500 border rounded-md h-full border-gray-500"
              type="datetime-local"
              {...register("Date")}
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="">Sucursal</span>
            <select
              className="text-gray-500 border rounded-md h-full border-gray-500"
              {...register("Branch_Name")}>
              <option value="">Nicoya</option>
              <option value="">San Martin</option>
              <option value="">Desamparados</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <span className="">Tipo</span>
            <select
              className="text-gray-500 border rounded-md h-full border-gray-500"
              {...register("Name_Type")}>
              <option value=""> Odontologia</option>
              <option value=""> Medicina general</option>
              <option value=""> Pediatria</option>
            </select>
          </div>
        </form>
        <div className="flex h-fit justify-around py-2">
       <BtnFappoint/>
        </div>
      </div>
    </>
  );
}

export default FormReservation;
