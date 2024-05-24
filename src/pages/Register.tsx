import { useContext } from "react"
import ThemeContext from "../Contexts/ThemeContext/ThemeContext"
import { Link, Navigate } from "react-router-dom"
import LogButtoms from "../components/microComponents/LoginBtn"
import AuthContext from "../Contexts/AutContext/AuthContext"
import { useForm } from "react-hook-form"
import { User } from "../types/User"
import useRegister from "../Hooks/Auth/useRegister"

const Register = () => {
    const {isLogged} = useContext(AuthContext)
    const {register, handleSubmit} = useForm<User>()
    const onSubmit = useRegister();
    if(isLogged){
      return <Navigate to={"/"}/>
    }
  
    const { isDarkMode } = useContext(ThemeContext)
    return (
        <>
            <div className={`h-screen flex justify-center items-center ${isDarkMode ? 'dark bg-secondary text-white' : 'bg-white'} `}>
                <form onSubmit={handleSubmit(onSubmit)} action="" className={`p-8 rounded-2xl flex flex-col w-2/5 items-center text-white 
       ${isDarkMode ? 'dark bg-gray-600 text-white' : 'bg-primary text-black'}
       gap-5`}>
                    <div className="flex flex-col items-center text-xl">
                        <h1>Welcome To</h1>
                        <span>Clinic Three Ducklings</span>
                    </div>
                    <div className="w-full">
                        <Link to={"/Login"}>
                        <button type="button"
                            className="bg-white w-2/4 h-10 text-secondary rounded-l-lg">Login</button>
                        </Link>
                        <button type="button"
                            className="bg-secondary w-2/4 h-10 text-white rounded-r-lg">Sing Up</button>
                    </div>
                    <div className="w-full ">
                        <label>Full Name:</label>
                        <input className="text-secondary w-full h-10 rounded-sm pl-2"
                           required
                           type="text"
                            placeholder="Name and Last Name"
                            {...register("Name")} />
                    </div>
                    <div className="w-full ">
                        <label>Phone:</label>
                        <input className="text-secondary h-10 w-full rounded-sm pl-2"
                           required
                           type="tel" id=""
                            placeholder="xxxx-xxxx"
                            {...register("Phone")} />
                    </div>
                    <div className="w-full ">
                        <label>Email:</label>
                        <input className="text-secondary h-10 w-full rounded-sm pl-2"
                            required
                            type="email" id=""
                            placeholder="example@gmail.com" 
                            {...register("Email")}/>
                    </div>
                    <div className="w-full">
                        <label>Password:</label>
                        <input className="text-secondary h-10 w-full rounded-sm pl-2"
                            required
                            type="password"
                            placeholder="xxx" 
                            {...register("Password")}/>
                    </div>
                    <LogButtoms/>
                </form>
            </div>
        </>
    )
}

export default Register
