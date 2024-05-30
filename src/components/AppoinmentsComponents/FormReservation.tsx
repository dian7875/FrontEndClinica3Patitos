import { useForm } from "react-hook-form";
import { NewAppointment } from "../../types/appointments";
import ListBranches from "../microComponents/ListBranches";
import ListTypes from "../microComponents/ListTypes";
import { useContext, useEffect } from "react";
import AuthContext from "../../Contexts/AutContext/AuthContext";
import useNewAppointment from "../../Hooks/Appointments/UseNewAppointment";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
const FormReservation = () => {
  const { currentUser } = useContext(AuthContext)
  const { register, handleSubmit, setValue } = useForm<NewAppointment>();

  useEffect(() => {
    if (currentUser) {
      setValue("id_User", currentUser.user_Id);
    }
  }, [setValue, currentUser]);

  const { onSubmit } = useNewAppointment()

  const handleDateChange = (date: any) => {
    const currentUtcDate = dayjs().utc();
    const timezoneOffset = currentUtcDate.diff(dayjs(), 'minute');
    const adjustedDate = dayjs(date).subtract(timezoneOffset, 'minute');
    const formattedDate = adjustedDate.format('YYYY-MM-DDTHH:mm:ss[Z]');
    const dateObject = new Date(formattedDate);
    setValue('date', dateObject)
  };

  const clearField = () => {
    setValue('id_ClinicBranch', 0)
    setValue('id_Appoitment_Type',0)
  }

  return (
    <>
      <div className="px-40 pt-20 pb-12">
        <div className={`bg-white px-3 rounded-2xl text-lg shadow-2xl dark:bg-Dark-light `}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5">
              <div className="flex flex-col h-full w-full">
                <label className="">Fecha</label>
                <DateTimePicker
                  className="text-gray-500 border rounded-md bg-white border-gray-500"
                  views={['hours', 'day', 'month']}
                  {...register('date')}
                  onChange={handleDateChange}
                />
              </div>
              <ListBranches register={register} />
              <ListTypes register={register} />
            </div>
            <div className="flex h-fit justify-around py-2">
              <button type="submit" className={`bg-white rounded-md w-24 shadow-lg shadow-purple-500/50 h-full dark:bg-gray-900 dark:shadow-gray-900/50 dark:text-white`}>
                Reserve
              </button>
              <button onClick={clearField} type="button" className={` bg-primary text-white rounded-md w-24 dark:bg-gray-800`}>
                Clean
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormReservation;
