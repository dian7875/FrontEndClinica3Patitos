import { useState } from "react";

function UserData() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-1 mr-2 text-white">
      <div onClick={toggleInfo} className="flex gap-3 text-white">
        <h1 className="cursor-pointer mt-2">Nombre</h1>
        <img className='w-10 h-10 invert' src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png" alt="" />
      </div>
    </div>
  );

}

export default UserData
/*
 {isOpen ? (
    <div >
      <p>Correo: ejemplo@correo.com</p>
      <p>Teléfono: 123-456-7890</p>
    </div>
  ) : null}
*/