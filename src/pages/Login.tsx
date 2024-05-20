import { useContext } from "react"
import ThemeContext from "../Contexts/ThemeContext/ThemeContext"
import { Link } from "react-router-dom";
import LogButtoms from "../components/LogButtoms";

const Login = () => {
  const { isDarkMode } = useContext(ThemeContext);


  return (
    <>
      <div className={`h-screen flex justify-center items-center ${!isDarkMode ? 'dark bg-secondary text-white' : 'bg-white'} `}>
        <form action="" className={`p-8 rounded-2xl flex flex-col w-2/5 items-center text-white 
       ${!isDarkMode ? 'dark bg-gray-600 text-white' : 'bg-primary text-black'}
       gap-10`}>
          <div className="flex flex-col items-center text-xl">
            <h1>Welcome Back</h1>
            <span>Clinic Three Ducklings</span>
          </div>
          <div className="w-full">
            <button type="button"
              className="bg-secondary w-2/4 h-10 rounded-l-lg">Login</button>
            <Link to={"/Register"}>
              <button type="button"
                className="bg-white w-2/4 h-10 text-secondary rounded-r-lg">Sing Up</button>
            </Link>
          </div>
          <div className="w-full ">
            <span>Email:</span>
            <input className="text-secondary h-10 w-full rounded-sm pl-2"
              type="Email"
              placeholder="Email@example.com" />
          </div>
          <div className="w-full">
            <span>Password:</span>
            <input className="text-secondary w-full h-10 rounded-sm pl-2"
              type="password"
              name="UserPaswow" id="" placeholder="xxx" />
          </div>
          <LogButtoms/>
        </form>
      </div>
    </>
  )
}

export default Login
