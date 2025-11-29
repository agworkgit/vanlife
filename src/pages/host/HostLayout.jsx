// Imports
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
   return (
      <section className="standard-page">
         <nav className="host-nav">
            <NavLink
               className={({ isActive }) => (isActive ? "active-link" : "link")}
               to="/host"
               // Will tell Router to end matching here, otherwise multi match conflict
               end
            >
               Dashboard
            </NavLink>
            <NavLink
               className={({ isActive }) => (isActive ? "active-link" : "link")}
               to="/host/income"
            >
               Income
            </NavLink>
            <NavLink
               className={({ isActive }) => (isActive ? "active-link" : "link")}
               to="/host/reviews"
            >
               Reviews
            </NavLink>
         </nav>
         <Outlet />
      </section>
   );
}
