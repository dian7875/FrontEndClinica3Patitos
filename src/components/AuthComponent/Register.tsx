import LogButtoms from "../microComponents/LoginBtn"
import { useForm } from "react-hook-form"
import { User } from "../../types/User"
import useRegister from "../../Hooks/Auth/useRegister"

const Register = ({onFlip}:{onFlip:()=>void}) => {

const { register, handleSubmit } = useForm<User>()
const onSubmit = useRegister({onFlip});



return (
    <>
      <div className={`h-screen flex justify-center items-center text-black bg-white
      dark:bg-secondary`}>
        <form onSubmit={handleSubmit(onSubmit)}
          style={{ padding: ' 1% 2% 0 2%', gap: '1%' }}
          className={`rounded-2xl flex
        h-3/4
        flex-col w-2/5 items-center text-white
        bg-primary dark:bg-gray-600 gap-`}>
          <div className="flex flex-col items-center text-xl">
            <h1>Welcome To</h1>
            <span>Clinic Three Ducklings</span>
          </div>
          <div className="w-full"
            style={{ height: '8%' }}>
            <button type="button" onClick={onFlip}
              className="bg-white hover:scale-105 w-2/4 h-full text-black rounded-l-lg">Login</button>
            <button type="button" 
            className="bg-black w-2/4 hover:scale-105 h-full text-white rounded-r-lg">Sing Up</button>
            
          </div>
          <div className="w-full flex flex-col"
            style={{ margin: '1% 0 0% 0 ', gap:'1%', height:'60%'}}>
           <div className="w-full h-1/4">
                <label>Full Name:</label>
                <input className="text-secondary w-full rounded-sm pl-2"
                required
                type="text"
                placeholder="Name and Last Name"
                {...register("user_Name")} />
            </div>
            <div className="w-full h-1/4">
                <label>Email:</label>
                <input className="text-secondary w-full rounded-sm pl-2"
                required
                type="email"
                placeholder="example@gmail.com"
                {...register("email")} />
            </div>
            <div className="w-full h-1/4">
                <label>Phone:</label>
                <input className="text-secondary w-full rounded-sm pl-2"
                required
                type="tel"
                placeholder="xxxx-xxxx"
                {...register("phone")} />
            </div>
            <div className="w-full h-1/4">
                <label>Password:</label>
                <input className="text-secondary w-full rounded-sm pl-2"
                required
                type="password"
                placeholder="xxx"
                {...register("password")} />
            </div>
          </div>
          <LogButtoms/>
        </form>
      </div>
    </>
)
}

export default Register


/*
<div className="w-full ">
                <label>Full Name:</label>
                <input className="text-secondary w-full rounded-sm pl-2"
                required
                type="text"
                placeholder="Name and Last Name"
                {...register("user_Name")} />
            </div>

            <div className="w-full ">
                <label>Email:</label>
                <input className="text-secondary w-full rounded-sm pl-2"
                required
                type="email"
                placeholder="example@gmail.com"
                {...register("email")} />
            </div>
            <div className="w-full ">
                <label>Phone:</label>
                <input className="text-secondary w-full rounded-sm pl-2"
                required
                type="tel"
                placeholder="xxxx-xxxx"
                {...register("phone")} />
            </div>
            <div className="w-full">
                <label>Password:</label>
                <input className="text-secondary w-full rounded-sm pl-2"
                required
                type="password"
                placeholder="xxx"
                {...register("password")} />
            </div>
                <LogButtoms />
*/