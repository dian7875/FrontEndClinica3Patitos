import chems from "../assets/404.gif"

const NotFound = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <p>Akion once said</p>
      <q>404 The files are deleted, the memory of her is not</q>
      <p className="text-end">(Akion,2024)</p>
      <img src={chems} alt="" />
    </div>
    </>
  )
}

export default NotFound
