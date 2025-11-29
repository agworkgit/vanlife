// Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
   const params = useParams();
   // console.log(params); // the id we get from useParams comes the route :id variable we set up in App.jsx
   const [van, setVan] = useState(null);

   useEffect(() => {
      fetch(`/api/vans/${params.id}`)
         .then((res) => res.json())
         .then((data) => setVan(data.vans));
   }, [params.id]);

   console.log(van);

   return (
      <section className="standard-page">
         {van ? (
            <article className="van-wrapper">
               <img
                  className="van-card-img"
                  src={van.imageUrl}
                  alt={`Image for ${van.name}`}
               />
               <p className="van-title">{van.name}</p>
               <p>{van.description}</p>
               <p className="van-price">
                  ${van.price} <span>/ day</span>
               </p>
               <p className="van-type">
                  {van.type[0].toUpperCase() + van.type.slice(1)}
               </p>
               <button className="button">Rent this van</button>
            </article>
         ) : (
            <h2>Loading... </h2>
         )}
      </section>
   );
}
