
import { useEffect, useState } from 'react'
import Card from './CardAppointment/Card'
import toast from 'react-hot-toast'
import UseGetAllAppoiments from '../../Hooks/Appointments/UseGetAllAppoiments';

export default function AppoimentsContainer() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const {appoiments, refreshAppoiments, setAppoiments} = UseGetAllAppoiments();

  const expanded = () => {
    setIsExpanded(!isExpanded)
    isExpanded?  toast('Retracted',{duration: 500}) : toast("Show All Appointment",{duration: 500}) ;
  }
  
  useEffect(() => {
    setAppoiments(appoiments);
  }, [  appoiments]);

  return (
    <>
      <div className={`flex justify-center bg-primary dark:bg-Dark-light`}>
        <span className={'mt-2 text-xl text-white'}>My Appoiments </span>
        <img onClick={expanded} title='Click For View More'
        className={'w-10 pt-1 dark:invert'}
        src={isExpanded? "https://cdn-icons-png.flaticon.com/128/9053/9053032.png" : "https://cdn-icons-png.flaticon.com/128/3838/3838683.png" }
        alt="" />
      </div>
      <div className={`${isExpanded ? `overflow-auto h-4/5`:`overflow-hidden h-4/5`} px-4 no-scrollbar`}>
        <Card/>
      </div>
    </>
  )
}
