import { Table, TableBody } from "flowbite-react";
import UseGetDayAppo from "../../Hooks/CurrentDayAppo/useGetDayAppo"
import Deletebtn from "./DeleteBtn";
import { useContext, useEffect } from "react";
import image from "../../assets/Loanding_Gif.gif"
import loadingContext from "../../Contexts/LoadingContext/LoadingtContext";

const TableAppoiments = () => {
  const { appoiments, getToDayAppoiments } = UseGetDayAppo()
  const { loading } = useContext(loadingContext)
  useEffect(() => {
    getToDayAppoiments();
  }, [getToDayAppoiments]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <img src={image} alt="Loading" />
      </div>
    )
  }
  if (appoiments && appoiments.length > 0) {
    return (
      <div className="w-2/3">
        <span className="w-full text-2xl pl-2">Day Appoiments</span>
        <Table>
          <Table.Head className="bg-black">
            <Table.HeadCell className="bg-primary text-white">Pacient Name</Table.HeadCell>
            <Table.HeadCell className="bg-primary text-white">Medical speciality</Table.HeadCell>
            <Table.HeadCell className="bg-primary text-white">Branch</Table.HeadCell>
            <Table.HeadCell className="bg-primary text-white">Status</Table.HeadCell>
            <Table.HeadCell className="bg-primary text-white">
              Action
            </Table.HeadCell>
          </Table.Head>
          <TableBody>
            {appoiments.map((appoiment) => (
              <Table.Row key={appoiment.id_Appointment}>
                <Table.Cell>{appoiment.user_Name}</Table.Cell>
                <Table.Cell>{appoiment.name_type}</Table.Cell>
                <Table.Cell>{appoiment.branch_Name}</Table.Cell>
                {appoiment.status ?
                  <Table.Cell>Pendiente</Table.Cell>
                  :
                  <Table.Cell>Cancelada</Table.Cell>}
                <Table.Cell>
                  <Deletebtn id_Appointment={appoiment.id_Appointment} />
                </Table.Cell>
              </Table.Row>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  return (
    <span className="flex w-full h-full items-center justify-center
  dark:text-white text-3xl
  "> No appointments found For today</span>
  );
}

export default TableAppoiments
