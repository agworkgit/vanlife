// Imports
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
   return (
      <section className="standard-page">
         <nav className="host-nav">
            <NavLink
               className={({ isActive }) => (isActive ? "active-link" : "link")}
               // Will tell Router to link to the current path, similar to doing cd in the terminal
               to="."
               // Will tell Router to end matching here, otherwise multi match conflict
               end
            >
               Dashboard
            </NavLink>
            <NavLink
               className={({ isActive }) => (isActive ? "active-link" : "link")}
               to="income"
            >
               Income
            </NavLink>
            <NavLink
               className={({ isActive }) => (isActive ? "active-link" : "link")}
               to="reviews"
            >
               Reviews
            </NavLink>
            <NavLink
               className={({ isActive }) => (isActive ? "active-link" : "link")}
               to="vans"
            >
               Vans
            </NavLink>
         </nav>
         <Outlet />
      </section>
   );
}
