import { Link } from "react-router-dom"

const LogButtoms = () => {
  return (
      <div className="flex gap-10">
          <button className="w-16 h-10 rounded-md shadow-2xl shadow-white bg-black"
            type="submit">GO</button>
            <Link to={"/"}>
            <button className="h-10 w-16 rounded-md shadow-2xl shadow-black bg-white text-black">Back</button>
            </Link>
          </div>
  )
}

export default LogButtoms
