import { Table, TableBody } from "flowbite-react";
import UseGetDayAppo from "../../Hooks/CurrentDayAppo/useGetDayAppo"

const TableAppoiments = () => {
const {appoiments}=UseGetDayAppo()
  return (
    <div className="w-2/3">
      <Table>
      <Table.Head className="bg-black">
          <Table.HeadCell className="bg-primary text-white">Pacient Name</Table.HeadCell>
          <Table.HeadCell className="bg-primary text-white">Branch</Table.HeadCell>
          <Table.HeadCell className="bg-primary text-white">Type</Table.HeadCell>
          <Table.HeadCell className="bg-primary text-white">Status</Table.HeadCell>
          <Table.HeadCell className="bg-primary text-white">
            Action
          </Table.HeadCell>
        </Table.Head>
        <TableBody>
        {appoiments.map((appoiment)=>(
          <Table.Row key={appoiment.id_Appointment}>
          <Table.Cell>{appoiment.user_Name}</Table.Cell>
          <Table.Cell>{appoiment.branch_Name}</Table.Cell>
          <Table.Cell>{appoiment.name_type}</Table.Cell>
          {appoiment.status ? 
          <Table.Cell>Pendiente</Table.Cell> 
                  :
          <Table.Cell>Cancelada</Table.Cell>}
          <Table.Cell>
          <button type="button" className="font-medium text-primary dark:text-cyan-500">
                Delete
              </button>
          </Table.Cell>
          </Table.Row>
        ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableAppoiments
