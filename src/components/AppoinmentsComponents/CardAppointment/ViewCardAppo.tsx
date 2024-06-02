import dayjs from "dayjs";
import toast from "react-hot-toast";
import { Appointment } from "../../../types/appointments";

const ViewCardAppo = ({ appoiment, onFlip }:{ appoiment:Appointment, onFlip:()=>void }) => {

  const editflip = () =>{
    appoiment.status?  onFlip() : toast.error('Canot edit cancel appointment')
  }
  const fecha = dayjs(appoiment.date)
  const fechaLegible = fecha.format('MM/DD/YYYY hh:mm A');

  return (
    <>
       <div
       style={{padding:'1% 2% 0 2%', fontSize:'110%'}}
              className={`bg-white h-full rounded-lg shadow-xl dark:bg-Dark-light dark:text-white`}>
              <div className="flex w-full h-3/5 gap-4">
                <div className="flex flex-col w-full">
                  <label className="">Date:</label>
                  <span>{fechaLegible}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label className="">Branch:</label>
                  <span>{appoiment.branch_Name}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label className="">Medical speciality:</label>
                  <span>{appoiment.name_type}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label className="">Status:</label>
                  {appoiment.status ? <span>Pending</span> 
                  :
                  <span>Cancelled</span>}
                </div>
              </div>
              <div
                style={{ padding: '1% 0% 0 0%', fontSize: '110%' }}
                className="flex justify-around">
                <button onClick={editflip} type="button"
                  className={`text-white bg-violet-300 rounded-md w-24 shadow-lg dark:bg-gray-400 `}>Edit</button>
              </div>
            </div>
    </>
  )
}

export default ViewCardAppo
