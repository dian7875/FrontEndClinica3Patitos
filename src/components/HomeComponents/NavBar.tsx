import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"
const NavBar = () => {
  return (
    <>
      <nav className="Mid-Header flex justify-between w-full ">
        <div className="IcoPage">
          <img className="w-28 h-28 ml-5" src={Logo} alt="" />
        </div>
        <div className="flex gap-6 pt-4 pr-2">
          <Link to={"/"}>
            Home
          </Link>
          <Link to={"/NotFound"}>
            Medical Services
          </Link>
          <Link to={"/MyAppointments"}>
            Apointments
          </Link>
          <Link to={"/NotFound"}>
            Contac Us
          </Link>
          <Link to={"MyAppointment"}>
            My Apointtments
          </Link>
          <Link to={"/AdminAppointment"}>
            Aministration
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
