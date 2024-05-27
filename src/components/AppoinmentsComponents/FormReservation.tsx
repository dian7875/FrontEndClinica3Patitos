import { useForm } from "react-hook-form";
import { NewAppointment } from "../../types/Appointments";
import NewAppoBtn from "../microComponents/NewAppoBtn";
import ListBranches from "../microComponents/ListBranches";
import ListTypes from "../microComponents/ListTypes";
function FormReservation() {
  const { register } = useForm<NewAppointment>();
  return (
    <>
      <div className="px-40 pt-20 pb-12">
        <div className="bg-white px-3 rounded-2xl text-lg shadow-2xl">
          <form className="flex justify-between gap-3">
            <div className="flex flex-col w-full">
              <label className="">Fecha</label>
              <input
                className="text-gray-500 border rounded-md h-full border-gray-500"
                type="datetime-local"
                value={"2024-05-22T04:16:48"}
                {...register("Date")}
              />
            </div>
            <ListBranches/>
            <ListTypes/>
          </form>
          <div className="flex h-fit justify-around py-2">
            <NewAppoBtn/>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormReservation;
