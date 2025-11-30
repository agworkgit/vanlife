// Imports
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
   return (
      <nav className="navbar">
         <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/host"
         >
            Host
         </NavLink>
         <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/about"
         >
            About
         </NavLink>
         <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/vans"
         >
            Vans
         </NavLink>
         <Link to="login" className="link">
            <FaRegUserCircle className="login-icon" />
         </Link>
      </nav>
   );
}
