import { useContext } from "react"
import ThemeContext from "../Contexts/ThemeContext/ThemeContext"
import { Link, Navigate } from "react-router-dom";
import LogButtoms from "../components/LogButtoms";
import { useForm } from "react-hook-form";
import { LoginData } from "../types/User";
import AuthContext from "../Contexts/AutContext/AuthContext";
import useLogin from "../Hooks/useLogin";

const Login = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const {register, handleSubmit } = useForm<LoginData>()
  const onSubmit = useLogin();
  const {isLogged} = useContext(AuthContext)

  if(isLogged){
    return <Navigate to={"/"}/>
  }

  return (
    <>
      <div className={`h-screen flex justify-center items-center ${isDarkMode ? 'dark bg-secondary text-white' : 'bg-white'} `}>
        <form className={`p-8 rounded-2xl flex flex-col w-2/5 items-center text-white 
       ${isDarkMode ? 'dark bg-gray-600 text-white' : 'bg-primary text-black'}
       gap-10`}
       onSubmit={handleSubmit(onSubmit)}>
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
            <label>Email:</label>
            <input required className="text-secondary h-10 w-full rounded-sm pl-2"
              type="Email"
              placeholder="Email@example.com"
              {...register("Email")}/>
          </div>
          <div className="w-full">
            <label>Password:</label>
            <input required className="text-secondary w-full h-10 rounded-sm pl-2"
              type="password"
              id="" placeholder="xxx" 
              {...register("Password")}/>
          </div>
          <LogButtoms />
        </form>
      </div>
    </>
  )
}

export default Login
