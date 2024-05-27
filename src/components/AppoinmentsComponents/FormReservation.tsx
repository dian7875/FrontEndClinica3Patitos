import { useForm } from "react-hook-form";
import { NewAppointment } from "../../types/Appointments";
import NewAppoBtn from "../microComponents/NewAppoBtn";
import ListBranches from "../microComponents/ListBranches";
import ListTypes from "../microComponents/ListTypes";
import { useContext, useEffect } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import useNewAppointment from "../../Hooks/Appointments/UseNewAppointment";
function FormReservation() {
  const {currentUser} = useContext(AuthContext)
  const { register, handleSubmit, setValue } = useForm<NewAppointment>();

  useEffect(() => {
    if (currentUser) {
      setValue("id_User", currentUser.user_Id);
    }
  }, [setValue, currentUser]);

  const{onSubmit}= useNewAppointment()

  return (
    <>
      <div className="px-40 pt-20 pb-12">
        <div className="bg-white px-3 rounded-2xl text-lg shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5">
              <div className="flex flex-col w-full">
                <label className="">Fecha</label>
                <input
                  className="text-gray-500 border rounded-md h-full border-gray-500"
                  type="datetime-local"
                  required
                  {...register("date")}
                />
              </div>
              <ListBranches register={register} />
              <ListTypes register={register} />
            </div>
            <div className="flex h-fit justify-around py-2">
              <NewAppoBtn />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormReservation;
