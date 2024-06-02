import { useForm } from "react-hook-form";
import { NewAppointment } from "../../types/appointments";
import ListBranches from "../microComponents/ListBranches";
import ListTypes from "../microComponents/ListTypes";
import useNewAppointment from "../../Hooks/Appointments/UseNewAppointment";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { useEffect } from "react";
const FormReservation = () => {
  const storedUser = localStorage.getItem('currentUser');
    const currentUser = storedUser ? JSON.parse(storedUser) : null;
  const { register, handleSubmit, setValue } = useForm<NewAppointment>();

  useEffect(() => {
    if (currentUser) {
      setValue("id_User", currentUser.user_Id);
    }
  }, [setValue, currentUser]);

  
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
  const { onSubmit } = useNewAppointment()
  
  return (
    <>
      <div className="px-40 pt-6 pb-12">
        <span className="pl-2 dark:text-white text-xl">Create New Appoiment</span>
        <div className={`bg-white px-3 rounded-2xl text-lg shadow-2xl dark:bg-Dark-light `}>
          <form 
          className="dark:text-white"
          onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5">
              <div className="flex flex-col h-full w-full">
                <label className="">Date</label>
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
