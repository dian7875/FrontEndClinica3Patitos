
import UseGetAllAppoiments from "../../Hooks/UseGetAllAppoiments";
import { Appointment } from "../../types/appointments";
import { ButtonCards } from "./ButtonCards";

import { useForm } from "react-hook-form";

function Card() {
  const { appoiments } = UseGetAllAppoiments();
  const { register } = useForm<Appointment>()

  return (
    <>
      {appoiments.map((appoiment) => {
        return (
          <form
            key={appoiment.id}
            className="bg-white w-full h-full rounded-lg">
            <div className="flex w-full gap-4">
              <div className="flex flex-col w-full">
                <label className="text-xs">Fecha</label>
                <input title="a"
                  className="text-xs text-gray-500 border rounded-md border-gray-500"
                  type="datetime-local"
                  {...register("Date")} />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-xs">Branch</label>
                <select title="a"
                  className="text-xs  text-gray-500 border rounded-md border-gray-500"
                  id=""
                  value={appoiment.Branch_Name}
                  onChange={() => { }}
                >
                  <option value="">{appoiment.Branch_Name}</option>
                  <option value="">3 Patitos Nicoya</option>
                  <option value="">3 Patitos San Martin</option>
                  <option value="">3 Patitos Desamparados</option>
                </select>
              </div>
              <div className="flex flex-col w-full">

              <label className="text-xs">Status</label>
              <label
                className="text-xs  text-gray-500 border rounded-md border-gray-500"
                htmlFor=""
                >
                {appoiment.Status ? "Activo" : "Cancelado"}
              </label>
                  </div>
            </div>
            <div className="flex justify-around">
              <ButtonCards />
            </div>
          </form>
        );
      })}
    </>
  );
}

export default Card;
