// Imports
import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
   const params = useParams();
   // location state comes from React Router's way of handling BrowserAPI history
   const location = useLocation();
   // console.log(params); // the id we get from useParams comes the route :id variable we set up in App.jsx
   const [van, setVan] = useState(null);

   useEffect(() => {
      fetch(`/api/vans/${params.id}`)
         .then((res) => res.json())
         .then((data) => setVan(data.vans));
   }, [params.id]);

   // console.log(van);
   //
   const search = location.state?.search || "";
   const type = location.state?.type || "all";

   return (
      <section className="standard-page">
         <Link
            to={`..${search}`} // Will take us to the parent path "host"
            relative="path" // If we specify this, "to" will point us to the parent path of "vans"
            className="back-button"
         >
            &larr; <span>Back to {type} vans</span>
         </Link>

         {van ? (
            <article className="van-wrapper">
               <img
                  className="van-card-img"
                  src={van.imageUrl}
                  alt={`Image for ${van.name}`}
               />
               <p className="van-type">
                  {van.type[0].toUpperCase() + van.type.slice(1)}
               </p>
               <p className="van-title">{van.name}</p>
               <p>{van.description}</p>
               <p className="van-price">
                  ${van.price} <span>/ day</span>
               </p>
               <button className="button">Rent this van</button>
            </article>
         ) : (
            <h2>Loading... </h2>
         )}
      </section>
   );
}
