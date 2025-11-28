// Imports
import { Link } from "react-router-dom";

export default function Navbar() {
   return (
      <nav className="navbar">
         <Link className="link" to="/about">
            About
         </Link>
         <Link className="link" to="/vans">
            Vans
         </Link>
      </nav>
   );
}
