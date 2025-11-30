// Imports
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

// Data
import { getVans } from "../../data/api";

// Components
// import Card from "../../components/Card";
// import CTA from "../../components/CTA";

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
   const [searchParams, setSearchParams] = useSearchParams();
   const typeFilter = searchParams.get("type");

   const [vans, setVans] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function loadVans() {
         setLoading(true);
         try {
            const data = await getVans();
            setVans(data);
         } catch (err) {
            setError(err);
         } finally {
            setLoading(false);
         }
      }

      loadVans();
   }, []);

   const displayedVans = typeFilter
      ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
      : vans;

   if (loading) {
      return <h1 aria-live="polite">Loading...</h1>;
   }

   if (error) {
      return (
         <h1 aria-live="assertive">There was an error : {error.message}</h1>
      );
   }

   const vanElements = displayedVans.map((van) => {
      return (
         <Link
            className="van-details-link"
            to={van.id}
            key={van.id}
            state={{
               search: `?${searchParams.toString()}`,
               type: typeFilter,
            }}
            // sr-only
            aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
         >
            <article className="van-wrapper">
               <p className="van-title">{van.name}</p>
               <img
                  className="van-card-img"
                  src={van.imageUrl}
                  alt={`Image for ${van.name}`}
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

   function handleFilterChange(key, value) {
      setSearchParams((prevParams) => {
         if (value === null) {
            prevParams.delete(key);
         } else {
            prevParams.set(key, value);
         }
         return prevParams;
      });
   }

   return (
      <section className="standard-page">
         <h1>Explore our van options</h1>
         <nav className="navbar">
            <button
               // Replaced 'to' properties and NavLinks
               onClick={() => handleFilterChange("type", "simple")}
               className={`van-filter simple ${typeFilter === "simple" ? "selected" : ""}`}
            >
               Simple
            </button>
            <button
               onClick={() => handleFilterChange("type", "luxury")}
               className={`van-filter luxury ${typeFilter === "luxury" ? "selected" : ""}`}
            >
               Luxury
            </button>
            <button
               onClick={() => handleFilterChange("type", "rugged")}
               className={`van-filter rugged ${typeFilter === "rugged" ? "selected" : ""}`}
            >
               Rugged
            </button>

            {typeFilter ? (
               <button
                  onClick={() => handleFilterChange("type", null)}
                  className="van-filter clear"
               >
                  Clear filter
               </button>
            ) : null}
         </nav>
         <div className="vans-grid">{vanElements}</div>
      </section>
   );
}
