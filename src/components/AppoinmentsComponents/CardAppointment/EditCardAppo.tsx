import { useForm } from "react-hook-form";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import AccionBtn from "../../microComponents/AccionBtn";
import { Appointment, NewAppointment } from "../../../types/appointments";
import { useState } from "react";
import useUpdateAppoiment from "../../../Hooks/Appointments/UseUpdateAppoiment";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import './datePiker.css'
const EditCardAppo = ({ appoiment, onFlip }: { appoiment: Appointment, onFlip: () => void }) => {
  const storedUser = localStorage.getItem('currentUser');
  const currentUser = storedUser ? JSON.parse(storedUser) : null;
  const { register, handleSubmit } = useForm<NewAppointment>({
    defaultValues: {
      id_Appointment: appoiment.id_Appointment,
      status: appoiment.status,
      date: appoiment.date,
      id_ClinicBranch: appoiment.id_ClinicBranch,
      id_Appoitment_Type: appoiment.id_Appoitment_Type,
      id_User: currentUser?.user_Id,
    },
  });
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const [changes, setChanges] = useState<Partial<NewAppointment>>({});

  const handleDateChange = (date: any) => {
    const currentUtcDate = dayjs().utc();
    const timezoneOffset = currentUtcDate.diff(dayjs(), 'minute');
    const adjustedDate = dayjs(date).subtract(timezoneOffset, 'minute');
    const formattedDate = adjustedDate.format('YYYY-MM-DDTHH:mm:ss[Z]');

    const dateObject = new Date(formattedDate);
    setChanges((prevChanges) => ({
      ...prevChanges,
      date: dateObject,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setChanges((prevChanges) => ({
      ...prevChanges,
      [name]: value,
    }));
  };

  const { onSubmit } = useUpdateAppoiment();

  const handleFormSubmit = () => {
    onSubmit(changes as NewAppointment, appoiment.id_Appointment, onFlip);
  };
  return (
    <>
      <form
        style={{ padding: '0% 2% 0 2%', fontSize: '110%' }}
        onSubmit={handleSubmit(handleFormSubmit)}
        className={`bg-white h-full hover:bg-neutral-100 dark:hover:bg-slate-600 rounded-lg shadow-xl dark:bg-Dark-card dark:text-white`}
      >
        <div className="flex justify-evenly gap-2"
          style={{ height: '60%' }}
        >
          <div className="flex w-full flex-col"

          >
            <label>Date</label>
            <DateTimePicker
              className="text-gray-500 border rounded-md bg-white border-gray-500"
              views={['hours', 'day', 'year', 'month']}
              defaultValue={dayjs(appoiment.date)}
              {...register('date')}
              onChange={handleDateChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="">Branch</label>
            <select
              className="text-gray-500 border cursor-pointer  rounded-md border-gray-500"
              {...register('id_ClinicBranch', { required: true, onChange: handleChange })}
            >
              <option value="1">Under Loch Ness</option>
              <option value="2">San Martin</option>
              <option value="3">Brasilito</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label className="">Medical speciality</label>
            <select
              className="text-gray-500 border cursor-pointer  rounded-md border-gray-500"
              {...register('id_Appoitment_Type', { required: true, onChange: handleChange })}
            >
              <option value="1">General Medicine</option>
              <option value="2">Dentistry</option>
              <option value="3">Pediatrics</option>
              <option value="4">Neurology</option>
            </select>
          </div>

        </div>
        <div className="flex justify-around"
          style={{ padding: '1% 0% 0 0%', fontSize: '110%' }}
        >
          <AccionBtn
            onFlip={onFlip}
            id_Appointment={appoiment.id_Appointment}
          />
        </div>
      </form>
    </>
  );
};

export default EditCardAppo;
