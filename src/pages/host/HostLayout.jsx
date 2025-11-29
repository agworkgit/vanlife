// Imports
import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
   return (
      <section className="standard-page">
         <nav className="host-nav">
            <Link to="/host">Dashboard</Link>
            <Link to="/host/income">Income</Link>
            <Link to="/host/reviews">Reviews</Link>
         </nav>
         <Outlet />
      </section>
   );
}
