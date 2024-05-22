
import UseGetAllAppoiments from "../../Hooks/UseGetAllAppoiments";
import { Appointment } from "../../types/appointments";
import {ButtonCards} from "./ButtonCards";

import {useForm} from "react-hook-form";

function Card() {
  const { appoiments } = UseGetAllAppoiments();
const {register} = useForm<Appointment>()

  return (
    <>
      {appoiments.map((appoiment) => {
        return (
          <form
            key={appoiment.id}
            className=" mt-5 bg-white w-2/5 h-1/3 p-1 space-y-2 ml-5 mr-5 rounded-lg"
          >
            <div className="grid grid-cols-3 mt-4 gap-1">
              <label className="text-xs">Fecha</label>
              <label className="text-xs">Sucursal</label>
              <label className="text-xs">Status</label>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <input title="a"
                className="text-xs text-gray-500 border rounded-md border-gray-500"
                type="datetime-local"
                {...register("Date")}
              />
              <select title="a"
                className="text-xs  text-gray-500 border rounded-md border-gray-500"
                id=""
                value={appoiment.Branch_Name}
                onChange={() => {}}
              >
                <option value="">{appoiment.Branch_Name}</option>
                <option value="">3 Patitos Nicoya</option>
                <option value="">3 Patitos San Martin</option>
                <option value="">3 Patitos Desamparados</option>
              </select>
              <label
                className="text-xs  text-gray-500 border rounded-md border-gray-500"
                htmlFor=""
              >
                {appoiment.Status ? "Activo" : "Cancelado"}
              </label>
            </div>
            <div className="grid grid-cols-3  justify-items-center">
              <ButtonCards/>
            </div>
              
          </form>
        );
      })}
    </>
  );
}

export default Card;
