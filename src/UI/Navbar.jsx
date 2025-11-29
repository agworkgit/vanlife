// Imports
import { NavLink } from "react-router-dom";

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
      </nav>
   );
}
