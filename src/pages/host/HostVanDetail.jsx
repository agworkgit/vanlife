import React from "react";
import {
   Link,
   NavLink,
   useParams,
   Outlet,
   useOutletContext,
} from "react-router-dom";

export default function HostVanDetail() {
   /**
    * Challenge (not optional!): build the shared UI portion of the
    * Host Van Detail page. This is
    *
    * Optional portion: also style it to look like the design.
    *
    * For now, get the data from a request to `/api/host/vans/:id`
    * and display the van image, name, price, type
    */
   const { id } = useParams();
   const [currentVan, setCurrentVan] = React.useState(null);

   React.useEffect(() => {
      fetch(`/api/host/vans/${id}`)
         .then((res) => res.json())
         .then((data) => setCurrentVan(data.vans));
   }, []);

   if (!currentVan) {
      return <h1>Loading...</h1>;
   }

   return (
      <section>
         <Link
            to=".." // Will take us to the parent path "host"
            relative="path" // If we specify this, "to" will point us to the parent path of "vans"
            className="back-button"
         >
            &larr; <span>Back to all vans</span>
         </Link>

         <div className="host-vans-grid">
            <div className="host-van-wrapper">
               <div className="host-van-detail">
                  <img className="host-card-img" src={currentVan.imageUrl} />
                  <div className="host-card-details">
                     <h3>{currentVan.name}</h3>
                     <h4>${currentVan.price}/day</h4>
                     <i className={`van-type van-type-${currentVan.type}`}>
                        {currentVan.type}
                     </i>
                  </div>
               </div>

               <nav className="navbar">
                  {/* Your links go here */}
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? "active-link" : "link"
                     }
                     to="."
                     end
                  >
                     Details
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? "active-link" : "link"
                     }
                     to="pricing"
                  >
                     Pricing
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive ? "active-link" : "link"
                     }
                     to="photos"
                  >
                     Photos
                  </NavLink>
               </nav>

               <Outlet context={{ currentVan }} />
            </div>
         </div>
      </section>
   );
}
