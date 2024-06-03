import { Link } from "react-router-dom"

const LogButtoms = () => {
  return (
      <div className="flex w-full justify-around"
      style={{ height: '10%'}}
      >
          <button className="rounded-md w-1/3 shadow-2xl hover:scale-105 shadow-white bg-black"
            type="submit">GO</button>
            <Link to={"/"} className="w-1/3 h-full">
            <button type="button" className="rounded-md w-full hover:scale-105 h-full shadow-2xl shadow-black bg-white text-black">Back</button>
            </Link>
      </div>
  )
}

export default LogButtoms
