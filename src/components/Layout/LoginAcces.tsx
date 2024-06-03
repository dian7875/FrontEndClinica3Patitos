import { Link } from 'react-router-dom'

const LoginAcces = () => {
    return (
        <Link className="flex gap-3 mt-1 mr-2 text-white" to={"/Auth"}>
            <h1 className="mt-2">Login</h1>
            <img
                title="ig"
                className="w-10 h-10
                 invert
                hover:invert-0
              dark:hover:invert
              dark:invert-0"
                src="https://cdn-icons-png.flaticon.com/128/7917/7917260.png"
            />
        </Link>
    )
}

export default LoginAcces
