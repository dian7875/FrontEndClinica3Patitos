const ViewCardAppo = ({appoiment, onFlip}:any) => {

      const appoDate = new Date(appoiment.Date);
    
      const day = String(appoDate.getDate()).padStart(2, '0');
      const month = String(appoDate.getMonth() + 1).padStart(2, '0');
      const year = appoDate.getFullYear();
      const hours = String(appoDate.getHours()).padStart(2, '0');
      const minutes = String(appoDate.getMinutes()).padStart(2, '0');
      const AppoDate = `${day}/${month}/${year}`;
      const AppoTime = `${hours}:${minutes}`;
  return (
    <>
       <div
              className="bg-white rounded-lg h-32 px-3 pt-2 text-xl shadow-xl">
              <div className="flex w-full h-3/5 gap-4">
                <div className="flex flex-col w-full">
                  <label className="">Date:</label>
                  <span>{AppoDate}</span>
                  <span>{AppoTime} </span>
                </div>
                <div className="flex flex-col w-full">
                  <label className="">Branch:</label>
                  <span>{appoiment.Branch_Name}</span>
                </div>
                <div className="flex flex-col w-full">
                  <label className="">Status:</label>
                  {appoiment.Status ? <span>Pendiente</span> 
                  :
                  <span>Cancelada</span>}
                </div>
              </div>
              <div className="flex justify-around h-8 pt-1">
                <button onClick={onFlip} type="button" className="sendButton text-white bg-violet-300 rounded-md w-24 shadow-lg">Edit</button>
              </div>
            </div>
    </>
  )
}

export default ViewCardAppo
