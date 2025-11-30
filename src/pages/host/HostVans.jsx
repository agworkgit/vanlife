// Imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
   const [vans, setVans] = useState([]);
   useEffect(() => {
      fetch("/api/host/vans")
         .then((res) => res.json())
         .then((data) => setVans(data.vans));
   }, []);

   const hostVansEls = vans.map((van) => {
      return (
         <Link
            className="van-details-link"
            to={`/host/vans/${van.id}`}
            key={van.id}
            // sr-only
            aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
         >
            <article className="host-van-wrapper">
               <img
                  className="host-card-img"
                  src={van.imageUrl}
                  alt={`Image for ${van.name}`}
               />
               <div className="host-van-detail">
                  <p className="van-title">{van.name}</p>
                  {/* <p>{van.description}</p>*/}
                  <p className="van-price">
                     ${van.price} <span>/ day</span>
                  </p>
                  {/* <p className="van-type">
                     {van.type[0].toUpperCase() + van.type.slice(1)}
                  </p>*/}
               </div>
            </article>
         </Link>
      );
   });

   return (
      <div className="host-vans-grid">
         <h1>Your listed vans</h1>
         {vans.length > 0 ? (
            <section className="host-vans-grid">{hostVansEls}</section>
         ) : (
            <h2>Loading...</h2>
         )}
      </div>
   );
}
