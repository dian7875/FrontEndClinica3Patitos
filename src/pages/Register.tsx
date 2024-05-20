import { useContext } from "react"
import ThemeContext from "../assets/ThemeContext/ThemeContext"

const Register = () => {
    const { isDarkMode } = useContext(ThemeContext)
    return (
        <>
            <div className={`h-screen flex justify-center items-center ${isDarkMode ? 'dark bg-secondary text-white' : 'bg-white'} `}>
                <form action="" className={`p-8 rounded-2xl flex flex-col w-2/5 items-center text-white 
       ${isDarkMode ? 'dark bg-gray-600 text-white' : 'bg-primary text-black'}
       gap-5`}>
                    <div className="flex flex-col items-center text-xl">
                        <h1>Welcome To</h1>
                        <span>Clinic Three Ducklings</span>
                    </div>
                    <div className="w-full">
                        <button type="button"
                            className="bg-white w-2/4 h-10 text-secondary rounded-l-lg">Login</button>
                        <button type="button"
                            className="bg-secondary w-2/4 h-10 text-white rounded-r-lg">Sing Up</button>
                    </div>
                    <div className="w-full ">
                        <span>Full Name:</span>
                        <input className="text-secondary w-full h-10 rounded-sm pl-2"
                            type="text"
                            value={'Maria Paula Fernandez Marchena'}
                            placeholder="Name and Last Name" />
                    </div>
                    <div className="w-full ">
                        <span>Phone:</span>
                        <input className="text-secondary h-10 w-full rounded-sm pl-2"
                            type="tel" name="phone" id=""
                            placeholder="xxxx-xxxx" />
                    </div>
                    <div className="w-full ">
                        <span>Email:</span>
                        <input className="text-secondary h-10 w-full rounded-sm pl-2"
                            type="email" name="" id=""
                            placeholder="example@gmail.com" />
                    </div>
                    <div className="w-full">
                        <span>Password:</span>
                        <input className="text-secondary h-10 w-full rounded-sm pl-2"
                            type="password" name="UserPaswow" id=""
                            placeholder="xxx" />
                    </div>
                    <button className="w-16 h-10 rounded-md shadow-2xl shadow-white bg-black"
                        type="submit">GO</button>
                </form>
            </div>
        </>
    )
}

export default Register
