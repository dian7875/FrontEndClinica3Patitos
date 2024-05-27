import UseGetList from "../../Hooks/Appointments/UseGetList"

const ListBranches = () => {

    const { Branches } = UseGetList()
    return (
        <>
            <div className="flex flex-col w-full">
                <label className="">Sucursal</label>
                <select
                    className="text-gray-500 border rounded-md h-full border-gray-500"
                    title="a">
                    {Branches?.map((Branch, index) => (
                        <option key={index} value={Branch.id_ClinicBranch}>
                            {Branch.branch_Name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default ListBranches
