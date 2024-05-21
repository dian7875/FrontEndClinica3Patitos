import { Link } from 'react-router-dom'

const LoginAcces = () => {
    return (
        <Link className="flex gap-3 mt-2 text-white" to={"/Login"}>
            <h1 className="mt-2">Login</h1>
            <img
                title="ig"
                className="w-10 h-10 invert"
                src="https://cdn-icons-png.flaticon.com/128/7917/7917260.png"
            />
        </Link>
    )
}

export default LoginAcces
