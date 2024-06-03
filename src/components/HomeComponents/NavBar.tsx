import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"
const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between w-full h-1/6 ">
          <img className="ml-7" src={Logo} alt="" />
        <div className="flex gap-6 pt-4 pr-2 h-fit">
          <Link className="hover:text-cyan-500" to={"/NotFound"}>
            Medical Services
          </Link>
          <Link className="hover:text-cyan-500" to={"/NotFound"}>
            Contac Us
          </Link>
          <Link className="hover:text-cyan-500" to={"MyAppointments"}>
            My Apointtments
          </Link>
          <Link className="hover:text-cyan-500" to={"/CurrentDay"}>
            Administration
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
