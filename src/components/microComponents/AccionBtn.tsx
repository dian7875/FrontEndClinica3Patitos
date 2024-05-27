


const AccionBtn = ({onFlip}:any) => {



  return (
    <>
      <button type="submit" className=" bg-white rounded-md w-24 shadow-lg shadow-purple-500/50">
        Save
      </button>
      <button type="button" className=" bg-Buttons-Eliminar text-white rounded-md w-24">
        Delete
      </button>
      <button type="button" className="sendButton text-white bg-Buttons-Cancel rounded-md w-24 shadow-lg">
        Cancel
      </button>
      <button onClick={onFlip} type="button" className="sendButton text-white bg-violet-300 rounded-md w-24 shadow-lg">
        Back
      </button>
    </>
  )
}

export default AccionBtn