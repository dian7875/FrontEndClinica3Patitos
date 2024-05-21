import { useState } from "react";

function UserShowData() {
   
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    console.log("Estado antes de cambiar:", isOpen);
    setIsOpen(!isOpen);
    console.log("Estado después de cambiar:", !isOpen);
  };

  return (
    <div className="p-4">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={toggleInfo}
      >
        Nombre
      </h1>
      {isOpen ?  (
        <div className="mt-2">
          <p>Correo: ejemplo@correo.com</p>
          <p>Teléfono: 123-456-7890</p>
        </div>
      ): null}
    </div>
  );


 
}

export default UserShowData
