
import { useContext, useState } from 'react'
import Card from './CardAppointment/Card'
import toast from 'react-hot-toast'
import ThemeContext from '../../Contexts/ThemeContext/ThemeContext';


export default function AppoimentsContainer() {

  const { isDarkMode } = useContext(ThemeContext);
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const expanded = () => {
    setIsExpanded(!isExpanded)
    isExpanded?  toast('Retracted',{duration: 500}) : toast("Show All Appointment",{duration: 500}) ;

  }

  return (
    <>
      <div className={`flex justify-center ${isDarkMode? `bg-Dark-light` : `bg-primary ` }`}>
        <span className={`mt-2 text-xl ${isDarkMode? `text-white` : ` text-black ` }`}>My Appoiments </span>
        <img onClick={expanded} title='Click For View More'
        className={`w-10 pt-1 ${isDarkMode? `invert ` : ` ` } `}
        src={isExpanded? "https://cdn-icons-png.flaticon.com/128/9053/9053032.png" : "https://cdn-icons-png.flaticon.com/128/3838/3838683.png" }
        alt="" />
      </div>
      <div className={`${isExpanded ? `overflow-auto h-4/5`:`overflow-hidden h-4/5`} px-4 no-scrollbar`}>
        <Card/>
      </div>
    </>
  )
}
