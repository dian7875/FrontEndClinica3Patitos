import React, { useState } from "react";
import { ButtonEdit, ButtonCancelar, ButtonEliminar } from "./ButtonCards";
import UseGetAllAppoiments from "../hooks/UseGetAllAppoiments";
function Card() {
  const { appoiments } = UseGetAllAppoiments();

  const Handlestatus = true;
  var Status = "";

  if (Handlestatus === true) {
    Status = "Activo";
  } else {
    Status = "cancelado";
  }

  return (
    <>
      {appoiments.map((appoiment) => {
        

        return (
          <div
          key={appoiment.id_Appointmnet}
            className=" mt-5 bg-white w-2/5 h-1/3 p-1 space-y-2 ml-5 mr-5 rounded-lg"
          >
            <div className="grid grid-cols-3 mt-4 gap-1">
              <label className="text-xs">Fecha</label>
              <label className="text-xs">Sucursal</label>
              <label className="text-xs">Tipo</label>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <input
                className="text-xs text-gray-500 border rounded-md border-gray-500"
                type="datetime-local"
                value="2003-12-05T10:40"
              />
              <select
                className="text-xs  text-gray-500 border rounded-md border-gray-500"
                name=""
                id=""
              >
                <option value="" selected>
                  {appoiment.Branch_Name}
                </option>
                <option value="">3 Patitos Nicoya</option>
                <option value="">3 Patitos San Martin</option>
                <option value="">3 Patitos Desamparados</option>
              </select>
              <label
                className="text-xs  text-gray-500 border rounded-md border-gray-500"
                htmlFor=""
              >
                {appoiment.Status? "Activo" : "Cancelado"}
              </label>
            </div>
            <div className="grid grid-cols-3  justify-items-center">
              <ButtonEdit />
              <ButtonCancelar />
              <ButtonEliminar />
            </div>
              
          </div>
        );
      })}
    </>
  );
}

export default Card;
