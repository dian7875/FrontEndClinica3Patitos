import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";

const NewAppoBtn = () => {
  const { isDarkMode } = useContext(ThemeContext);
    return (
      <>
        <button type="submit" className={`rounded-md w-24 shadow-lg shadow-gray-800/50 h-full ${
          isDarkMode ? `bg-gray-800` : `bg-white  `
        }`}>
          Reserve
        </button>
        <button type="button" className={`  text-white rounded-md w-24 ${
          isDarkMode ? `bg-gray-900` : `bg-primary`
        }`}>
          Clean
        </button>
      </>
    )
  }

  export default NewAppoBtn
  
  