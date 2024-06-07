import LogButtoms from "../microComponents/LoginBtn";
import { useForm } from "react-hook-form";
import { LoginData } from "../../types/User";

import useLogin from "../../Hooks/Auth/useLogin";


const Login = ({onFlip}:any) => {
  const { register, handleSubmit } = useForm<LoginData>()
  const onSubmit = useLogin();
 


  return (
    <>
      <div className={`h-screen flex justify-center w-full items-center text-black bg-white
      dark:bg-secondary`}>
        <form onSubmit={handleSubmit(onSubmit)}
          style={{ padding: ' 1% 2% 0 2%', gap: '2%' }}
          className={`rounded-2xl flex
        h-3/5
        flex-col w-2/5 items-center text-white
        bg-primary dark:bg-gray-600 gap-`}>
          <div className="flex flex-col items-center h-1/6 text-xl">
            <h1>Welcome Back</h1>
            <span>Clinic Three Ducklings</span>
          </div>
          <div className="w-full"
            style={{ height: '10%' }}>
            <button type="button"
              className="bg-secondary w-2/4 h-full rounded-l-lg hover:scale-105">Login</button>
              <button type="button" onClick={onFlip}
                className="bg-white w-2/4 h-full text-secondary rounded-r-lg hover:scale-105">Sing Up</button>
          </div>
          <div className="w-full h-2/5 flex flex-col"
            style={{ margin: '4% 0 2% 0', gap:'10%' }}>
            <div>
              <label>Email:</label>
              <input required className="text-secondary w-full rounded-sm pl-1"
                type="Email"
                placeholder="Email@example.com"
                {...register("Email")} />
            </div>
            <div>
              <label>Password:</label>
              <input required className="text-secondary w-full rounded-sm pl-1"
                type="password"
                placeholder="*******"
                {...register("Password")} />
            </div>
          </div>
          <LogButtoms/>
        </form>
      </div>
    </>
  )
}

export default Login
