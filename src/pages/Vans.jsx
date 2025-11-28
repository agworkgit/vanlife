// Components
import Card from "../components/Card";
import CTA from "../components/CTA";

export default function Vans() {
   return (
      <section className="standard-page">
         <div className="grid">
            <h2>Explore our van options</h2>
            <p>New</p>
            <p>Used</p>
            <Card
               textColor={"black"}
               img={
                  "https://images.unsplash.com/photo-1576793048000-494aaa93d160?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmFufGVufDB8fDB8fHww"
               }
               title={"Some van"}
               descriptionTop={`Van Details`}
               descriptionBottom={`Price: $ An arm and a leg`}
               buttonText={"Buy now"}
            />
         </div>
      </section>
   );
}
