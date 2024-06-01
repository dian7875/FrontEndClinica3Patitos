import { Table } from "flowbite-react"
import { Appointment } from "../../types/appointments"
import Deletebtn from "./DeleteBtn"

const TableData = ({appoiment}:{appoiment:Appointment}) => {
  return (
    <>
              <Table.Cell>{appoiment.user_Name}</Table.Cell>
              <Table.Cell>{appoiment.branch_Name}</Table.Cell>
              <Table.Cell>{appoiment.name_type}</Table.Cell>
              {appoiment.status ?
                <Table.Cell>Pendiente</Table.Cell>
                :
                <Table.Cell>Cancelada</Table.Cell>}
              <Table.Cell>
                <Deletebtn id_Appointment={appoiment.id_Appointment} />
              </Table.Cell>

    </>
  )
}

export default TableData
