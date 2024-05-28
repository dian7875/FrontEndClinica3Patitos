import UseGetList from "../../Hooks/Appointments/UseGetList"

const ListBranches = ({ register}:any) => {


    const { Branches } = UseGetList()
    return (
        <>
            <div className="flex flex-col w-full ">
                <label className="">Branch</label>
                <select
                    className=" text-gray-500 border h-full rounded-md border-gray-500"
                    {...register('id_ClinicBranch')}>
                    <option >Please Select a Branch</option>
                    {Branches?.map((Branch, index) => (
                        <option key={index} value={Branch.id_ClinicBranch.toString()}>
                            {Branch.branch_Name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default ListBranches
