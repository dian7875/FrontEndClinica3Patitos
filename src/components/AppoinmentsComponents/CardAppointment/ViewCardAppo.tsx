import dayjs from "dayjs";

import { useContext } from "react";
import ThemeContext from "../../../Contexts/ThemeContext/ThemeContext";

const ViewCardAppo = ({appoiment, onFlip}:any) => {
  
  const fecha = dayjs(appoiment.date)
  const fechaLegible = fecha.format('MM/DD/YYYY hh:mm A');

      const appoDate = new Date(appoiment.date);
      const day = String(appoDate.getDate()).padStart(2, '0');
      const month = String(appoDate.getMonth() + 1).padStart(2, '0');
      const year = appoDate.getFullYear();
      const hours = String(appoDate.getHours()).padStart(2, '0');
      const minutes = String(appoDate.getMinutes()).padStart(2, '0');
      const AppoDate = `${day}/${month}/${year}`;
      const AppoTime = `${hours}:${minutes}`;

      const { isDarkMode } = useContext(ThemeContext);
      
  return (
    <>
       <div
       style={{padding:'1% 2% 0 2%', fontSize:'110%'}}
              className="bg-white h-full rounded-lg shadow-xl">
              className={`rounded-lg h-36 px-3 pt-2 text-xl shadow-xl ${isDarkMode? `bg-Dark-light` : `bg-white`}`}>
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
                  <label className="">Type:</label>
                  <span>{appoiment.name_type}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label className="">Status:</label>
                  {appoiment.status ? <span>Pendiente</span> 
                  :
                  <span>Cancelada</span>}
                </div>
              </div>
              <div
              style={{padding:'1% 0% 0 0%', fontSize:'110%'}}
              className="flex justify-around">
                <button onClick={onFlip} type="button" className="sendButton text-white bg-violet-300 rounded-md w-24 shadow-lg ">Edit</button>
              <div className="flex justify-around mt-2 h-8 pt-1">
                <button onClick={onFlip} type="button" className={`sendButton text-white rounded-md w-24 shadow-lg ${
          isDarkMode ? `bg-gray-400` : `bg-violet-300 `
        }`}>Edit</button>
              </div>
            </div>
    </>
  )
}

export default ViewCardAppo
