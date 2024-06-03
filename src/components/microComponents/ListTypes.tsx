import { UseFormRegister } from "react-hook-form"
import UseGetList from "../../Hooks/Appointments/UseGetList"
import { NewAppointment } from "../../types/appointments"
import { useEffect } from "react";

const ListTypes = ({ register }: { register: UseFormRegister<NewAppointment> }) => {
  const { getListTypes, TypesAp } = UseGetList(); 

  useEffect(() => {
      getListTypes(); 
  }, [getListTypes]);
  
  return (
    <>
      <div className="flex flex-col w-full">
              <label className="">Medical speciality</label>
              <select
                className=" w-full cursor-pointer text-gray-500 border rounded-md h-full border-gray-500"
                {...register("id_Appoitment_Type")}>
                <option value={0}>Please Select a speciality</option>
                {TypesAp?.map((types, index) => (
                        <option key={index} value={types.id_Appoitment_Type.toString()}>
                            {types.name_type}
                        </option>
                    ))}
              </select>
            </div>
    </>
  )
}

export default ListTypes
