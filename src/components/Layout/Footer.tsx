import { useContext } from "react"
import ThemeContext from "../../Contexts/ThemeContext/ThemeContext"

const Footer = () => {

    const {isDarkMode} = useContext(ThemeContext)
  return (
    <>
      <footer className={`h-12 fixed bottom-0 w-full text-white ${isDarkMode?`dark bg-Dark-light`:`bg-gray-800`}`}>
        <div className="text-center pt-3">
          © 2024 Los Patitos Governaran El mundo
        </div>
      </footer>
    </>
  )
}

export default Footer
