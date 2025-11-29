// Imports
import React from "react";
import { Link } from "react-router-dom";

// Components
import Card from "../components/Card";
import CTA from "../components/CTA";

/**
 * {
 * id: "1",
 * name: "Modest Explorer",
 * price: 60,
 * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
 * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
 * type: "simple"
 * }
 */

export default function Vans() {
   const [vans, setVans] = React.useState([]);
   React.useEffect(() => {
      fetch("/api/vans")
         .then((res) => res.json())
         .then((data) => setVans(data.vans));
   }, []);

   const vanElements = vans.map((van) => {
      return (
         <Link className="van-details-link" to={`/vans/${vans.id}`}>
            <article className="van-wrapper" key={van.id}>
               <h2 className="van-title">{van.name}</h2>
               <img
                  className="van-card-img"
                  src={van.imageUrl}
                  alt={van.name}
               />
               {/* <p>{van.description}</p>*/}
               <p className="van-price">
                  ${van.price} <span>/ day</span>
               </p>
               <p className="van-type">
                  {van.type[0].toUpperCase() + van.type.slice(1)}
               </p>
            </article>
         </Link>
      );
   });

   return (
      <section className="standard-page">
         <h1>Explore our van options</h1>
         <div className="vans-grid">{vanElements}</div>
      </section>
   );
}
