import { Link } from 'react-router-dom'

const LoginAcces = () => {
    return (
        <Link className="flex gap-3 mt-1 pr-2 w-full justify-end text-white " to={"/Auth"}>
            <span className="mt-3">Login</span>
            <img
            width={49}
                title="ig"
                className="
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
