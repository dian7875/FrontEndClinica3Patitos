
import UseGetAllAppoiments from "../../Hooks/Appointments/UseGetAllAppoiments";
import { Appointment } from "../../types/Appointments";
import { ButtonCards } from "../microComponents/AccionBtn";

import { useForm } from "react-hook-form";

function Card() {
  const { appoiments } = UseGetAllAppoiments();
  const { register } = useForm<Appointment>()

  return (
    <>

      <div className={`grid grid-cols-2 gap-5 `}>
        {appoiments.map((appoiment) => {
          return (
            <form
              key={appoiment.id}
              className="bg-white rounded-lg h-32 px-2 pt-5 relative shadow-xl">
              <span className="absolute" style={{ top: '-5px' }}>Pacient Name: {appoiment.Past_Name}</span>
              <div className="flex w-full h-3/5 gap-4">
                <div className="flex flex-col w-full">
                  <label className="">Date</label>
                  <input title=""
                    className="h-full text-gray-500 border rounded-md border-gray-500"
                    type="datetime-local"
                    {...register("Date")} />
                </div>
                <div className="flex flex-col w-full">
                  <label className="">Branch</label>
                  <select title="a"
                    className=" text-gray-500 border h-full rounded-md border-gray-500"
                    id=""
                    value={appoiment.Branch_Name}>
                    <option value="">{appoiment.Branch_Name}</option>
                    <option value="">3 Patitos Nicoya</option>
                    <option value="">3 Patitos San Martin</option>
                    <option value="">3 Patitos Desamparados</option>
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
                <ButtonCards />
              </div>
            </form>
          );
        })}
      </div>
    </>
  );
}

export default Card;
