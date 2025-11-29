// Imports
import { Outlet } from "react-router-dom";

// Components
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
   return (
      <>
         <Header />
         <Outlet />
         {/* Outlet is bringing inside Layout all the children of the nested Route in App.jsx */}
         <Footer />
      </>
   );
}
