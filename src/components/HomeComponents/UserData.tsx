import { useState } from "react";

function UserData() {
   
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col  gap-3 p-4">
  <div onClick={toggleInfo} className="flex gap-3 mt-2 text-white">
    <h1 className="text-2xl font-bold cursor-pointer">
      Nombre
    </h1>
    <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png" alt="" />
  </div>
  {isOpen ? (
    <div >
      <p>Correo: ejemplo@correo.com</p>
      <p>Teléfono: 123-456-7890</p>
    </div>
  ) : null}
</div>
    
  );

}

export default UserData
