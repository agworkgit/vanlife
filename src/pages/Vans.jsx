// Imports
import React from "react";

// Components
import Card from "../components/Card";
import CTA from "../components/CTA";

export default function Vans() {
   const [vans, setVans] = React.useState([]);
   React.useEffect(() => {
      fetch("/api/vans")
         .then((res) => res.json())
         .then((data) => setVans(data.vans));
   }, []);

   return (
      <section className="standard-page">
         <div className="grid">
            {vans.map((van) => {
               return (
                  <article className="van-wrapper" key={van.id}>
                     <h2>{van.name}</h2>
                     <img
                        className="van-card-img"
                        src={van.imageUrl}
                        alt={van.name}
                     />
                     <p>{van.description}</p>
                     <p>Price: ${van.price}</p>
                     <p>{van.type[0].toUpperCase() + van.type.slice(1)}</p>
                  </article>
               );
            })}
         </div>
      </section>
   );
}

// <h2>Explore our van options</h2>
// <p>New</p>
// <p>Used</p>
// <Card
//    textColor={"black"}
//    img={
//       "https://images.unsplash.com/photo-1576793048000-494aaa93d160?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmFufGVufDB8fDB8fHww"
//    }
//    title={"Some van"}
//    descriptionTop={`Van Details`}
//    descriptionBottom={`Price: $ An arm and a leg`}
//    buttonText={"Buy now"}
// />
