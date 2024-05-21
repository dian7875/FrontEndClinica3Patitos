import {Edit} from '../Alerts/Alerts'
import {example} from '../Alerts/Alerta2'
export const ButtonEdit = () => {
  return (
    <>
      <button onClick={Edit} className="  bg-white rounded-md h-8 w-24 text-xs shadow-lg shadow-purple-500/50">
        Edit
      </button>
    </>
  );
};

export const ButtonCancelar = () => {
  return (
    <>
      <button onClick={example} className="sendButton text-white bg-Buttons-Cancel rounded-md h-8 w-24 text-xs shadow-lg">
        Cancel
      </button>
    </>
  );
};

export const ButtonEliminar = () => {
  return (
    <>
      <button className=" bg-Buttons-Eliminar text-white rounded-md h-8 w-24 text-xs shadow-[100px_100px_100px_100pxpx_rgba(0,0,0,0.8)]">
        Delete
      </button>
    </>
  );
};
