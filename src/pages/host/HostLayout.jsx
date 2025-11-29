// Imports
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
   return (
      <section className="standard-page">
         <nav className="host-nav">
            <NavLink
               className={({ isActive }) => (isActive ? "active-link" : "link")}
               to="/host"
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
