import UseGetList from "../../Hooks/Appointments/UseGetList"

const ListTypes = ({register}:any) => {
    const {TypesAp} = UseGetList()
  return (
    <>
      <div className="flex flex-col w-full">
              <label className="">Tipo</label>
              <select
                className="text-gray-500 border rounded-md h-full border-gray-500"
                required
                {...register("id_Appoitment_Type")}>
                <option>Please Select a Especial</option>
                {TypesAp?.map((types, index) => (
                        <option key={index} value={types.id_Appoitment_Type}>
                            {types.name_type}
                        </option>
                    ))}
              </select>
            </div>
    </>
  )
}

export default ListTypes
