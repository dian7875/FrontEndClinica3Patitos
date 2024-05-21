import { useState } from "react";

function UserShowData() {
   
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col  gap-3 p-4">
  <div onClick={toggleInfo} className="flex gap-3">
    <img className='w-8 h-8' src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png" alt="" />
    <h1
      className="text-2xl font-bold cursor-pointer"
      
    >
      Nombre
    </h1>
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

export default UserShowData
