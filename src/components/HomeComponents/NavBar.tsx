import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"
const NavBar=()=> {
  return (
    <>
      <div className="Mid-Header flex justify-between w-full ">
        <div className="IcoPage">
          <img className="w-28 h-28 ml-5" src={Logo} alt="" />
        </div>
        <div className="flex gap-6 pt-4 pr-2">
          <Link to={"/"}>
            <a>Home</a>
          </Link>
          <Link to={"/NotFound"}>
          <a>Medical Services</a>
          </Link>
          <Link to={"/MyAppointments"}>
          <a>Apointments</a>
          </Link>
          <Link to={"/NotFound"}>
            <a>Contac Us</a>
          </Link>
          <Link to={""}>
            <a>My Apointtments</a>
          </Link>
          <Link to={"/AdminPage"}>
            <a>Aministration</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
