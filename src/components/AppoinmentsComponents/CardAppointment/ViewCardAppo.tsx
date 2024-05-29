import dayjs from "dayjs";

const ViewCardAppo = ({appoiment, onFlip}:any) => {
  
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
                <button onClick={onFlip} type="button" className={`sendButton text-white bg-violet-300 rounded-md w-24 shadow-lg dark:bg-gray-400 `}>Edit</button>
              </div>
            </div>
    </>
  )
}

export default ViewCardAppo
