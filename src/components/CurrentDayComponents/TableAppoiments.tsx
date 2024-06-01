import { Table, TableBody } from "flowbite-react";
import UseGetDayAppo from "../../Hooks/CurrentDayAppo/useGetDayAppo"
import { useEffect } from "react";
import TableData from "./TableData";

const TableAppoiments = () => {
  const { appoiments, getAppoiments } = UseGetDayAppo()
  useEffect(() => {
    getAppoiments();
  }, [getAppoiments]);

  if (appoiments && appoiments.length > 0) {
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
            {appoiments.map((appoiment) => (
              <Table.Row key={appoiment.id_Appointment}>
                <TableData appoiment={appoiment} />
              </Table.Row>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default TableAppoiments
