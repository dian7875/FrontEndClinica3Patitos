import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext";

const DarkModeToggle = () => {
    const {isDarkMode,toggleDarkMode} = useContext(ThemeContext)
    return (
        <button type="button" onClick={toggleDarkMode}>
            {isDarkMode ? <img className="hover:invert"
            src="https://cdn-icons-png.flaticon.com/128/702/702471.png" width={35} alt="" /> 
            :
            <img width={35} className="invert hover:invert-0" 
            src="https://cdn-icons-png.flaticon.com/128/2392/2392508.png" alt="" />}
        </button>
    );
};

export default DarkModeToggle;
