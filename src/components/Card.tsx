import React, { useState } from "react";
import { ButtonEdit, ButtonCancelar, ButtonEliminar } from "./ButtonCards";
function Card() {
  const [dateTime, setDateTime] = useState("");

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div className="mt-5 bg-white w-1/2 h-1/3 p-1 space-y-2 ml-5 mr-5 rounded-lg">
        <div className="grid grid-cols-3 mt-4 gap-1">
          <label className="text-xs">Fecha</label>
          <label className="text-xs">Sucursal</label>
          <label className="text-xs">Tipo</label>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <input
            className="text-xs text-gray-500 border rounded-md border-gray-500"
            type="datetime-local"
            value={dateTime}
            onChange={handleDateTimeChange}
          />
          <select
            className="text-xs  text-gray-500 border rounded-md border-gray-500"
            name=""
            id=""
          >
            <option value="">3 Patitos Nicoya</option>
            <option value="">3 Patitos San Martin</option>
            <option value="">3 Patitos Desamparados</option>
          </select>
          <select
            className="text-xs  text-gray-500 border rounded-md border-gray-500"
            name=""
            id=""
          >
            <option value="">Pendiente</option>
            <option value="">Cancelada</option>
          </select>
        </div>
        <div className="grid grid-cols-3  justify-items-center">
          <ButtonEdit />
          <ButtonCancelar />
          <ButtonEliminar />
        </div>
      </div>
    </>
  );
}

export default Card;
