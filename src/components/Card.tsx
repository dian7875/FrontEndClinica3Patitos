
import { ButtonEdit, ButtonCancelar, ButtonEliminar } from "./ButtonCards";
import UseGetAllAppoiments from "../hooks/UseGetAllAppoiments";
import {useForm} from 'react-hook-form'; 

function Card() {
  const { appoiments } = UseGetAllAppoiments();
  
  const {register, handleSubmit, formState: {errors}} = useForm();

  return (
    <>
      {appoiments.map((appoiment) => {
        return (
          <div
            key={appoiment.id}
            className=" mt-5 bg-white w-2/5 h-1/3 p-1 space-y-2 ml-5 mr-5 rounded-lg"
          >
            <div className="grid grid-cols-3 mt-4 gap-1">
              <label className="text-xs">Fecha</label>
              <label className="text-xs">Sucursal</label>
              <label className="text-xs">Status</label>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <input
                className="text-xs text-gray-500 border rounded-md border-gray-500"
                type="date"
                value="2021-09-01"
                {...register("Date")}
              />
              <select
                className="text-xs  text-gray-500 border rounded-md border-gray-500"
                id=""
               {...register("Branch_Name")}
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
              <ButtonEdit />
              <ButtonCancelar />
              <ButtonEliminar />
            </div>
              
          </div>
        );
      })}
    </>
  );
}

export default Card;
